FROM python:3.12-slim

# 1. Set working directory ให้ตรงกับที่มี manage.py
WORKDIR /app

# 2. คัดลอก requirements และติดตั้ง dependencies
COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

# 3. คัดลอก backend ทั้งหมดเข้ามา
COPY backend/ /app

# 4. รัน collectstatic (optional ถ้าใช้)
RUN python manage.py collectstatic --noinput || true

# 5. รัน Django server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
