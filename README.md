# Frontend Interview Assignment: Candidate Application Platform

## Overview
This project is a candidate application platform that allows users to view job listings, filter jobs based on various criteria, and implement infinite scroll for a seamless browsing experience. The platform provides a user-friendly interface for viewing and applying to jobs.

## Features
- **Job Cards:** Each job listing is displayed as a card containing essential information such as job title, company name, location, job description (with an option to expand), experience required, and an apply button/link.
- **Filters:** Users can refine job listings based on various criteria, including minimum experience, company name, location, remote/on-site, tech stack, role, and minimum base pay.
- **Infinite Scroll:** Infinite scroll is implemented to load additional job listings automatically as the user scrolls down the page.
- **Responsive Design:** The platform is responsive and works well on different screen sizes, including mobile devices.

## Technology Stack
- ReactJs
- Redux
- CSS
- Material UI

## Installation
To run the application locally, follow these steps:
1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.

## API Integration
The application fetches job listings from the following API endpoint:
https://api.weekday.technology/adhoc/getSampleJdJSON
The API accepts `limit` and `offset` as request body parameters and returns a list of jobs along with the total count of jobs present.

## Performance Optimization
- **Intersection Observer:** Intersection observer is used instead of the regular event listener for performance optimization.
- **Virtualization:** To further improve performance, consider implementing methods like virtualization to render only the necessary elements in the DOM.

## Live Demo
The live hosted website can be accessed which is hosted on netlify [here](https://weekday-sde1-shammir.netlify.app/) https://weekday-sde1-shammir.netlify.app/.

Note: use Node version 20.5.0 for not running into any issues.
