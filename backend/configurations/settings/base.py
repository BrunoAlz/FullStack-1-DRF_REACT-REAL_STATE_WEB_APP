from datetime import timedelta
from django.utils.log import DEFAULT_LOGGING
import logging.config
import logging
from pathlib import Path
import environ

env = environ.Env(DEBUG=(bool, False))

BASE_DIR = Path(__file__).resolve().parent.parent.parent
environ.Env.read_env(BASE_DIR / ".env")

SECRET_KEY = env('SECRET_KEY')

DEBUG = env('DEBUG')

ALLOWED_HOSTS = env("ALLOWED_HOSTS").split(" ")

# Application definition

DJANGO_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    'django.contrib.sites'
]

SITE_ID = 1

THIRD_PARTY_APPS = [
    "rest_framework",
    "django_filters",
    "django_countries",
    "phonenumber_field",
    "djoser",
    "rest_framework_simplejwt",
]

LOCAL_APPS = [
    "apps.users",
    "apps.profiles",
    "apps.common",
    "apps.ratings",
]

INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY_APPS + LOCAL_APPS

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "configurations.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "configurations.wsgi.application"


AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


LANGUAGE_CODE = 'pt-br'

TIME_ZONE = 'America/Sao_Paulo'

USE_I18N = True

USE_L10N = True

USE_TZ = True


STATIC_URL = "staticfiles/"
STATIC_ROOT = BASE_DIR / "staticfiles"
STATICFILES_DIR = []
MEDIA_URL = "/mediafiles/"
MEDIA_ROOT = BASE_DIR / "mediafiles"


DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# SET CUSTOM USER MODEL
AUTH_USER_MODEL = "users.User"


# REST FRAMEWORK CONFIG
REST_FRAMEWORK = {
    "DEFAUL_AUTHENTICATION": (
        "rest_framework_simple.authentication.JWTAuthentication",
    )
}

# SIMPLE JWT CONFIG
SIMPLE_JWT = {
    "AUTH_HEADER_TYPE": (
        "Bearer",
        "JWT",
    ),
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=120),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
    'SIGNING_KEY': env('SIGNING_KEY'),
    'AUTH_HEADER_NAME': 'HTTP_AUTHORIZATION',
    'AUTH_TOKEN_CLASSES': ('rest_freamework_simplejwt.tokens.AccessToken',),
}

# DJOSER CONFIG
DJOSER = {
    # User Model Field, usado para fazer o Login
    "LOGIN_FIELD": 'email',
    # Adiciona a Verificação de password, por Confirmação de Digitação
    'USER_CREATE_PASSWORD_RETYPE': True,
    # Manda confirmação para a mudança do email
    'USERNAME_CHANGED_EMAIL_CONFIRMATION': True,
    # Manda confirmação para a mudança da Senha
    'PASSWORD_CHANGED_EMAIL_CONFIRMATION': True,
    # Manda a Confirmação de email no Registro
    'SEND_CONFIRMATION_EMAIL': True,
    # seta o Endpoint para fazer a Troca de Senha
    'PASSWORD_RESET_CONFIRM_URL': "password/reset/confirm/{uid}/{token}",
    # Adiciona a Verificação de password, por Confirmação de Digitação
    'SET_PASSWORD_RETYPE': True,
    # Adiciona a Verificação de password, por Confirmação de Digitação, quando mudar de senha
    'PASSWORD_RESET_CONFIRM_RETYPE': True,
    # Manda confirmação para a mudança da username
    'USERNAME_RESET_CONFIRM_URL': 'email/reset/confirm/{uid}/{token}',
    # Url para ativação da Conta do Usuário
    'ACTIVATION_URL': 'activate/{uid}/{token}',
    # Envia o email de ativação para o usuário, após criar a conta
    'SEND_ACTIVATION_EMAIL': True,
    # Seta as classes dos serializers
    'SERIALIZERS': {
        'user_create': 'apps.users.serializers.CreateUserSerializer',
        'user': 'apps.users.serializers.UserSerializer',
        'current_user': 'apps.users.serializers.CurrentUserSerializer',
        'user_delete': 'djoser.serializers.UserDeleteSerializer',
    },
}


# Logs
logger = logging.getLogger(__name__)

LOG_LEVEL = "INFO"

logging.config.dictConfig({
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "console": {
            "format": "%(asctime)s %(name)-12s %(levelname)-8s %(message)s",
        },
        "file": {
            "format": "%(asctime)s %(name)-12s %(levelname)-8s %(message)s",
        },
        "django.server": DEFAULT_LOGGING["formatters"]["django.server"],
    },
    "handlers": {
        "console": {
            "class": "logging.StreamHandler",
            "formatter": "console",
        },
        "file": {
            "level": "INFO",
            "class": "logging.FileHandler",
            "formatter": "file",
            "filename": "logs/api_backend.log",
        },
        "django.server": DEFAULT_LOGGING["handlers"]["django.server"],
    },
    "loggers": {
        "": {
            "level": "INFO",
            "handlers": ["console", "file"],
            "propagate": False
        },
        "apps": {
            "level": "INFO",
            "handlers": ["console"],
            "propagate": False
        },
        "django.server": DEFAULT_LOGGING["loggers"]["django.server"],
    }
})
