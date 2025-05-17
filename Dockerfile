FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --upgrade pip \
 && pip install -r requirements.txt

COPY backend/ ./backend/

RUN python backend/manage.py collectstatic --noinput

CMD ["python", "-m", "gunicorn", "backend.config.wsgi:application", "--chdir", "backend", "--bind", "0.0.0.0:8000"]
