# GitHub README Generator

This web application helps you create a professional `README.md` file for your GitHub repositories. It uses the Gemini API to generate content based on your repository's files and structure.

## Features

-   **Automated README Generation:** Analyzes your GitHub repository and generates a comprehensive README file.
-   **Easy to Use:** Simple web interface to enter a repository URL and get a generated README.
-   **Customizable:** The generated README can be copied and further customized.
-   **Powered by AI:** Leverages the Gemini API for high-quality content generation.

## Technologies Used

-   **Frontend:** React, Vite, Tailwind CSS
-   **Backend:** Node.js, Express
-   **APIs:** GitHub API, Google Gemini API

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js and npm installed.
-   A `.env` file in the `backend` directory with your `GEMINI_API_KEY`. Example:
    ```
    GEMINI_API_KEY=your_api_key_here
    ```

### Installation & Running

1.  **Clone the repo**
    ```sh
    git clone https://github.com/your_username/your_repository.git
    ```
2.  **Backend Setup**
    ```sh
    cd backend
    npm install
    npm start
    ```
3.  **Frontend Setup**
    ```sh
    cd ../frontend
    npm install
    npm run dev
    ```

The frontend will be available at `http://localhost:5173` (or another port if specified by Vite) and the backend will be running on the port specified in your backend code (e.g., 3000).

## Project Structure

```
github readme generator/
├── .gitignore
├── README.md
├── backend/
│   ├── .env
│   ├── app.js
│   ├── modellist.js
│   ├── package-lock.json
│   ├── package.json
│   ├── node_modules/...
│   ├── routes/
│   │   └── readmeRoutes.js
│   └── services/
│       ├── geminiService.js
│       ├── githubService.js
│       └── readmeService.js
└── frontend/
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── vite.config.js
    ├── node_modules/...
    ├── public/
    │   └── vite.svg
    └── src/
        ├── App.css
        ├── app2.jsx
        ├── index.css
        ├── main.jsx
        ├── assets/
        │   └── react.svg
        └── components/
            ├── ErrorBox.jsx
            ├── Features.jsx
            ├── Footer.jsx
            ├── Header.jsx
            ├── Instructions.jsx
            ├── MessageBox.jsx
            ├── ReadmeDisplay.jsx
            ├── refactored-components.txt
            ├── RepoForm.jsx
            └── RepoInfo.jsx
```