from django.utils.timezone import now
from rest_framework import generics
from plants.models import Plants, Orders, OrderItems

from .serializers import PlantSerializer,OrderSerializer, OrderItemSerializer
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q

# ดูรายการต้นไม้ทั้งหมด
class PlantListView(generics.ListAPIView):
    queryset = Plants.objects.all().order_by('id')  # 👈 เพิ่ม .order_by('id')
    serializer_class = PlantSerializer
    def get_queryset(self):
        queryset = Plants.objects.all().order_by('id')
        search_query = self.request.query_params.get('search', None)
        if search_query:
            queryset = queryset.filter(
                Q(name__icontains=search_query) | Q(name_th__icontains=search_query)
            )
        return queryset

# ดูต้นไม้แค่ต้นเดียว (ตาม ID)
class PlantDetailView(generics.RetrieveAPIView):
    queryset = Plants.objects.all()
    serializer_class = PlantSerializer
    
class OrderListView(generics.ListAPIView):
    queryset = Orders.objects.all().order_by('-created_at')
    serializer_class = OrderSerializer


class OrderItemListView(generics.ListAPIView):
    queryset = OrderItems.objects.all()
    serializer_class = OrderItemSerializer


class OrderCreateView(generics.CreateAPIView):
    queryset = Orders.objects.all()
    serializer_class = OrderSerializer

    def create(self, request, *args, **kwargs):
        data = request.data
        order = Orders.objects.create(
            customer_name=data['customer_name'],
            customer_address=data['customer_address'],
            created_at=now()
        )
        for item in data['items']:
            OrderItems.objects.create(
                order=order,
                plant_id=item['plant_id'],
                quantity=item['quantity'],
                item_price=item['item_price']   # ✅ ตรงกับ model แล้ว
            )
        return Response({"message": "Order created successfully",
                         "order_id": order.id 
                         }, status=status.HTTP_201_CREATED)

class OrderDetailView(generics.RetrieveAPIView):
    queryset = Orders.objects.all()
    serializer_class = OrderSerializer
    lookup_field = 'id'  # ดึงจาก /orders/<order_id>/



#รับคำขอ (request) จาก URL → ไป query ข้อมูลจาก model → ส่งผลลัพธ์กลับ