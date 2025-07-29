# 🎬 OOP-Based Movie Library App

A Python-based movie collection manager that allows users to manage their favorite movies, rate them, and write reviews — all using object-oriented programming principles.

## 🚀 Features

- Object-Oriented Design (OOP) using Python
- Base `Movie` class with inheritance: `ActionMovie`, `ComedyMovie`
- Private user rating fields
- Polymorphic display of movies by genre
- User collection management
- Review system for movies
- Connects to the [OMDb API](https://www.omdbapi.com/) to auto-fetch movie data

---

## 🧱 Class Structure

### `Movie`
Base class for all movies. Stores title, year, genre, and a **private rating**.

### `ActionMovie`, `ComedyMovie`
Inherited classes with customized display formats.

### `User`
Represents a user who can add movies to their personal collection.

### `Review`
Lets users leave comments and scores for movies.

---

## 📦 Requirements

- Python 3.x
- `requests` library

Install dependencies using:

```bash
pip install requests
