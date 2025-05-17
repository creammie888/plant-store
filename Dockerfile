FROM python:3.12-slim

WORKDIR /app

# 1. Copy requirements ก่อน แล้ว install pip, gunicorn และ requirements
COPY requirements.txt .

RUN pip install --upgrade pip && \
    pip install -r requirements.txt && \
    echo "✅ gunicorn path:" $(which gunicorn) && \
    gunicorn --version

# 2. Copy source code backend ทั้งหมด
COPY backend/ .

# 3. collectstatic
RUN python manage.py collectstatic --noinput

# 4. รัน gunicorn
CMD ["gunicorn", "config.wsgi:application", "--chdir", ".", "--bind", "0.0.0.0:8000"]
