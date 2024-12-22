from django.contrib import admin
from django.urls import path
from rest_framework.schemas import get_schema_view

from Book.views import CategoryAPIView, DishAPIView, ReceiptAPIView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/cat_list', CategoryAPIView.as_view()),
    path('api/v1/<int:pk>/dish_list', DishAPIView.as_view()),
    path('api/v1/<int:pk>/receipt', ReceiptAPIView.as_view()),
    path('openapi', get_schema_view(
        title="CookBook",
        description="API for dishes and categories"), name='openapi-schema'),
]
