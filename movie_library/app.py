from flask import Flask, render_template, request, redirect, url_for, session
from movie_library.models import user
from movie_library.utils.omdb_api import fetch_movie_from_omdb

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Needed for session handling

# In-memory store for simplicity
movie_library = []

@app.route('/')
def home():
    username = session.get("username")
    user = {"name": username} if username else None
    return render_template('index.html', movies=movie_library, user=user)

@app.route('/add', methods=['POST'])
def add_movie():
    title = request.form['title']
    username = request.form['username']
    review = request.form['review']
    rating = int(request.form['rating'])
    genre = request.form.get('genre')  # Optional

    # Store the username in the session
    session['username'] = username

    # Fetch movie details from OMDB
    movie = fetch_movie_from_omdb(title)

    if movie:
        movie['username'] = username
        movie['review'] = review
        movie['rating'] = rating
        movie['genre'] = genre
        movie_library.append(movie)

    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)
    user.list_collection()  