from django.shortcuts import render, redirect
from django.http import HttpResponse
from . import forms
import openai
import requests
import os
import pathlib


def generate_question(vacancy_link):
    openai.api_key = "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"
    prompt_generate_questions = f"Generate ten questions interviewers are likely to ask {vacancy_link} "
    response = openai.Completion.create(engine="text-davinci-003", prompt=prompt_generate_questions,
                                        max_tokens=2048, temperature=0.5)
    result = response["choices"][0]["text"].strip().replace("\n\n", "\n").split("\n")
    return result


def improve_answer(answer, question):
    prompt = f'Improve the answer "{answer}" to the question "{question}"'
    openai.api_key = "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"
    response = openai.Completion.create(engine="text-davinci-003", prompt=prompt,
                                        max_tokens=2048, temperature=0.5)
    result = response["choices"][0]["text"]
    result = result.strip()
    return result


def encoding_audio_by_path(path):
    url = "https://transcribe.whisperapi.com"
    files = {"file": open(path, "rb")}
    headers = {'Authorization': "Bearer QQ7PZFXAERW2F4LK3U9EUZS9FLNYQ7GD"}
    data = {"diarization": "false",
            "task": "transcribe",
            "fileType": "ogg"}
    response = requests.post(url, headers=headers, data=data, files=files)
    result = eval(response.content)["text"].strip()
    return result


def encoding_audio_by_url(user_url):
    url = "https://transcribe.whisperapi.com"
    headers = {'Authorization': "Bearer QQ7PZFXAERW2F4LK3U9EUZS9FLNYQ7GD"}
    data = {"diarization": "false",
            "task": "transcribe",
            "url": user_url}
    print("Этот этап пройден Функция encoding_audio до запроса")
    response = requests.post(url, headers=headers, data=data)
    print("Этот этап пройден. Функция encoding audio после зароса")
    result = eval(response.content)["text"].strip()
    return result


def questions(request):
    if request.method == "POST":
        result = list()
        vacancy_link = request.POST["link"]
        while True:
            try:
                result = generate_question(vacancy_link=vacancy_link)
                break
            except Exception as ex:
                print(ex)
                continue
        context = {"question_1": result[0], "question_2": result[1], "question_3": result[2],
                   "question_4": result[3], "question_5": result[4], "question_6": result[5],
                   "question_7": result[6], "question_8": result[7], "question_9": result[8],
                   "question_10": result[9]}
        return render(request=request, template_name="main/result.html", context=context)
    return redirect("main")


def index(request):
    form = forms.LinkForm()
    context = {"form": form}
    return render(request=request, template_name="main/index.html", context=context)


def voice(request):
    audio = request.FILES["voice"].read()
    path = pathlib.Path(os.getcwd(), "main", "static", "voices", "voice.wav")
    with open(path, "wb") as file:
        file.write(audio)
    text = encoding_audio_by_path(path=path)
    return HttpResponse(text)


def upgrade_answer(request):
    response = request.POST
    question = response.getlist(key="question")[0]
    answer = response.getlist(key="answer")[0]
    result = improve_answer(answer=answer, question=question)
    return HttpResponse(result)
