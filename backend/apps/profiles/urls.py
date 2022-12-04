from django.urls import path

from .views import (AgenteListeAPIView, GetProfileAPIView,
                    TopAgenteListeAPIView, UpdateProfileAPIView)

urlpatterns = [
    path('me/', GetProfileAPIView.as_view(), name='get_profile'),
    path('update/<str:username>/', UpdateProfileAPIView.as_view(),
         name='update_profile'),
    path('agents/list/', AgenteListeAPIView.as_view(), name='agents_list'),
    path('top-agents/list/', TopAgenteListeAPIView.as_view(),
         name='top_agents_list'),
]
