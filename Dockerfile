FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

# ✅ อัปเกรด pip + ติดตั้ง requirements + ติดตั้ง gunicorn แบบ force + เช็กว่า gunicorn มาแน่
RUN pip install --upgrade pip \
 && pip install -r requirements.txt \
 && pip install gunicorn \
 && pip list

# ✅ คัดลอกโค้ด backend ทั้งหมด
COPY backend/ ./backend/

# ✅ สั่งเก็บ static files (ไม่ error แม้ไม่มี DATABASE_URL)
RUN python backend/manage.py collectstatic --noinput

# ✅ ใช้ python -m gunicorn เพื่อกัน error "not in $PATH"
CMD ["python", "-m", "gunicorn", "config.wsgi:application", "--chdir", "backend", "--bind", "0.0.0.0:8000"]
