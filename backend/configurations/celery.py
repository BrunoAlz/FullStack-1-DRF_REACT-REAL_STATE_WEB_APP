from __future__ import absolute_import

import os

from celery import Celery
from configurations.settings import base

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "configurations.settings.development")

app = Celery("configurations")

app.config_from_object("configurations.settings.development", namespace="CELERY"),

app.autodiscover_tasks(lambda: base.INSTALLED_APPS)
