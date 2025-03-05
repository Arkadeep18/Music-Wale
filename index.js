document.addEventListener("DOMContentLoaded", function () {
    function analyzeMood() {
        let mood = document.getElementById("moodInput").value.toLowerCase();
        let songTitle = document.getElementById("songTitle");
        let songArtist = document.getElementById("songArtist");
        let songPlayer = document.getElementById("songPlayer");
        let body = document.body;
        let videoBackground = document.getElementById("videoBackground");

        let moodSongs = {
            happy: { title: "Matragashti", artist: "Mohit Chauhan", url: "https://f9h0nyjwbp.ufs.sh/f/wgwsfoyDA91c6z8eBrPzFY8b5NnRcW01xVteolC2IfiLPAsh", video: "https://f9h0nyjwbp.ufs.sh/f/wgwsfoyDA91cyrcnqU5e0nIHlgMWqvixUP6tXfpbQ9FjO5Yc" },
            love: { title: "Satranga", artist: "Arijit Singh", url: "https://f9h0nyjwbp.ufs.sh/f/wgwsfoyDA91cXvZnFKTYJR5rcw3TnCNHI8Zu0Q46M2d9zyYU", video: "https://f9h0nyjwbp.ufs.sh/f/wgwsfoyDA91c1BjoW4l6ZFKNTOjBLPmIRcleVYfEQ9Sadpyu" },
            sad: { title: "Phir Bhi Tumko Chaahunga", artist: "Arijit Singh", url: "https://f9h0nyjwbp.ufs.sh/f/wgwsfoyDA91cmHtaxt1hkuNnEfKOezvrLqR24D13W6oiCFXZ", video: "https://f9h0nyjwbp.ufs.sh/f/wgwsfoyDA91cC2baZpOQVhMqo28zfXauvjsIr0lBA96URW3N" },
            romantic: { title: "Kalank", artist: "Arijit Singh", url: "https://f9h0nyjwbp.ufs.sh/f/wgwsfoyDA91cDgKahhnN5MRqNI6TY7Khl94U3tfauypmerxz", video: "https://f9h0nyjwbp.ufs.sh/f/wgwsfoyDA91c5FdflPV7NbHP9trBdZoSJgcul2AjKIETw18X" },
            angry: { title: "Jagga Jiteya", artist: "Daler Mehndi, Dee MC & Shashwat Sachdev", url: "https://f9h0nyjwbp.ufs.sh/f/wgwsfoyDA91cUj6jmUkte4vjnBOwDlucFRLCgoNWdXyTKm20", video: "https://f9h0nyjwbp.ufs.sh/f/wgwsfoyDA91cnnWFrJv42HODNWSV9qTRkcJpsvPYXGQZAlFE" },
            party: { title: "Naina Da Kya Kasoor", artist: "Amit Trivedi", url: "https://f9h0nyjwbp.ufs.sh/f/wgwsfoyDA91crcosxEWJeab817hsyoOV0wNGifkQlKjIxScR", video: "https://f9h0nyjwbp.ufs.sh/f/wgwsfoyDA91czm5B7rhbMr4oEiD6JOLywvnqdjWhlRGfpaKu" },
            excited: { title: "Kashmir Main Tu Kanyakumari", artist: "Sunidhi Chauhan, Arijit Singh, Neeti Mohan", url: "https://f9h0nyjwbp.ufs.sh/f/wgwsfoyDA91cl8hB8CXEuVpncUAIlv02bBM58HQYzjy96K3X", video: "https://f9h0nyjwbp.ufs.sh/f/wgwsfoyDA91c3EvvuLmZ0WODpwglbiPuqrj2SQnvU1fLkctB" }
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
