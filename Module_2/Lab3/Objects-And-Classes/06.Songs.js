class Song {
  constructor(typeList, name, time) {
    this.typeList = typeList;
    this.name = name;
    this.time = time;
  }
}

function main(arr) {
  let len = arr.shift(); // Grab length Use Array.length
  let type = arr.pop(); // grab type of song

  let songList = [];
  arr.forEach((song) => {
    let [typeList, name, time] = song.split("_");

    let newSong = new Song(typeList, name, time);
    songList.push(newSong);
  });
  let filteredSongs = songList.filter((song) => {
    // Filter out songs that don't match the type
    return song.typeList === type;
  });

  if (type === "all") {
    for (let index in songList) {
      let song = songList[index];
      console.log(song.name);
    }
  } else {
    for (let index in filteredSongs) {
      let song = filteredSongs[index];
      console.log(song.name);
    }
  }
}

main([
  4,
  "fav_downIsFav_3:14",
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "all",
]);
