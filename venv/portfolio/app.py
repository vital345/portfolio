from flask import Flask, request, render_template, url_for, redirect
from flask_mail import Mail, Message
import os

app = Flask(__name__)

mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": os.environ['EMAIL_USER'],
    "MAIL_PASSWORD": os.environ['EMAIL_PASSWORD']
}

app.config.update(mail_settings)
mail = Mail(app)

@app.route('/')
def home():
    return render_template('home.html')


@app.route('/contact', methods=['POST'])
def contact_email():
    
    msg = Message(
        request.form['name'], 
        sender=request.form['email'], 
        recipients=[os.environ['EMAIL_USER']]
    )
    msg.body = request.form['message']
    mail.send(msg)
    return redirect(url_for('home'), 200)


if __name__ =='__main__':
    app.run()