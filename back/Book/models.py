from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=32)

    def __str__(self):
        return self.name


class Dish(models.Model):
    name = models.CharField(max_length=128)
    receipt = models.TextField(blank=True)
    cat = models.ForeignKey(Category, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.name

