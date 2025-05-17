FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

# ✅ ติดตั้ง gunicorn อีกครั้งแบบชัวร์
RUN pip install gunicorn

COPY backend/ .

RUN python manage.py collectstatic --noinput

CMD ["python", "-m", "gunicorn", "backend.config.wsgi:application", "--bind", "0.0.0.0:8000"]
