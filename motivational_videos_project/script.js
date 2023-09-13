// JavaScript for the discovery page (discover.html) and Favorites page (favorites.html)

document.addEventListener("DOMContentLoaded", function () {
    // Function to add a video to favorites
    function addToFavorites(title, videoSrc) {
        // Get the favorites list in local storage
        let favoritesList = JSON.parse(localStorage.getItem("favorites")) || [];

        // Check if the video is already in favorites
        const existsInFavorites = favoritesList.some((item) => item.title === title);

        if (!existsInFavorites) {
            // If not in favorites, add it
            favoritesList.push({ title, videoSrc });
            localStorage.setItem("favorites", JSON.stringify(favoritesList));
            alert("Video added to Favorites!");
        } else {
            // If already in favorites, show a message
            alert("This video is already in your Favorites.");
        }
    }

    // Function to remove a video from favorites and the DOM
    function removeFromFavorites(title) {
        // Get the favorites list in local storage
        let favoritesList = JSON.parse(localStorage.getItem("favorites")) || [];

        // Find the index of the video with the specified title
        const indexToRemove = favoritesList.findIndex((item) => item.title === title);

        if (indexToRemove !== -1) {
            // Remove the video from the favorites list
            favoritesList.splice(indexToRemove, 1);

            // Update the favorites list in local storage
            localStorage.setItem("favorites", JSON.stringify(favoritesList));

            // Remove the corresponding HTML element from the page
            const videoElement = document.querySelector(`.favorite-vid:has(.title:contains(${title}))`);
            if (videoElement) {
                videoElement.remove();
            }

            alert("Video removed from Favorites!");
        }
    }

    // Add event listeners for hovering over the "Save" buttons
    const saveButtons = document.querySelectorAll(".save-button");
    saveButtons.forEach((button) => {
        button.addEventListener("mouseenter", function () {
            this.classList.add("hovered");
        });

        button.addEventListener("mouseleave", function () {
            this.classList.remove("hovered");
        });

        button.addEventListener("click", function () {
            const videoTitle = this.parentElement.querySelector(".title").textContent;
            const videoSrc = this.parentElement.querySelector("video").getAttribute("src");
            addToFavorites(videoTitle, videoSrc);
        });
    });

    // JavaScript for the Favorites page (favorites.html)

    // Add event listeners for hovering over the "Delete" buttons
    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach((button) => {
        button.addEventListener("mouseenter", function () {
            this.classList.add("hovered");
        });

        button.addEventListener("mouseleave", function () {
            this.classList.remove("hovered");
        });

        button.addEventListener("click", function () {
            const videoTitle = this.parentElement.querySelector(".title").textContent;
            removeFromFavorites(videoTitle);
        });
    });

    // Functionality to navigate to the Discover page
    const discoverButton = document.getElementById("discover-button");

    if (discoverButton) {
        discoverButton.addEventListener("click", function () {
            window.location.href = "discover.html";
        });
    }
});
