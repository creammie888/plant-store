# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
#แมพ (map) ข้อมูลในฐานข้อมูล PostgreSQL ให้ Django เพื่อให้ serializers.py ดึงไปใช้ต่อ
from django.db import models


class Plants(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image_path = models.TextField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    name_th = models.CharField(max_length=100, blank=True, null=True)
    sunlight = models.CharField(max_length=255, blank=True, null=True)  # เพิ่มคอลัมน์ใหม่
    water = models.CharField(max_length=255, blank=True, null=True)     # เพิ่มคอลัมน์ใหม่
    care_tip = models.TextField(blank=True, null=True)                  # เพิ่มคอลัมน์ใหม่


    class Meta:
        managed = False
        db_table = 'plants'

class Orders(models.Model):
    id = models.AutoField(primary_key=True)
    created_at = models.DateTimeField()
    customer_name = models.CharField(max_length=255)
    customer_address = models.TextField()
    payment_method = models.CharField(max_length=50) 
    class Meta:
        managed = True
        db_table = 'orders'


class OrderItems(models.Model):
    id = models.AutoField(primary_key=True)
    order = models.ForeignKey(Orders, on_delete=models.CASCADE, related_name='items')
    plant = models.ForeignKey('Plants', on_delete=models.CASCADE)
    quantity = models.IntegerField()
    item_price = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        managed = True
        db_table = 'order_items'
        

