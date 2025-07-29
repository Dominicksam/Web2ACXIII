from flask import Flask, render_template, request, redirect, url_for
from movie_library.utils.omdb_api import fetch_movie_from_omdb

app = Flask(__name__)

# Temporary in-memory movie list
movie_library = []

@app.route('/')
def home():
    return render_template('index.html', movies=movie_library)

@app.route('/add', methods=['POST'])
def add_movie():
    title = request.form['title']
    username = request.form['username']
    review = request.form['review']
    rating = int(request.form['rating'])

    movie = fetch_movie_from_omdb(title)
    if movie:
        movie['username'] = username
        movie['review'] = review
        movie['rating'] = rating
        movie_library.append(movie)
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)
