from django.urls import path
from .views import PlantListView, PlantDetailView,OrderListView, OrderItemListView


urlpatterns = [
    path('', PlantListView.as_view()),
    path('<int:pk>/', PlantDetailView.as_view()),
    path('orders/', OrderListView.as_view()),
    path('order-items/', OrderItemListView.as_view()),
]
