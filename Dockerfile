FROM python:3.12-slim

WORKDIR /app

# ติดตั้ง dependencies
COPY requirements.txt .
RUN pip install --upgrade pip \
 && pip install -r requirements.txt

# คัดลอกโค้ด backend ทั้งหมดเข้าไป
COPY backend/ ./backend/

# เก็บ static files
RUN python backend/manage.py collectstatic --noinput

# ใช้ python -m gunicorn เพื่อไม่ต้องพึ่ง PATH
CMD ["python", "-m", "gunicorn", "config.wsgi:application", "--chdir", "backend", "--bind", "0.0.0.0:8000"]
