# MentalDrive

Table of Contents
1. Features
2. Getting Started
   - Prerequisites
   - Installation
3. Usage
4. Project Structure
5. Contributing
6. License
7. Acknowledgements

Features
- Home Page: Displays a motivational quote with a visually appealing background.
- Discover Page: Features a gallery of motivational videos, including a main video player and a list of videos that can be played on the main screen.
- Favorites Page: Allows users to save their favorite videos and view them in a dedicated section.
Getting Started
Prerequisites
To run this project locally, you need to have the following installed:
- Node.js (includes npm)
Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/tyron40/MentalDrive.git
   ```
2. Navigate to the project directory:
   ```sh
   cd MentalDrive
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
   The application should now be running on http://localhost:3000.
Usage
- Home Page: View a motivational quote and navigate to other sections of the website.
- Discover Page: Browse and watch motivational videos. Click on a video to play it on the main screen. Save videos to your favorites.
- Favorites Page: View and manage your saved videos.
Project Structure
```
MentalDrive/
│
├── assets/
│   ├── background.jpg
│   └── motivational.jpg
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── index.html
├── discover.html
├── favorites.html
├── package.json
└── README.md
```
- assets/: Contains images used in the project.
- css/: Contains the main stylesheet for the project.
- js/: Contains the JavaScript file for handling video interactions.
- index.html: The home page of the application.
- discover.html: The discover page featuring a gallery of motivational videos.
- favorites.html: The favorites page for managing saved videos.
- package.json: Contains project metadata and dependencies.
- README.md: This file.
Contributing
Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature/YourFeatureName
   ```
3. Make your changes.
4. Commit your changes:
   ```sh
   git commit -m 'Add some feature'
   ```
5. Push to the branch:
   ```sh
   git push origin feature/YourFeatureName
   ```
6. Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgements
- Special thanks to Eric Thomas for the motivational content.
- Background images from Unsplash.
