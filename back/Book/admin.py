from django.contrib import admin
from .models import Dish, Category


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', )


class DishAdmin(admin.ModelAdmin):
    list_display = ('name', 'cat')


admin.site.register(Category, CategoryAdmin)
admin.site.register(Dish, DishAdmin)
