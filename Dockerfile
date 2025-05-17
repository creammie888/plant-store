FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

# ติดตั้ง pip และ requirements แล้ว list แพ็กเกจทั้งหมดดู
RUN pip install --upgrade pip \
 && pip install -r requirements.txt \
 && pip list  # ✅ เพิ่มเช็กตรงนี้เลย

COPY backend/ ./backend/

RUN python backend/manage.py collectstatic --noinput

CMD ["gunicorn", "config.wsgi:application", "--chdir", "backend", "--bind", "0.0.0.0:8000"]
