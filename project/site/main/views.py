from django.shortcuts import render, redirect
from django.http import HttpResponse, StreamingHttpResponse
import openai
import os
import pathlib
import time


openai_api_token = "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"
user_agent = " ".join(["Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
                       "AppleWebKit/605.1.15 (KHTML, like Gecko)",
                       "Version/16.3 Safari/605.1.15"])


# ==============================================ADDITIONAL FUNCTIONS====================================================
# ======================================================================================================================
# def parse_vacancy(link):
#     global browser
#     if "https://www.linkedin.com/" in link:
#         return link
#     browser.get(link)
#     bs_object = BeautifulSoup(browser.page_source, "lxml")
#     all_div_blocks = bs_object.find_all(name="div")
#     only_text_div_blocks = list()
#     for div_block in all_div_blocks:
#         check = True
#         for div_block_descendant in div_block.descendants:
#             if "div" == div_block_descendant.name:
#                 check = False
#                 break
#         if check:
#             only_text_div_blocks.append(div_block)
#
#     result = only_text_div_blocks[0]
#     for only_text_div_block in only_text_div_blocks:
#         if len(only_text_div_block.text) > len(result.text):
#             result = only_text_div_block
#
#     result = result.text
#     return result


def generate_question(vacancy_link):
    openai.api_key = openai_api_token
    # vacancy_description = parse_vacancy(link=vacancy_link)
    # prompt_generate_questions = f"Generate 5 questions interviewers are likely to ask {vacancy_description} "
    prompt_generate_questions = f"Generate 5 questions interviewers are likely to ask {vacancy_link} "
    response = openai.Completion.create(model="text-davinci-003",
                                        prompt=prompt_generate_questions, temperature=0.5,
                                        max_tokens=150, top_p=1.0, frequency_penalty=0.0,
                                        presence_penalty=0.0, stream=True)
    return response


def generate_more_question(vacancy_link):
    openai.api_key = openai_api_token
    prompt_generate_questions = f"Generate 5 more questions interviewers are likely to ask {vacancy_link} "
    response = openai.Completion.create(model="text-davinci-003",
                                        prompt=prompt_generate_questions, temperature=0.5,
                                        max_tokens=150, top_p=1.0, frequency_penalty=0.0,
                                        presence_penalty=0.0, stream=True)
    return response


def make_answer_shorter(answer):
    openai.api_key = openai_api_token
    prompt_generate_questions = f"Make this answer shorter {answer} "
    response = openai.Completion.create(model="text-davinci-003",
                                        prompt=prompt_generate_questions, temperature=0.5,
                                        max_tokens=150, top_p=1.0, frequency_penalty=0.0,
                                        presence_penalty=0.0, stream=True)
    return response


def improve_answer(answer, question):
    prompt = f'Improve the answer "{answer}" to the question "{question}"'
    openai.api_key = openai_api_token
    response = openai.Completion.create(model="text-davinci-003",
                                        prompt=prompt, temperature=0.5,
                                        max_tokens=150, top_p=1.0, frequency_penalty=0.0,
                                        presence_penalty=0.0, stream=True)
    return response


def encoding_audio_by_path(path):
    openai.api_key = openai_api_token
    audio_file = open(path, "rb")
    transcript = openai.Audio.transcribe("whisper-1", audio_file)
    return transcript["text"]


# ===================================================VIEWS==============================================================
# ======================================================================================================================
def questions(request):
    """Questions Generations: post-requests with parameters {"link": VacancyLink} on url "../questions"
    Return iterator in bytes view. If decode these bytes you will get json-object with text
    You interested json_object["choices"][0]["text"]"""
    try:
        if request.method == "POST":
            start_time = time.time()
            vacancy_link = request.POST["link"]
            generator = generate_question(vacancy_link=vacancy_link)
            print(f"{time.time() - start_time}")
            return StreamingHttpResponse(generator, content_type='text/json',
                                         headers={"Access-Control-Allow-Origin": "*"})
        return redirect("main")
    except Exception as ex:
        print(f"[ERROR] {ex}")
        return HttpResponse("Sorry, something wrong...", headers={"Access-Control-Allow-Origin": "*"})


def more_questions(request):
    """More questions: post-requests with parameters {"link": VacancyLink} on url "../more-questions"
    Return iterator in bytes view. If decode these bytes you will get json-object with text
    You interested json_object["choices"][0]["text"]"""
    try:
        if request.method == "POST":
            vacancy_link = request.POST["link"]
            generator = generate_more_question(vacancy_link=vacancy_link)
            return StreamingHttpResponse(generator, content_type='text/json',
                                         headers={"Access-Control-Allow-Origin": "*"})
        return redirect("main")
    except Exception as ex:
        print(f"[ERROR] {ex}")
        return HttpResponse("Sorry, something wrong...", headers={"Access-Control-Allow-Origin": "*"})


def make_shorter(request):
    """Make shorter: post-request with parameters {"answer": answer}
    on url "../make-shorter"
    Return iterator in bytes view. If decode these bytes you will get json-object with text
    You interested json_object["choices"][0]["text"]"""
    try:
        if request.method == "POST":
            answer = request.POST["answer"]
            generator = make_answer_shorter(answer=answer)
            return StreamingHttpResponse(generator, content_type='text/json',
                                         headers={"Access-Control-Allow-Origin": "*"})
        return redirect("main")
    except Exception as ex:
        print(f"[ERROR] {ex}")
        return HttpResponse("Sorry, something wrong...", headers={"Access-Control-Allow-Origin": "*"})


def upgrade_answer(request):
    """Improve Answer: post-request with parameters {"answer": answer, "question": question}
    on url "../upgrade-answer"
    Return iterator in bytes view. If decode these bytes you will get json-object with text
    You interested json_object["choices"][0]["text"]"""
    try:
        if request.method == "POST":
            answer = request.POST["answer"]
            question = request.POST["question"]
            result = improve_answer(answer=answer, question=question)
            return StreamingHttpResponse(result, content_type="json", headers={"Access-Control-Allow-Origin": "*"})
        return redirect("main")
    except Exception as ex:
        print(f"[ERROR] {ex}")
        return HttpResponse("Sorry, something wrong...", headers={"Access-Control-Allow-Origin": "*"})


def index(request):
    if request.method == "GET":
        return render(request=request, template_name="main/index.html")
        # return HttpResponse("Здесь скоро будет фронт", headers={"Access-Control-Allow-Origin": "*"})
    return HttpResponse("Sorry, something wrong...", headers={"Access-Control-Allow-Origin": "*"})


def voice(request):
    """Transcribe Voice: POST-request on url "../voice" with parameter {"voice": voice (blob type)}
    Return encoding-text"""
    try:
        if request.method == "POST":
            audio = request.FILES["voice"].read()
            path = pathlib.Path(os.getcwd(), "main", "static", "voices", "voice.wav")
            with open(path, "wb") as file:
                file.write(audio)
            text = encoding_audio_by_path(path=path)
            return HttpResponse(text, headers={"Access-Control-Allow-Origin": "*"})
        return redirect("main")
    except Exception as ex:
        print(f"[ERROR] {ex}")
        return HttpResponse("Sorry, something wrong...", headers={"Access-Control-Allow-Origin": "*"})

# ======================================================================================================================
# ======================================================================================================================
