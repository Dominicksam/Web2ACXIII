# models/review.py

class Review:
    def __init__(self, user, movie, comment, score):
        self.user = user
        self.movie = movie
        self.comment = comment
        self.score = score

    def display_review(self):
        return f"💬 Review for {self.movie.title} by {self.user.username}: {self.comment} (Score: {self.score}/10)"
