from rest_framework import serializers

from .models import Category, Dish


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')


class DishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dish
        fields = ('id', 'name')


class ReceiptSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dish
        fields = ('name', 'receipt')
