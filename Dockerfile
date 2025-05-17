FROM python:3.12-slim

WORKDIR /app

# เปลี่ยนตรงนี้ เพราะ requirements.txt อยู่ที่ root แล้ว
COPY requirements.txt .

RUN pip install --upgrade pip && pip install -r requirements.txt

# จากนั้นค่อย copy โฟลเดอร์ backend ทั้งหมดเข้าไป
COPY backend/ .

RUN python manage.py collectstatic --noinput

CMD ["gunicorn", "backend.config.wsgi:application", "--chdir", "backend", "--bind", "0.0.0.0:8000"]

