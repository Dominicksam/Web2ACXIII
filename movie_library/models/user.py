# models/user.py

class User:
    def __init__(self, username):
        self.username = username
        self.collection = []

    def add_movie(self, movie):
        self.collection.append(movie)

    def list_collection(self):
        print(f"🎬 {self.username}'s Movie Library:")
        for movie in self.collection:
            print(movie.display())
