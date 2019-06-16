class Media {
  constructor(name, duration, artist, rating) {
    this.name = name;
    this.duration = duration;
    this.artist = artist;
    this.rating = rating;
  }
}

class Music extends Media {
  constructor(name, duration, artist, rating) {
    super(name)
    super(artist)
    super(duration)
  }
  getName() {
    console.log(this.name + " " + this.artist + " " + this.duration);
  }
}

class Podcast extends Media {
  constructor(name, duration, artist, rating) {
    super(name);

  }
  getName() {
    console.log(this.name + " " + this.duration);
  }
}

class Movie extends Media {
  constructor(name, duration, artist, rating) {
    super(name);
    super(rating);
    super(duration);
  }
  getName() {
    console.log(this.name + " " + this.rating + " " + this.duration);
  }
}
