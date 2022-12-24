import smtplib
from email.mime.text import MIMEText


def send_email(message):
    sender = 'bunckerjeik@gmail.com'
    password = 'ydtmtblgdtkssokv'
    sender2 = input('komu: ')

    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()

    try:
        server.login(sender, password)
        msg = MIMEText(message)
        msg['Subject'] = 'HI BAKYT!'
        server.sendmail(sender, sender2, msg.as_string())

        return 'the message was sent succesfullt'
    except Exception as _ex:
        return f'{_ex}\nCheck your login or password!'


def main():
    message = input('Type your message: ')
    print(send_email(message=message))



if __name__ == '__main__':
    main()
