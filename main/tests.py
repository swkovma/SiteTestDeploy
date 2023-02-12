import requests


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


if __name__ == "__main__":
    print(encoding_audio_by_path(path="static/voices/voice.wav"))
