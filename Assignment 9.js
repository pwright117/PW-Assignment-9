class Playlist {
  constructor(name, duration, artist, rating) {
    this.name = name;
    this.duration = duration;
    this.artist = artist;
    this.rating = rating;
  }
}

class Song extends Playlist {
  constructor(name, duration, artist, rating) {
    super(name, duration, artist, rating);
  }
  getName() {
    console.log("\n Name: " + this.name + "\n Artist: " + this.artist + "\n Duration: " + this.duration);
  }
}

class Podcast extends Playlist {
  constructor(name, duration, artist, rating) {
    super(name, duration, artist, rating);

  }
  getName() {
    console.log("\n Name: " + this.name + "\n Duration: " + this.duration);
  }
}

class Movie extends Playlist {
  constructor(name, duration, artist, rating) {
    super(name, duration, artist, rating);
  }
  getName() {
    console.log("\n Name: " + this.name + "\n Rating: " + this.rating + "\n Duration: " + this.duration);
  }
}
let a = new Song("Love On Top","3:20","Beyonce")
let b = new Podcast("Talk The Talk", "10:00")
let c = new Movie("Avengers:End Game", "FOREVER", "5 Stars")
let d = new Podcast("Podcast: The Podcast", "10:00:00")
let e = new Movie("Inception", "3:50", "4 Stars")

var playlist = [a, b, c, d, e]

playlist[0].getName()

function next(){
  i+=0
  playlist[i].getName()
}
