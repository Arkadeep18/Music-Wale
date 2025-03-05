document.addEventListener("DOMContentLoaded", function () {
    function analyzeMood() {
        let mood = document.getElementById("moodInput").value.toLowerCase();
        let songTitle = document.getElementById("songTitle");
        let songArtist = document.getElementById("songArtist");
        let songPlayer = document.getElementById("songPlayer");
        let body = document.body;
        let videoBackground = document.getElementById("videoBackground");

        let moodSongs = {
            happy: { title: "Matragashti", artist: "Mohit Chauhan", url: "Matargashti.mp3", video: "Matargashti.mp4" },
            love: { title: "Satranga", artist: "Arijit Singh", url: "Satranga - Animal 128 Kbps.mp3", video: "Satranga.mp4" },
            sad: { title: "Phir Bhi Tumko Chaahunga", artist: "Arijit Singh", url: "Phirbhitumko.mp3", video: "PhirBhiTumko.mp4" },
            romantic: { title: "Kalank", artist: "Arijit Singh", url: "kalank.mp3", video: "Kalank.mp4" },
            angry: { title: "Jagga Jiteya", artist: "Daler Mehndi, Dee MC & Shashwat Sachdev", url: "JaggaJiteya.mp3", video: "Jaggajiteya.mp4" },
            party: { title: "Naina Da Kya Kasoor", artist: "Amit Trivedi", url: "Naina da kya  kasoor.mp3", video: "NainadaKyaKasoor.mp4" },
            excited: { title: "Kashmir Main Tu Kanyakumari", artist: "Sunidhi Chauhan, Arijit Singh, Neeti Mohan", url: "Kashmir Main.mp3", video: "KashmirMain.mp4" }
        };

        let foundMood = Object.keys(moodSongs).find(m => mood.includes(m));

        if (foundMood) {
            let song = moodSongs[foundMood];
            songTitle.textContent = song.title;
            songArtist.textContent = "By " + song.artist;
            songPlayer.src = song.url;
            songPlayer.style.display = "block";
            songPlayer.play();

            // Set background video
            videoBackground.src = song.video;
            videoBackground.style.display = "block";
            videoBackground.play();

            // Add animation effects
            body.style.transition = "background 1s ease-in-out";
            songTitle.classList.add("fade-in");
            songArtist.classList.add("fade-in");
        } else {
            songTitle.textContent = "No matching song found";
            songArtist.textContent = "Try a different mood";
            songPlayer.style.display = "none";
            videoBackground.style.display = "none";
        }
    }
    
    window.analyzeMood = analyzeMood;
});
