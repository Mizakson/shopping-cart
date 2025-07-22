# shopping-cart

Odin Project React Course Final Project

In this project I learned about:
* react-router
    1. client-side conditional routing with outlets and links
    2. creating routes for an application with createBrowserRouter and RouterProvider
    3. useOutletContext to access states/props from parent components

minimal styling [live preview](https://mizakson-shopping-cart.netlify.app/)

  
project template credits:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Main St. Shop - A React E-commerce Application
Odin Project React Course Final Project
Table of Contents
Project Overview

Live Demo

Features

Key Learnings

Technologies Used

Folder Structure

Setup and Installation

Usage

Testing

Future Enhancements

Acknowledgements

License

Project Overview
"Main St. Shop" is a modern single-page e-commerce application built with React, serving as the final project for the Odin Project's React Course. It demonstrates fundamental React concepts, including component-based architecture, state management, routing, and API integration. The application features a home page, a dynamic shop page where users can browse products, adjust quantities, add items to a shopping cart, and see the cart's item count updated in real-time within the navigation bar.

Live Demo
Experience the application live: Main St. Shop Live Preview

Features
Multi-Page Navigation: Provides a seamless multi-page application experience with intuitive navigation between the Home and Shop pages using a persistent navigation bar.

Dynamic Cart Display: The navigation bar prominently displays the current number of items in the shopping cart, updating automatically as items are added.

Product Catalog: Fetches a diverse range of products from the FakeStore API to populate the shop page.

Interactive Product Cards: Each product is presented in an individual card, allowing users to:

Manually input desired quantities.

Increment or decrement quantities using dedicated buttons.

Add selected items to the cart with an "Add To Cart" button.

Cart Management (Frontend): Updates the cart item count dynamically upon adding products. Includes a non-functional "Checkout" button for future expansion.

Robust Prop Validation: Utilizes PropTypes to ensure all components receive valid and expected data, enhancing application stability and developer experience.

Responsive Design: Styled to provide a visually appealing and user-friendly experience across various device sizes, with a focus on minimal yet effective styling.

Key Learnings
During the development of this project, I gained practical experience and deepened my understanding of several core React and web development concepts, including:

React Router:

Implementing client-side conditional routing using Outlet and Link components.

Configuring application routes with createBrowserRouter and RouterProvider.

Utilizing useOutletContext to effectively access states and props from parent components.

Component-Based Architecture: Designing and structuring a complex application using reusable React components.

State Management: Managing application state, particularly for the shopping cart and product quantities.

API Integration: Fetching and displaying data from external APIs.

Testing with React Testing Library and Vitest: Writing comprehensive and user-centric tests for React components.

Prop Validation: Enforcing prop types for better component reliability.

Technologies Used
React: A JavaScript library for building user interfaces.

React Router DOM: For declarative routing within the application.

Vitest: A blazing fast unit test framework powered by Vite.

React Testing Library: For effective and user-centric component testing.

Prop-Types: For runtime type checking for React props.

FakeStore API: Used to fetch product data.

CSS: For styling and layout.

Folder Structure
The project follows a component-based architecture for better organization and maintainability:

main-st-shop/
├── public/
├── src/
│   ├── assets/           # Static assets like images
│   ├── components/
│   │   ├── navBar.jsx    # Main navigation component
│   │   ├── navOption.jsx # Individual navigation link component
│   │   ├── ProductCard.jsx # Component for displaying individual products
│   │   └── ...           # Other reusable UI components
│   ├── pages/
│   │   ├── HomePage.jsx  # Content for the home page
│   │   └── ShopPage.jsx  # Displays products and cart functionality
│   ├── App.jsx           # Main application component, handles routing
│   ├── main.jsx          # Entry point of the React application
│   └── index.css         # Global styles
├── tests/
│   ├── navBar.test.jsx   # Tests for the Navbar component
│   └── navOption.test.jsx # Tests for the Navoption component
├── package.json
├── vite.config.js        # Vitest and Vite configuration
└── README.md

Setup and Installation
To get this project up and running on your local machine, follow these steps:

Clone the repository:

git clone <repository-url>
cd shopping-cart

Install dependencies:

npm install
# or
yarn install

Start the development server:

npm run start
# or
yarn start

The application will typically open in your browser at http://localhost:5173 (or a similar port).

Usage
Home Page: Explore the initial content of the application.

Shop Page: Click on "Shop" in the navigation bar to view available products.

Add to Cart:

Use the input field to type in a desired quantity for a product.

Use the + and - buttons to fine-tune the quantity.

Click "Add To Cart" to add the specified quantity of the product to your cart.

Cart Count: Observe the item count in the navigation bar update in real-time as you add items.

Checkout: The "Cart" link in the navigation bar is a placeholder for future checkout functionality.

Testing
The application includes extensive and thorough unit tests for each component developed using Vitest and React Testing Library. These tests ensure individual component functionality, user interactions, and integration points behave as expected, contributing to a robust and reliable codebase.

To run the tests:

npm test
# or
yarn test

Tests are designed to focus on component logic and user-facing behavior, avoiding direct testing of external libraries like react-router-dom.

Future Enhancements
Implement full checkout process and payment integration.

Add persistent cart storage (e.g., using local storage or a backend).

Introduce product filtering and sorting options on the shop page.

Implement a dedicated cart view page with item removal and quantity adjustment.

Add user authentication and order history.

Acknowledgements
This project was developed as the final project for The Odin Project's React Course.
Project template credits:

@vitejs/plugin-react uses Babel for Fast Refresh

@vitejs/plugin-react-swc uses SWC for Fast Refresh

License
This project is licensed under the MIT License. See the LICENSE file for details.
