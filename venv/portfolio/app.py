from flask import Flask, request, render_template, url_for, redirect
import smtplib, ssl
from email.message import EmailMessage
from email.mime.text import MIMEText
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, BooleanField
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError
import os

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/contact', methods=['POST'])
def contact_email():
    name = request.form.get('name')
    subject = request.form.get('subject')
    email = request.form.get('email')
    messg = request.form.get('message')

    whole_body = [name, subject, email, messg]

    msg = EmailMessage()
    msg['Subject'] = subject
    msg['From'] = os.environ['EMAIL_USER']
    msg['To'] = os.environ['EMAIL_USER']

    context=ssl.create_default_context()

    with smtplib.SMTP('smtp.gmail.com', 587) as smtp:

        smtp.starttls(context=context)
        message = ''
        smtp.login(os.environ['EMAIL_USER'], os.environ['EMAIL_PASSWORD'])
        for item in whole_body:
            print(item)
            message = message + f'[{item}] \n\n '

        # smtp.sendmail(os.environ['EMAIL_USER'], os.environ['EMAIL_USER'], message)
        msg.set_content(message)
        smtp.send_message(msg)

    return redirect(url_for('home'))
    # 


if __name__ =='__main__':
    app.run(debug=True)