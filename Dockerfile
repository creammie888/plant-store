FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --upgrade pip && \
    pip install gunicorn && \
    pip install -r requirements.txt && \
    echo "✅ gunicorn path:" $(which gunicorn) && \
    gunicorn --version

COPY backend/ ./backend/

RUN python backend/manage.py collectstatic --noinput

CMD ["gunicorn", "config.wsgi:application", "--chdir", "backend", "--bind", "0.0.0.0:8000"]
