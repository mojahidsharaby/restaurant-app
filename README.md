# Al-Sharaby Restaurant — ITI Graduation Project

This is my ITI graduation project. I built this restaurant website using React.

## Project Overview

Al-Sharaby Restaurant is a website that allows users to explore the meals offered by the restaurant, such as burgers, pasta, and pizza. Users can view recipe details, manage their shopping cart, and fill out a table reservation form.

## Features

* The website is responsive and works on different screen sizes.
* Fast navigation between pages using a Single Page Application (SPA).
* Table reservations with data saved in the browser using Local Storage.
* Shopping cart management, including adding items, updating quantities, removing items, and calculating the total price.

## Technologies Used

* **React:** The main library used to build the user interface and manage component state.
* **React Router:** Used to navigate between pages without reloading the entire page.
* **Axios:** Used to send HTTP requests to the API.
* **Forkify API:** The source I used to fetch recipe data.
* **Lucide React:** Used for the icons in the project.
* **Local Storage:** Used to save cart items and reservations in the browser.

## Pages

### 1. Welcome Screen

The website starts with a Welcome Screen that contains my profile picture, my professional role, and a button that takes the user into the website.

I added this screen as a small creative touch to make the project a little different from the usual website experience.

For the styling and layout, I mainly used Bootstrap to keep the code organized and reduce the amount of custom CSS.

### 2. Home Page — Hero Section

The Hero Section introduces the restaurant and presents the main content of the website. It includes links to the Menu page and the Reservation page, along with three featured meals from the restaurant.

The featured dishes give users a quick idea of the food available before they explore the full menu.

### 3. Menu Page

The Menu page gets recipe data from the API and displays the available meals.

I used `useState` to keep track of the recipes, the loading state, and the selected category. Then, `useEffect` fetches the recipes when the page loads, while `map()` and `filter()` are used to display the results and filter recipes by category.

Each recipe card contains a link to the Dish Details page, where users can view more information about the selected recipe.

### 4. Dish Details

The Dish Details page displays information about the selected recipe, including its image, title, price, and ingredients.

The recipe data comes from the API, while the prices and ingredient lists are defined locally according to the selected category.

Users can also add meals to their shopping cart. If a meal is already in the cart, its quantity increases instead of adding it as a new item.

### 5. About

The About page gives users a short introduction to the restaurant and its focus on affordable meals that are accessible to more people.

It also highlights the use of fresh ingredients and the importance of good hospitality. The page includes a button that takes users to explore the menu.

### 6. Contact

The Contact page displays the restaurant's contact information, location, and opening hours.

I used Lucide React to add icons that make the information easier to understand and improve the overall UI.

### 7. Reservation

The Reservation page contains a form where users can enter their full name, phone number, reservation date, time, and number of guests.

The form values are managed using `formData` and `handleChange()`. When the user submits the form, `handleSubmit()` calls `saveReservation()` to save the reservation in Local Storage.

After the reservation is saved, a confirmation message appears, and the user is redirected to the Home page after a short delay.

### 8. Shopping Cart

The Shopping Cart allows users to review their selected meals, update quantities, remove items, and see both the price of each item and the total cost of the cart.

I used separate functions to handle the main operations:

* `increaseQuantity()` increases the quantity of an item.
* `decreaseQuantity()` decreases the quantity of an item.
* `removeItem()` removes an item from the cart.
* `calculateTotal()` calculates the total price of all items in the cart.

The cart data is saved in the browser using Local Storage, so the items remain available even after refreshing the page.

## Project Structure

I organized the files inside the `src` folder into separate folders for components, pages, services, and styles.

* **components/** — Contains reusable components such as the Navbar and Welcome Screen.
* **pages/** — Contains the different pages of the website.
* **services/** — Contains the API functions used to fetch recipe data.
* **styles/** — Contains the CSS files used to style the website.
* **assets/** — Contains local images used in the project.

## Data Storage

The project uses Local Storage to save cart items and reservations in the browser.

I used two keys for this data:

| Local Storage Key       | Purpose                                             |
| ----------------------- | --------------------------------------------------- |
| `restaurantCart`        | Stores cart items, their prices, and quantities.    |
| `restaurantReservation` | Stores the reservations submitted through the form. |

This way, the saved data remains available in the same browser even after the page is refreshed.
