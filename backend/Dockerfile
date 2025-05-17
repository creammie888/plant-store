# backend/Dockerfile

FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

COPY . /app

RUN python manage.py collectstatic --noinput || true

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
