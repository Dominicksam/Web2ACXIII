# utils/omdb_api.py

import requests
from movie_library.models.movie import Movie, ActionMovie, ComedyMovie  # fixed import

def fetch_movie_from_omdb(title, api_key):
    url = f"http://www.omdbapi.com/?t={title}&apikey={api_key}"
    response = requests.get(url)
    data = response.json()

    if data.get("Response") == "True":
        genre = data.get("Genre", "Unknown").split(",")[0]
        year = data.get("Year", "N/A")
        title = data.get("Title", title)

        if "Action" in genre:
            return ActionMovie(title, year, genre)
        elif "Comedy" in genre:
            return ComedyMovie(title, year, genre)
        else:
            return Movie(title, year, genre)
    else:
        print(f"❌ Movie not found: {title}")
        return None
# utils/omdb_api.py