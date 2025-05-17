FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --upgrade pip \
 && pip install -r requirements.txt \
 && pip list

# ✅ ตรวจว่าโฟลเดอร์ backend ถูก copy เข้ามาจริง
COPY backend /app/backend

RUN python /app/backend/manage.py collectstatic --noinput

CMD ["gunicorn", "config.wsgi:application", "--chdir", "/app/backend", "--bind", "0.0.0.0:8000"]
