// JavaScript for the Favorites page (favorites.html)

document.addEventListener("DOMContentLoaded", function () {
    const favoritesList = document.querySelector(".favorites-list");

    // Function to retrieve saved videos from local storage and display them
    function displayFavorites() {
        // Get the favorites list from local storage
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if (favorites.length === 0) {
            // If no favorites are saved, display a message
            favoritesList.innerHTML = "<p>No saved videos in Favorites.</p>";
        } else {
            // Display saved videos
            favoritesList.innerHTML = "";
            favorites.forEach((item, index) => {
                const videoItem = document.createElement("div");
                videoItem.classList.add("vid", "favorite-vid");
                videoItem.innerHTML = `
                    <h3 class="title">${index + 1}. ${item.title}</h3>
                    <video src="${item.videoSrc}" controls></video>
                `;
                favoritesList.appendChild(videoItem);
            });
        }
    }

    // Call the function to display saved videos when the page loads
    displayFavorites();
});
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/style.css">
    <title>Favorites</title>
    <style>
        /* Additional styles for the Favorites page */
        .favorites-container {
            display: grid;
            grid-template-columns: 1fr 3fr;
            gap: 20px;
            padding: 20px;
        }

        .favorites-list {
            background: #fff;
            color: black;
            border-radius: 5px;
            overflow-y: scroll;
            max-height: 600px;
            padding: 10px;
        }

        .favorites-list .favorite-vid {
            display: flex;
            align-items: center;
            gap: 15px;
            background: #f7f7f7;
            border-radius: 5px;
            margin: 10px 0; /* Updated to control vertical margin */
            padding: 10px;
            border: 1px solid rgba(0, 0, 0, 0.1);
            cursor: pointer;
        }

        .favorites-list .favorite-vid video {
            width: 150px;
            height: 100px;
            border-radius: 5px;
        }

        .main-video-container {
            background: #fff;
            color: #333;
            border-radius: 5px;
            padding: 10px;
        }

        .main-video-container video {
            width: 100%;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h3 class="heading">Favorites</h3>
        <nav>
            <ul class="nav-list">
                <li class="nav-item"><a href="discover.html">Discover</a></li>
                <li class="nav-item"><a href="index.html">Home</a></li>
            </ul>
        </nav>
    </div>

    <div class="favorites-container">
        <div class="favorites-list" id="favorites-list">
            <h2 class="section-title">My Favorite Videos</h2>
            <!-- Saved videos will be dynamically added here with JavaScript -->
        </div>
        <div class="main-video-container">
            <h2 class="section-title">Main Video</h2>
            <div id="main-video"></div>
        </div>
    </div>

    <script src="js/script.js"></script>
    <script>
        // Retrieve saved videos from localStorage
        const savedVideos = JSON.parse(localStorage.getItem('savedVideos')) || [];

        // Function to generate HTML for saved videos in the list
        function generateSavedVideoHTML(video, index) {
            return `
                <div class="favorite-vid" onclick="playVideo(${index})">
                    <video src="${video.src}" controls muted autoplay width="150" height="100"></video>
                    <h3 class="title">${video.title}</h3>
                    <button class="delete-button" onclick="deleteVideo(${index})">Delete</button>
                </div>
            `;
        }

        // Function to delete a video from savedVideos
        function deleteVideo(index) {
            savedVideos.splice(index, 1);
            localStorage.setItem('savedVideos', JSON.stringify(savedVideos));
            refreshFavoriteVideos();
        }

        // Function to refresh the displayed favorite videos
        function refreshFavoriteVideos() {
            const favoritesList = document.getElementById('favorites-list');
            favoritesList.innerHTML = '';
            savedVideos.forEach((video, index) => {
                favoritesList.innerHTML += generateSavedVideoHTML(video, index);
            });
        }

        // Function to play a video in the main video container
        function playVideo(index) {
            const mainVideoContainer = document.getElementById('main-video');
            mainVideoContainer.innerHTML = `
                <video src="${savedVideos[index].src}" controls autoplay></video>
                <h3 class="title">${savedVideos[index].title}</h3>
            `;
        }

        // Initialize the list of favorite videos
        refreshFavoriteVideos();
    </script>
</body>
</html>
