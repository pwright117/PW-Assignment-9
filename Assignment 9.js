class Media {
  constructor(name, duration, artist, rating) {
    this.name = name;
    this.duration = duration;
    this.artist = artist;
    this.rating = rating;
  }
}

class Music {
  constructor(name, artist, duration) {
    this.name = name;
    this.artist = artist;
    this.duration = duration;
  }
  getSong() {
    return this.name + " " + this.artist + " " + this.duration;
  }
}
let song = new Music() = ("test", "testing", "1 min")
console.log(getSong())
class Podcast {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;
  }
  getCast() {
    return this.name + " " + this.duration;
  }
}

class Movie {
  constructor(name, rating, duration) {
    this.name = name;
    this.rating = rating;
    this.duration = duration;
  }
  getFilm() {
    return this.name + " " + this.rating + " " + this.duration;
  }
}
