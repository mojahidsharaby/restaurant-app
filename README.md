# Al-Sharaby Restaurant

## Project Overview

Al-Sharaby Restaurant is a responsive restaurant website built with React. It allows user to explore  menu of burgers, pasta, and pizza, view meal details, manage a shopping cart, and fill out a table reservation form. The project aims to provide simple and user-friendly experience across different screen sizes.

### Welcome Screen

The Welcome Screen is the first screen users see when they open the project. It displays the developer's profile picture, name, professional role, and a short introduction.

Users can click the **"Tap to preview my project"** button to enter the restaurant website.

**Implementation:**

* Built as a reusable React component.
* Uses React Props to receive the `onPreview` function from `App.jsx`.
* Uses Bootstrap utility classes for layout, alignment, spacing, and card styling.
* Uses custom CSS for the background, profile image, and button styling.
* Loads the profile picture from the project's local assets.

**Main Concepts:** React Components, Props, Event Handling, Bootstrap, and CSS.

### Home Page

The Home Page is the main page of Al-Sharaby Restaurant. It introduces the restaurant and allows users to navigate to the menu and reservation pages.

**Features:**

* A hero section with a welcome message, a food image, and buttons to explore the menu or book a table.
* A featured dishes section displaying three meals: pasta, pizza, and burger.
* Meal information, including images, descriptions, prices, and ratings.
* Navigation links to the Menu and Reservation pages.

**Implementation:**

* Built as a React functional component.
* Uses React Router's `Link` component for navigation without a full page reload.
* Uses Bootstrap classes for layout, spacing, cards, and responsive design.
* Uses local images imported from the project's assets folder.
* Uses inline CSS styles for specific colors, image heights, and image cropping.

**Main Concepts:** React Components, React Router, Bootstrap Grid, Responsive Design, JSX, and CSS.

**Note:** The featured dishes and their prices and ratings are static data defined directly in the component. This page does not fetch data from an API.


### Menu Page

The Menu Page allows users to browse available recipes and explore burgers, pasta, and pizza. It displays recipe images, titles, categories, and prices, with an option to view more details about each recipe.

**Features:**

* Fetches recipes from an external API.
* Displays recipes in responsive cards.
* Allows users to filter recipes by category: Burger, Pasta, or Pizza.
* Includes an All Recipes button to display recipes from all categories.
* Displays fixed prices in Egyptian Pounds (EGP) based on the selected category.
* Provides a View Recipe link to open the details page for a selected recipe.
* Displays loading and error messages when fetching recipe data.

**Implementation:**

* Built as a React functional component.
* Uses `useState` to manage recipes, loading status, errors, and the selected category.
* Uses `useEffect` to fetch recipes when the page loads.
* Uses `map()` to display recipe cards and `filter()` to show recipes belonging to the selected category.
* Uses React Router's `Link` component to navigate to the recipe details page.
* Uses Bootstrap classes for responsive layouts, cards, buttons, and spacing.
* Uses `ArrowRight` from Lucide React in the View Recipe button.
* Uses local data objects to store category prices and display category emojis.

**Main Concepts:** React Hooks, API Integration, Array Methods (`map` and `filter`), Conditional Rendering, React Router, Bootstrap, and Responsive Design.

**Note:** Recipe data is fetched from the API, while category prices are defined locally in the component. The displayed prices are not retrieved from the API.


### Dish Details Page

The Dish Details Page displays information about a selected recipe. Users can view the recipe image, title, price, and a list of ingredients based on its category. They can also add the recipe to their shopping cart or return to the menu.

**Features:**

* Fetches recipe details from an external API using the recipe ID.
* Displays the recipe image and title.
* Shows the price based on the recipe category: Burger, Pasta, or Pizza.
* Displays a predefined ingredient list for each category.
* Allows users to add recipes to the cart.
* Increases the quantity when the selected recipe already exists in the cart.
* Displays a success message after adding a recipe to the cart.
* Includes a loading indicator and an error message if the recipe cannot be loaded.

**Implementation:**

* Built as a React functional component.
* Uses `useParams` to retrieve the recipe ID from the URL.
* Uses `useSearchParams` to retrieve the recipe category from the URL query string.
* Uses `useState` to manage recipe data, loading status, errors, and the cart message.
* Uses `useEffect` to fetch recipe details when the recipe ID changes.
* Uses the `getRecipe()` function from the API service to retrieve recipe data.
* Uses JavaScript array methods such as `find()`, `map()`, and the spread operator to manage cart items.
* Uses `localStorage` to save and retrieve shopping cart data.
* Uses React Router's `Link` component for navigation.
* Uses Bootstrap classes for layout, buttons, cards, and responsive design.

**Main Concepts:** React Hooks, URL Parameters, API Integration, Conditional Rendering, Array Methods, State Management, Local Storage, React Router, and Bootstrap.

**Note:** Recipe details are fetched from the API, but prices and ingredient lists are defined locally according to the recipe category. Shopping cart data is stored in the user's browser using `localStorage`; it is not saved to a central database.
### About Page

The About Page introduces Al-Sharaby Restaurant and highlights its focus on offering delicious food at affordable prices, using fresh ingredients and providing a welcoming dining experience.

**Features:**

* Displays a brief introduction to the restaurant.
* Highlights the restaurant's focus on food quality, affordability, and hospitality.
* Includes an Explore Menu button that takes users to the menu page.

**Implementation:**

* Built as a React functional component.
* Uses React Router's `Link` component for navigation to the Menu Page without a full page reload.
* Uses Bootstrap classes for layout, spacing, and text alignment.
* Uses inline CSS styles to apply the restaurant's primary color to the button.

**Main Concepts:** React Components, JSX, React Router, Bootstrap, and CSS.

**Note:** This page displays static content and does not use an API, React state, or local storage.

### Contact Page

The Contact Page provides users with the restaurant's contact information, location, and opening hours. It also includes a link to the reservation page, making it easy for users to proceed with booking a table.

**Features:**

* Displays the restaurant's phone number, email address, and location.
* Shows the restaurant's opening hours for each day of the week.
* Provides a Book Table button that navigates to the Reservation Page.
* Uses a card-based layout to organize contact information clearly.
* Adapts to different screen sizes using a responsive layout.

**Implementation:**

* Built as a React functional component.
* Uses React Router's `Link` component to navigate to the Reservation Page without a full page reload.
* Uses Lucide React icons to represent phone, email, location, and opening hours.
* Uses Bootstrap classes for cards, layout, spacing, alignment, and responsive design.
* Uses inline CSS styles to apply the restaurant's primary color to icons and buttons.

**Main Concepts:** React Components, JSX, React Router, Lucide React, Bootstrap Grid, Responsive Design, and CSS.

**Note:** This page displays static contact information and opening hours. It does not use an API, React state, or local storage.

### Reservation Page

The Reservation Page allows users to fill out a form to book a table at Al-Sharaby Restaurant. Users can enter their name, phone number, reservation date, reservation time, and number of guests.

**Features:**

* Provides a form for entering reservation details.
* Uses basic HTML form validation with required fields.
* Saves reservation data in the browser using `localStorage`.
* Displays a success message after the reservation is saved.
* Displays an error message if saving the reservation fails.
* Redirects the user to the Home Page after a successful reservation.

**Implementation:**

* Built as a React functional component.
* Uses `useState` to manage form data, submission status, and error messages.
* Uses `handleChange()` to update form field values.
* Uses `handleSubmit()` to handle form submission and determine the result.
* Uses `saveReservation()` to save reservation details in `localStorage`.
* Uses `JSON.stringify()` and `JSON.parse()` to convert between JavaScript data and JSON strings.
* Uses React Router's `useNavigate()` to redirect users to the Home Page after a successful reservation.
* Uses Bootstrap classes to create a responsive form layout and display success and error messages.

**Main Concepts:** React Components, State Management, Controlled Forms, Event Handling, Form Validation, Local Storage, JSON, React Router, and Bootstrap.

**Note:** Reservation details are stored locally in the user's browser. The current implementation does not send bookings to a restaurant server or store them in a central database.

### Shopping Cart Page

The Shopping Cart Page allows users to review and manage the meals they have added to their cart. Users can view meal details, change quantities, remove items, and see the total price.

**Features:**

* Displays cart items with their images, names, categories, and prices.
* Allows users to increase or decrease item quantities.
* Prevents the quantity from decreasing below one.
* Allows users to remove items from the cart.
* Calculates and displays the subtotal for each item and the total cart price.
* Displays an empty cart message when no items are available.
* Provides links to return to the Menu Page.
* Preserves cart data in the browser using `localStorage`.

**Implementation:**

* Built as a React functional component.
* Uses `useState` to manage cart items.
* Uses `useEffect` to save cart changes to `localStorage`.
* Uses `increaseQuantity()` and `decreaseQuantity()` to update item quantities.
* Uses `removeItem()` to remove an item from the cart.
* Uses `calculateTotal()` to calculate the total price of all items.
* Uses JavaScript array methods such as `map()`, `filter()`, and `forEach()` to update cart items and calculate prices.
* Uses the spread operator to create updated item objects when changing quantities.
* Uses `JSON.parse()` and `JSON.stringify()` to read and save cart data.
* Uses React Router's `Link` component for navigation.
* Uses Bootstrap classes for the responsive layout, cards, buttons, and spacing.

**Main Concepts:** React Hooks, State Management, Event Handling, Array Methods, Object Updates, Local Storage, JSON, React Router, Bootstrap, and Responsive Design.

**Note:** Cart data is stored in the user's browser and persists across page reloads. The current implementation does not include a checkout process, payment processing, or a backend database.
