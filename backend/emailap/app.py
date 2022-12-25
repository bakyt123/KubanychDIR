import smtplib
from email.mime.text import MIMEText


def send_email(message):
    sender = 'martingasparan115@gmail.com'
    password = 'zxkdkebuhqhfqijd'
    sender2 = 'bumeshov@yandex.ru'

    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()

    try:
        server.login(sender, password)
        msg = MIMEText(message)
        msg['Subject'] = 'SABRINA...'
        server.sendmail(sender, sender2, msg.as_string())

        return 'the message was sent succesfullt'
    except Exception as _ex:
        return f'{_ex}\nCheck your login or password!'



x = 0
while x < 50:
    x += 1
    message = 'DO YOU REMEMBER WHAT YOU DID LAST SUMMER???? I AM))) '
    print(send_email(message=message))


if __name__ == '__call__':
    call()
