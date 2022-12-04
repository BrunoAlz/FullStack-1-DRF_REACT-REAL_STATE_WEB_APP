from django.contrib.auth import get_user_model
from django_countries.serializer_fields import CountryField
from djoser.serializers import UserCreateSerializer
from phonenumber_field.serializerfields import PhoneNumberField
from rest_framework import serializers


User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    gender = serializers.CharField(
        # Inner Join no Profile para buscar dados do Profile
        source='profile.gender'
    )

    phone_number = PhoneNumberField(
        source='profile.phone_number'
    )

    profile_photo = serializers.ImageField(
        source='profile.profile_photo'
    )

    country = CountryField(
        source='profile.country'
    )

    city = serializers.CharField(
        source='profile.city'
    )

    top_seller = serializers.BooleanField(
        source='profile.top_seller'
    )

    first_name = serializers.SerializerMethodField()
    top_seller = serializers.SerializerMethodField()

    full_name = serializers.SerializerMethodField(
        # Chama a @Property do User model para buscar o Nome completo
        source='get_full_name'
    )

    class Meta:
        model = User
        fields = [
            'id', 'username', 'email',
            'first_name', 'last_name', 'full_name',
            'gender', 'phone_number', 'profile_photo',
            'country', 'city', 'top_seller',]

    def get_first_name(self, obj):
        return obj.first_name.title()

    def get_last_name(self, obj):
        return obj.last_name.title()

    # Se o Usuário da Requisição,  for um super Usuário, será exibido uma representação
    def to_representation(self, instance):
        representation = super(UserSerializer, self).to_representation(instance)
        if representation.is_superuser:
            representation['admin'] = True
        return representation


class CreateUserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = [
            'id', 'username', 'email',
            'first_name', 'last_name', 'password']
