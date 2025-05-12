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
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True, source='orderitems_set')

    class Meta:
        model = Orders
        fields = ['id', 'customer_name', 'customer_address', 'customer_email', 'created_at', 'items']

#แปลง object จาก models.py ให้กลายเป็น JSON เพื่อส่งให้ frontend เหมือนแปลงฟอร์มกระดาษเป็นไฟล์ .json ให้เว็บโหลดไปแสดงได้