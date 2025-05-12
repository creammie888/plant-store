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

    class Meta:
        managed = False
        db_table = 'plants'

class Orders(models.Model):
    customer_name = models.CharField(max_length=100)
    customer_address = models.TextField()
    customer_email = models.CharField(max_length=255)
    created_at = models.DateTimeField()
    
    class Meta:
        managed = False 
        db_table = 'orders'


class OrderItems(models.Model):
    order = models.ForeignKey(Orders, on_delete=models.DO_NOTHING, db_column='order_id')
    plant = models.ForeignKey(Plants, on_delete=models.DO_NOTHING, db_column='plant_id')
    quantity = models.IntegerField()
    item_price = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        managed = False
        db_table = 'order_items'