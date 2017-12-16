# importing csv module
import csv
import smtplib
 
# csv file name
filename = "Book1.csv"
 
# initializing the titles and rows list
fields = []
rows = []
 
# reading csv file
with open(filename, 'r') as csvfile:
    # creating a csv reader object
    csvreader = csv.reader(csvfile)
     
    # extracting field names through first row
    fields = next(csvreader)
 
    # extracting each data row one by one
    for row in csvreader:
        rows.append(row)
# Python code to illustrate Sending mail from 
# your Gmail account 

 
# creates SMTP session
s = smtplib.SMTP('smtp.gmail.com', 587)
name=input()
password=input()
 
# start TLS for security
s.starttls()
 
# Authentication
s.login(name, password)
 
# message to be sent
message = "Sample python message"

for row in rows:
# sending the mail
    s.sendmail("saivicky2015@gmail.com", row, message)
 
# terminating the session
s.quit()

