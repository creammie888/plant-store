FROM python:3.12-slim

WORKDIR /app

# ติดตั้ง dependencies
COPY backend/requirements.txt ./requirements.txt
RUN pip install --upgrade pip && pip install -r requirements.txt

# คัดลอกทั้งหมดของ backend
COPY backend/ ./

# รัน collectstatic และ migrate ก่อน start
RUN python manage.py collectstatic --noinput
RUN python manage.py migrate

# เริ่มเซิร์ฟเวอร์
CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000"]
