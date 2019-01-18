"""
"""
import os
from flask import Flask, render_template, redirect, request, session,  url_for, Markup



app = Flask(__name__)
app.secret_key = b'_you_will_never_guess'


@app.route('/')
@app.route('/index')
def home():
    content = [{'type':'text', 'value':'Lorem ipsum dolor sit ula convallisa, mauris urna neque at odio. '},
               {'type':'image', 'value':'pic01.png'},
               ]
    data = [{'title':'Paris', 'buble':'Rio','content': content},
            {'title':'Paris', 'buble':'Rio','content': content},
            {'title':'Paris', 'buble':'Rio','content': content},
            ]
    return render_template('index.html', data=data)
    


if __name__ == "__main__":
	app.run(debug = True)