Objective:
The purpose of this assignment is to develop a fully responsive web page based on a Figma design provided. The main objectives are to ensure that the web page translates the design into an accurately implemented interface, adheres to best coding practices and standards, and demonstrates responsiveness and efficiency. The expected learning outcomes include mastering the process of converting design mockups to functioning web pages, enhancing familiarity with API integration, and improving coding and deployment skills.

Step-by-Step Instructions:

1. Project Setup and Initialization:

Project Directory Setup:

Create a directory for your project on your local machine.
Navigate to the project directory in your terminal.
Initializing the Project:

Initialize a new Git repository using git init.
Create an initial README file detailing the project.
Installing Dependencies:

Initialize package management with npm init or yarn init.
Install necessary dependencies such as React, Tailwind CSS, or any other relevant libraries.
2. Development Process:

Accessing the Figma Design:

Familiarize yourself with the design, noting down key components and layout structures.
Fetching Page Content:

Integrate with the provided API to fetch page content.
https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config
Structure your API calls to retrieve data in the format specified, particularly utilizing the page_config array.
Setting Up Project Structure:

Organize your files into components, assets, styles, and services directories.
Establish base components for reusable elements like headers, footers, and any common UI elements in the design.
Implementing Components:

Follow the Figma design to create unique components for each section.
Use the data from the API to populate components dynamically.
Ensure that each component is developed in alignment with the design specifications and adheres to coding standards.
Dynamic Rendering:

Implement logic for rendering the components based on the 'id' and 'props' from the API data.
Special considerations: Render "Featured Health Check-up Packages" and "Book Lab Tests" components conditionally based on the categories and package filtering logic.
3. Styling and Design:

CSS Frameworks:

Optionally, integrate CSS frameworks like Tailwind CSS or Bootstrap for streamlined styling.
Define a base style sheet if not using a CSS framework, ensuring it aligns with the design.
Responsive Design:

Ensure all components are responsive and adapt to various screen sizes.
Use media queries and responsive units (e.g., %, vw, vh) to achieve the desired responsiveness.
Design Adjustments:

Compare your web page at various stages with the Figma design to ensure accuracy.
Adjust styles and layouts to match the design precisely.
4. Deployment:

Building for Production:

Configure your build process to optimize for performance.
Adjust configurations for production deployment.
Hosting:

Select an appropriate hosting platform (e.g., Vercel, Netlify).
Deploy the project and configure environment settings as required by the hosting platform.
Generating a Hosted Link:

Once deployed, obtain the hosted link to share and review.
Submission Guidelines:

Source Code:

Upload all project files to a GitHub repository.
Ensure the repository is well-maintained with clear commit messages and detailed documentation.
Hosted Link:

Provide the link to the deployed version of your project.
