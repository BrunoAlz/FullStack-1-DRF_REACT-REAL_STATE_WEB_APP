from rest_framework.exceptions import APIException
from django.utils.translation import gettext_lazy as _


class PropertyNotFound(APIException):
    status_code = 404
    deafult_detail = _("The requested property does not exist")
