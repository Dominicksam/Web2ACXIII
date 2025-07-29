# main.py

from models.user import User
from models.movie import ActionMovie
from models.review import Review
from utils.omdb_api import fetch_movie_from_omdb

def main():
    api_key = "your_actual_omdb_api_key"  # Replace with your OMDb API key
    user = User("Dominic")

    # Add manually created movie
    movie1 = ActionMovie("Inception", "2010", "Action")
    movie1.set_rating(9)
    user.add_movie(movie1)

    # Add movie from OMDb API
    movie2 = fetch_movie_from_omdb("The Hangover", api_key)
    if movie2:
        movie2.set_rating(8)
        user.add_movie(movie2)

    # Add review
    review = Review(user, movie1, "Mind-bending and intense!", 9)
    print(review.display_review())

    # List collection
    user.list_collection()

if __name__ == "__main__":
    main()
