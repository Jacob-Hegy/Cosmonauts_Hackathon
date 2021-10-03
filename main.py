from flask import Flask, render_template

#For development make sure to add FLASK_APP=main.py and FLASK_DEBUG=1 to the PATH

app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home_page():
    return render_template('home.html')

@app.route('/calendar-input')
def calendar_input():
    return render_template('calendar_input.html')

@app.route('/about-us')
def about_us():
    return render_template('about_us.html')
