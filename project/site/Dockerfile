FROM python

RUN pip install --upgrade pip
RUN pip install django
RUN pip install openai

COPY . .
WORKDIR .

ENTRYPOINT ["python", "manage.py"]
CMD ["runserver", "0.0.0.0:8000"]