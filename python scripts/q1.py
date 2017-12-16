
import smtplib, getpass, csv
email = input("email:\n")  
pwd = getpass.getpass(" password:\n") 
file = open('trailemails.csv', 'r') 
reader = csv.reader(file)
emails = [] 
for x in reader:
    emails.append(x[0])
body = "Hello, We from GDG invite you to the event we are conducting on 18th December, 2017."
mail  = smtplib.SMTP('smtp.gmail.com', 587) 
mail.ehlo()
mail.starttls()
senemail = input("Email id of the sender: ")
mail.login(email, pwd)
mail.sendmail(senemail,emails, body)
mail.close()