FROM python:3.12-slim

WORKDIR /app

# 1. ติดตั้งแค่ requirement ก่อน
COPY requirements.txt .

# 2. ติดตั้ง pip + gunicorn + lib
RUN pip install --upgrade pip && \
    pip install -r requirements.txt && \
    echo "✅ gunicorn path:" $(which gunicorn) && \
    gunicorn --version

# 3. ค่อย copy source code มาทีหลัง
COPY backend/ /app/backend/

# 4. collectstatic
RUN python /app/backend/manage.py collectstatic --noinput

# 5. ใช้ gunicorn จาก PATH ที่ system จำได้
CMD ["gunicorn", "config.wsgi:application", "--chdir", "backend", "--bind", "0.0.0.0:8000"]
