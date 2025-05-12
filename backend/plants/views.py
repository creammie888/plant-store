from rest_framework import generics
from .models import Plants,Orders, OrderItems
from .serializers import PlantSerializer,OrderSerializer, OrderItemSerializer

# ดูรายการต้นไม้ทั้งหมด
class PlantListView(generics.ListAPIView):
    queryset = Plants.objects.all().order_by('id')  # 👈 เพิ่ม .order_by('id')
    serializer_class = PlantSerializer

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

#รับคำขอ (request) จาก URL → ไป query ข้อมูลจาก model → ส่งผลลัพธ์กลับ