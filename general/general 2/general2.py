#requires python 2.7.11
#requires chromedriver
#requires selenium

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import selenium.webdriver.chrome.service as service

#set username and password
usernameStr = input()
passwordStr = input()
service = service.Service('/Users/himanshu/Desktop/gdg_challenges/chromedriver')
service.start()
browser = webdriver.Chrome()
browser.get('http://phc.prontonetworks.com/cgi-bin/authlogin?URI=http://www.gstatic.com/generate_204')

# fill in username and hit the next button

username = browser.find_element_by_tag_name('userId')
username.send_keys(usernameStr)
password = browser.find_element_by_tag_name('password')
password.send_keys(passwordStr)

signInButton = browser.find_element_by_tag_name('Submit22')
signInButton.click()
