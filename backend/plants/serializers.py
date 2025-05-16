from rest_framework import serializers
from .models import Plants
from .models import Orders, OrderItems

class PlantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plants
        fields = '__all__' # ส่งทุก field ที่มีใน model ไปให้ frontend
        
class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItems
        fields = ['plant', 'quantity', 'item_price']

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, source='orderitems_set')

    class Meta:
        model = Orders
        fields = ['id', 'created_at', 'customer_name', 'customer_address', 'payment_method', 'items']
#แปลง object จาก models.py ให้กลายเป็น JSON เพื่อส่งให้ frontend เหมือนแปลงฟอร์มกระดาษเป็นไฟล์ .json ให้เว็บโหลดไปแสดงได้