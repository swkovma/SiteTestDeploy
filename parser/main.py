from selenium import webdriver
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
import time


user_agent = " ".join(["Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
                       "AppleWebKit/605.1.15 (KHTML, like Gecko)",
                       "Version/16.3 Safari/605.1.15"])
headers = {"user-agent": user_agent}
browser = webdriver.Chrome()


def login_to_linkedin(browser):
    login = "abdusamad.dusabaev@yandex.ru"
    password = "qnet20400"
    browser.get(url="https://www.linkedin.com/home")
    inputs = browser.find_elements(By.CLASS_NAME, "input__input")
    login_input = inputs[0]
    password_input = inputs[1]
    login_input.send_keys(login)
    password_input.send_keys(password)
    login_button = browser.find_element(By.CLASS_NAME, "sign-in-form__submit-button")
    login_button.click()
    while True:
        time.sleep(1)
        print("Тик")
        bs_object = BeautifulSoup(browser.page_source, "lxml")
        check = bs_object.find(name="span", class_="global-nav__primary-link-text")
        if check is not None:
            break


def get_vacancy_description(browser: webdriver.Chrome, link):
    browser.get(link)
    bs_object = BeautifulSoup(browser.page_source, "lxml")
    if "https://www.linkedin.com/" in link:
        if "join-form-submit" in browser.page_source:
            login_to_linkedin(browser=browser)
        browser.get(link)
        while True:
            time.sleep(1)
            print("Так")
            bs_object = BeautifulSoup(browser.page_source, "lxml")
            check = bs_object.find(name="div", id="SALARY")
            if check is not None:
                break
        bs_object = BeautifulSoup(browser.page_source, "lxml")
    all_div_blocks = bs_object.find_all(name="div")
    only_text_div_blocks = list()
    for div_block in all_div_blocks:
        check = True
        for div_block_descendant in div_block.descendants:
            if "div" == div_block_descendant.name:
                check = False
                break
        if check:
            only_text_div_blocks.append(div_block)

    result = only_text_div_blocks[0]
    for only_text_div_block in only_text_div_blocks:
        if len(only_text_div_block.text) > len(result.text):
            result = only_text_div_block
    return result.text


def parse_vacancy(link):
    global browser
    browser.get(link)
    bs_object = BeautifulSoup(browser.page_source, "lxml")
    if "https://www.linkedin.com/" in link:
        if "join-form-submit" in browser.page_source:
            login_to_linkedin(browser=browser)
        browser.get(link)
        while True:
            print("Так")
            bs_object = BeautifulSoup(browser.page_source, "lxml")
            check = bs_object.find(name="div", id="SALARY")
            if check is not None:
                break
        bs_object = BeautifulSoup(browser.page_source, "lxml")
    all_div_blocks = bs_object.find_all(name="div")
    only_text_div_blocks = list()
    for div_block in all_div_blocks:
        check = True
        for div_block_descendant in div_block.descendants:
            if "div" == div_block_descendant.name:
                check = False
                break
        if check:
            only_text_div_blocks.append(div_block)

    result = only_text_div_blocks[0]
    for only_text_div_block in only_text_div_blocks:
        if len(only_text_div_block.text) > len(result.text):
            result = only_text_div_block

    result = result.text
    return result


def main():
    options = webdriver.ChromeOptions()
    options.add_argument(f"user-agent={user_agent}")
    # options.add_argument("--headless")
    browser = webdriver.Chrome(options=options)
    login_to_linkedin(browser=browser)
    sites = ["https://www.glassdoor.com/job-listing/java-developer-walt-disney-company-JV_IC1132348_KO0,14_KE15,34.htm?jl=1008445738685&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
             "https://www.indeed.com/viewjob?jk=edca5b86e1a33243&from=api&l=New+York+State&atk=1gpvkcrkb20hn000&sclk=1&sjdu=KrExOckDUwcfZdd7bV4mPzSfjhua7l-6nIjy1orA99f-9CF8pZ3iuoFP4vfDMw6Uu6Qf3rclegEBFt49IIK5VcOzGwDJCZrcG9_9R-8DOqfRh1YIdyTCeBREA0g2UmBFgED5ARkjDaPeYeI5dk7JQHJD2FNtv-kzlWvOa2FnO8xnqJ4ZnlWH5pWMGtkiWHR1Fl0MwwLUaSoh5gZTcEORkll_OWsLYyXMGVwT1itzm9mEQIYoic1h6efPZgiKUPhP&acatk=1gpvkcvj4ih1m800&adid=406859359&ad=-6NYlbfkN0D2F84vRd60vbAhUdEdFLUMk3IdVpfsu5bwqrLl_8am7KYYcsHwWN3HPuXTAjm2XsXd91hJM9S-3Q0FPfwKP7XFXEwA2UVFcLvfU2tBugfJ30pS0K4pxVadtYAp-9mxaZNX812Ll-ggg3rhhfZQ38YtAdL3cSLaFwl_Sq04NH9yZxIm_rrajbV64pWkwBXoIJ71iOVGQ2tVega6OrMtHvsxFKn-FMDdcvnjsdGBf0mxAcEXmjVSJRQ4TQ81BA1SE9zkd-_a_g8Me9BVFqlpKe5D3iG_Td4-4tlR_hh0rokIGtiPJvrRIibHo6ZL530QeG1f9rsTTbBZL8HxK9YyWle8klb9xWOjmubJmt984_dn6yfwmr-4tebalN9YIiCzWkK8JYNHtABd9-S2tNozG7NHUEWxGOLjT2xX-gxWSSj3myp1K_4vL35SGur18AtJda_R3SRa7aDciXlmsyGY-NscYGfGrPQUedFKzAL0CipvBuqMNZKUig6jtx_A7z7uk3M%3D&pub=c1c9785d8d865ac9f92257e7e6a44c520cace3277f6b99df&xkcb=SoDn-_M3T_g8UJ0B6B0JbzkdCdPP",
             "https://www.ziprecruiter.com/c/Monster/Job/Senior-Ambassador,-Consumer-Engagement-Marketing/-in-New-York,NY?jid=0f92492e9a018be3&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
             "https://www.monster.com/job-openings/production-helper-grand-rapids-mi--e7d13618-ac05-4c37-bab7-e76d061c5c5c?sid=80b64fe4-c50d-489c-a646-ee8c0c36687b&jvo=m.l.sc.5&so=m.h.s&hidesmr=1&promoted=LEXEME_PAID",
             "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3491756722",
             "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3472041500",
             "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3476856079"]
    for site in sites[4:]:
        try:
            print(site)
            description = get_vacancy_description(browser=browser, link=site).text
            print(description)
            print("\n\n\n\n")
        except Exception:
            print("error")


def test():
    browser = webdriver.Chrome()
    link = "https://www.glassdoor.com/job-listing/java-developer-walt-disney-company-JV_IC1132348_KO0,14_KE15,34.htm?jl=1008445738685&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
    result = get_vacancy_description(browser=browser, link=link)
    print(result)


if __name__ == "__main__":
    result = parse_vacancy(link="https://www.glassdoor.com/job-listing/java-developer-walt-disney-company-JV_IC1132348_KO0,14_KE15,34.htm?jl=1008445738685&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic")
    print(result)
