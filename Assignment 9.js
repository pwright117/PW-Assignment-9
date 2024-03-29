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
      document.getElementById("mediaName").innerHTML = ("Name: " + this.name + "<br> Artist: " + this.artist + "<br> Duration: " + this.duration);
    }
  }

  class Podcast extends Playlist {
    constructor(name, duration, artist, rating) {
      super(name, duration, artist, rating);

    }
    getName() {
      document.getElementById("mediaName").innerHTML = ("Name: " + this.name + "<br> Duration: " + this.duration);
    }
  }

  class Movie extends Playlist {
    constructor(name, duration, artist, rating) {
      super(name, duration, artist, rating);
    }
    getName() {
      document.getElementById("mediaName").innerHTML = ("Name: " + this.name + "<br> Rating: " + this.rating + "<br> Duration: " + this.duration);
    }
  }
  let a = new Song("Love On Top","3:20","Beyonce")
  let b = new Podcast("Talk The Talk", "10:00")
  let c = new Movie("Avengers:End Game", "FOREVER", "", "5 Stars")
  let d = new Podcast("Podcast: The Podcast", "10:00:00")
  let e = new Movie("Inception", "3:50", "", "4 stars")

  var playlist = [a, b, c, d, e]

  playlist.push(new Movie ("Sexy", "2:00", "", "0 Stars"))
  //add to playlist

  let holder=0

  function play() {
    if (holder == -1){
      holder = 0
      playlist[holder].getName()
    } else {
    playlist[holder].getName()
    }
  }

  function pause() {
    document.getElementById("mediaName").innerHTML = ("")
  }

  function next() {
    if (holder == -1) {
      holder = 0
      playlist[holder].getName()
    } else {
      holder++
      if (holder>=playlist.length) {
        holder=playlist.length
        document.getElementById("mediaName").innerHTML = ("")
      } else {
        playlist[holder].getName()
      }
    }
    }

  function previous(){
    holder--
    if (holder<0) {
      holder=-1
      document.getElementById("mediaName").innerHTML = ("")
    } else {
    playlist[holder].getName();
    }
  }
