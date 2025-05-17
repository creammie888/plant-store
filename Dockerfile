FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --upgrade pip && pip install -r requirements.txt

# ✅ copy ทั้ง backend เข้า /app
COPY backend/ .

# ✅ เก็บ static
RUN python manage.py collectstatic --noinput

# ✅ ใช้ runserver แทน gunicorn
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
