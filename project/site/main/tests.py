from views import generate_question
import requests
import pathlib
import time
import openai


def encoding_audio_by_path(path):
    openai.api_key = "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"
    audio_file = open(path, "rb")
    transcript = openai.Audio.transcribe("whisper-1", audio_file)
    return transcript["text"]


def test():
    # result = generate_question(vacancy_link="https://test.com")
    response = requests.post(url="http://127.0.0.1:8000/questions", data={"link": "https://www.glassdoor.com/job-listing/java-developer-walt-disney-company-JV_IC1132348_KO0,14_KE15,34.htm?jl=1008445738685&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"})
    result = eval(response.content.decode("utf-8").replace("}{", "},{"))
    for element in response.content:
        print(element["choices"][0]["text"], end=" ")
    # print("Start testing...")
    # start_time = time.time()
    # response = requests.post(url="http://127.0.0.1:8000/questions", data={"link": "https://www.glassdoor.com/job-listing/java-developer-walt-disney-company-JV_IC1132348_KO0,14_KE15,34.htm?jl=1008445738685&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"})
    # print(f"TIME: {time.time() - start_time}")
    # for element in response.content:
    #     print(element)
    #     print(eval(element.decode("utf-8")))


if __name__ == "__main__":
    path = pathlib.Path("static", "voices", "voice.wav")
    result = encoding_audio_by_path(path=path)
    print(result)

