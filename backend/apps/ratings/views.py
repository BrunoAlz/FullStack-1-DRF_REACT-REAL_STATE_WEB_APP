from django.contrib.auth import get_user_model
from rest_framework import permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

from django.utils.translation import gettext_lazy as _

from apps.profiles.models import Profile

from .models import Rating

User = get_user_model()

# create agent review


@api_view(["POST"])
@permission_classes([permissions.IsAuthenticated])
def create_agent_review(request, profile_id):

    try:
        agent_profile = Profile.objects.get(id=profile_id, is_agent=True)
        data = request.data

        profile_user = User.objects.get(pkid=agent_profile.user.pkid)
        if profile_user.email == request.user.email:
            formatted_response = {"message": _("You can't rate yourself")}
            return Response(formatted_response, status=status.HTTP_403_FORBIDDEN)

        alreadyExists = agent_profile.agent_review.filter(
            agent__pkid=profile_user.pkid
        ).exists()

        if alreadyExists:
            formatted_response = {"detail": _("Profile already reviewed")}
            return Response(formatted_response, status=status.HTTP_400_BAD_REQUEST)

        elif data["rating"] == 0:
            formatted_response = {"detail": _("Please select a rating")}
            return Response(formatted_response, status=status.HTTP_400_BAD_REQUEST)

        else:
            review = Rating.objects.create(
                rater=request.user,
                agent=agent_profile,
                rating=data["rating"],
                comment=data["comment"],
            )
            reviews = agent_profile.agent_review.all()
            agent_profile.num_reviews = len(reviews)

            total = 0
            for i in reviews:
                total += i.rating

            agent_profile.rating = round(total / len(reviews), 2)
            agent_profile.save()
            return Response(_("Review Added"))

    except Profile.DoesNotExist:
        formatted_response = {"message": _("This user is not an Agent")}
        return Response(formatted_response)
