FROM python:3.12-slim

# 1. สร้าง working directory
WORKDIR /app

# 2. คัดลอก requirements และติดตั้ง dependencies
COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

# 3. คัดลอก source code จาก backend เข้ามาใน /app
COPY backend/ /app

# 4. รัน collectstatic ถ้ามี static files
RUN python manage.py collectstatic --noinput || true

# 5. สั่งให้ Django รัน server บน 0.0.0.0:8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
