WEB3BRIDGE Program.
WEB2ACXIII — Assignment 2: OOP-Based Movie Library App

A Flask-powered and OOP-based Python movie manager that allows users to maintain a personal movie collection, fetch real-time movie details from the OMDb API, rate and review movies, and experience polymorphic display per genre — built as part of the Web3Bridge Python/Flask program (WEB2ACXIII).

🚀 Features
✅ Object-Oriented Programming (OOP) Design in Python

✅ Flask-based lightweight UI for interaction

✅ Base Movie class with inheritance: ActionMovie, ComedyMovie

✅ Private fields for user ratings

✅ Polymorphic genre-specific display methods

✅ User class to manage personal movie collections

✅ Review system for adding comments and scores

✅ Integration with OMDb API for real-time movie data

🧱 Class Structure
🎬 Movie
Base class representing any movie.

Attributes: title, year, genre, description, private _rating

Method: display() (polymorphic)

🎞️ ActionMovie / ComedyMovie
Inherited from Movie

Custom display() method per genre

May include extra behavior for action/comedy-specific logic

👤 User
Manages the user’s name and personal movie collection

Methods to add, remove, and list movies

📝 Review
Represents user feedback

Contains username, comment, and score (1-10)

🌐 API Integration
Uses the OMDb API to auto-fetch movie metadata (title, year, genre, description).

Get your OMDb API key from: https://www.omdbapi.com/apikey.aspx

