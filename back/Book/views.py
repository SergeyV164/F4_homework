from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Category, Dish
from .serializers import CategorySerializer, DishSerializer, ReceiptSerializer


class CategoryAPIView(APIView):
    def get(self, request):
        queryset = Category.objects.all()
        return Response({'items': CategorySerializer(queryset, many=True).data})


class DishAPIView(APIView):
    def get(self, request, pk):
        queryset = Dish.objects.filter(cat__exact=pk)
        return Response({'dish': DishSerializer(queryset, many=True).data})


class ReceiptAPIView(APIView):
    def get(self, request, pk):
        queryset = Dish.objects.filter(id__exact=pk)
        return Response({'receipt': ReceiptSerializer(queryset, many=True).data})
