
from selenium import webdriver
import getpass                  


url_for_logging_in = "http://phc.prontonetworks.com/cgi-bin/authlogin?URI=http://go.microsoft.com/fwlink/&LinkID=219472&clcid=0x409"
url_for_logging_out = "http://phc.prontonetworks.com/cgi-bin/authlogout"


chromedriver = "C://chromedriver.exe"


print("Log in\n")
print("Logout\n")
option = ""
while (option != "1" and option!="2"):
    option = input()
    if (option == "1"):
        
        reg = input(" Registration number:\n")
        pwd = getpass.getpass(" password:\n")

        browser = webdriver.Chrome(chromedriver)
        browser.get(url_for_logging_in)

       
        username = browser.find_element_by_name("userId")
        password = browser.find_element_by_name("password")

       
        username.send_keys(reg)
        password.send_keys(pwd)

    
        browser.find_element_by_name("Submit22").click()
        browser.close()
        browser.quit()

    elif (option == "2"):
        browser = webdriver.Chrome(chromedriver)
        browser.get(url_for_logging_out)
        browser.close()
        browser.quit()
    else:
        print("please enter 1 or 2")

