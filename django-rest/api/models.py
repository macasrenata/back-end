from django.db import models
from django.db import models


class Item(models.Model):

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)