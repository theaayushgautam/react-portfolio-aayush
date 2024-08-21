# React + Vite Portfolio 💻

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Aayush Gautam's Portfolio
Overview
This project is a personal portfolio website created to showcase my experience, projects, and skills as a Data Scientist. The portfolio includes sections like About Me, Experience, Projects, and Contact Information. The website is built using React and Tailwind CSS for the frontend, with animations handled by Framer Motion. The site is deployed on Vercel for easy access and sharing.

Table of Contents
Overview
Technologies Used
Project Structure
Setup and Installation
Features
Development Process
Deployment
License
Technologies Used
React: For building the user interface.
Tailwind CSS: For styling the website.
Framer Motion: For animations.
JavaScript (ES6+): For logic and interactivity.
Vercel: For deploying the website.
Project Structure
The project structure is as follows:

plaintext
Copy code
src/
│
├── assets/                # Contains images and other media files
├── components/            # Contains all React components (Hero, About, Experience, Projects, Navbar, etc.)
├── constants/             # Contains constant data (text, project info, etc.)
├── index.css              # Tailwind CSS imports and custom CSS
├── index.js               # Main entry point of the application
└── App.jsx                # Root component that ties everything together

Features
1. Responsive Design:
The website is fully responsive, adjusting to various screen sizes including mobile devices.

2. Animations:
Used Framer Motion to create smooth animations for elements such as headings, project images, and text content.

3. Dynamic Content:
The content (Experience, Projects) is dynamically loaded from a constant file (constants/index.js), making it easy to update or add new content.

4. Custom Styling:
Tailwind CSS was used for quick and efficient styling, while custom styles were added in the index.css file.

5. Vercel Deployment:
The site is deployed on Vercel for easy access and fast loading.

Development Process
1. Initial Setup:
Set up a React project and installed necessary dependencies including Tailwind CSS and Framer Motion.
Configured Tailwind CSS by creating the index.css file with necessary imports and custom styles.

2. Building Components:
Navbar: Created the navigation bar with links to social media profiles.
Hero Section: Built the Hero section with a profile image, name, and a short description.
About Section: Added an About section to give more detailed information about my background.
Experience Section: Created an Experience section to showcase my work history and key projects, dynamically displaying this information using data from constants/index.js.
Projects Section: Displayed key projects, with each project having a title, description, technologies used, and an image.
Contact Section: Added contact details including address, phone number, email, and social media links.

3. Implementing Animations:
Used Framer Motion to add entry animations to text, images, and other components, enhancing the visual appeal of the site.

4. Responsive Design:
Ensured that all sections and components were fully responsive, using Tailwind’s responsive design utilities to adjust layouts, text sizes, and other styles for different screen sizes.

5. Image Handling:
Handled images efficiently, including adding inner shadows and setting specific sizes to ensure consistency across different sections.

6. Deployment:
Deployed the final version of the website to Vercel. This was done by linking the GitHub repository to Vercel, allowing for continuous deployment whenever changes were pushed to the main branch.

7. Testing:
Tested the site across various devices and browsers to ensure a consistent experience. Adjusted any styles or functionality based on feedback from these tests.

Deployment
Deploying on Vercel:
Connect your GitHub repository to Vercel.
Once connected, Vercel automatically deploys your site whenever you push changes to your repository.
Visit the live site here: Aayush Gautam's Portfolio



