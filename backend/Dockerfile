# Dockerfile for Django Backend
FROM python:3.10

# ติดตั้ง PostgreSQL client เพื่อให้ใช้ pg_isready ได้
RUN apt-get update && apt-get install -y postgresql-client

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt
RUN pip install --upgrade pip

COPY . .

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
