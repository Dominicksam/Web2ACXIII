# models/movie.py

class Movie:
    def __init__(self, title, year, genre):
        self.title = title
        self.year = year
        self.genre = genre
        self.__user_rating = None  # Private field

    def set_rating(self, rating):
        if 0 <= rating <= 10:
            self.__user_rating = rating
        else:
            print("Rating must be between 0 and 10.")

    def get_rating(self):
        return self.__user_rating

    def display(self):
        return f"{self.title} ({self.year}) - Genre: {self.genre}, Rating: {self.get_rating() or 'Not Rated'}"

class ActionMovie(Movie):
    def display(self):
        return f"🔥 [Action] {self.title} - Year: {self.year}, User Rating: {self.get_rating() or 'N/A'}"

class ComedyMovie(Movie):
    def display(self):
        return f"😂 [Comedy] {self.title} - Laughs Guaranteed! Rating: {self.get_rating() or 'Not Rated'}"
