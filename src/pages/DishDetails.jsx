import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { getRecipe } from '../services/api';


const ingredients = {

  Burger: [

    "Burger buns",
    "Ground beef",
    "Cheddar cheese",
    "Fresh lettuce",
    "Tomato slices",
    "Red onion",
    "Pickles",
    "Burger sauce",
  ],


  Pasta: [

    "Pasta",
    "Tomato sauce",
    "Fresh garlic",
    "Olive oil",
    "Parmesan cheese",
    "Fresh basil",
    "Salt",
    "Black pepper",

  ],


  Pizza: [

    "Pizza dough",
    "Tomato sauce",
    "Mozzarella cheese",
    "Olive oil",
    "Fresh basil",
    "Dried oregano",
    "Salt",
    "Black pepper",

  ],

};


const prices = {

  Burger: 30,
  Pasta: 25,
  Pizza: 40,

};


function DishDetails() {

  const { id } = useParams();

  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  const [recipe, setRecipe] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState("");

  const [cartMessage, setCartMessage] = useState("");

  useEffect(() => {

    async function fetchRecipe() {

      try {

        const data = await getRecipe(id);

        setRecipe(data);
        setError("");

      } catch {

        setError("Failed to load recipe. Please try again.");
      }


      setIsLoading(false);

    }


    fetchRecipe();

  }, [id]);


  function addToCart() {

    const savedCart = localStorage.getItem("restaurantCart");


    const cart = savedCart ? JSON.parse(savedCart) : [];

    const existingItem = cart.find((item) => item.id === recipe.id);

    let updatedCart;

    if (existingItem) {

      updatedCart = cart.map((item) => {

        if (item.id === recipe.id) {

          return {

            ...item,
            quantity: item.quantity + 1,
          };

        }


        return item;

      });

    } else {

      updatedCart = [

        ...cart,
        {

          id: recipe.id,
          title: recipe.title,
          image: recipe.image_url,
          category: category,
          price: prices[category],
          quantity: 1,
        },

      ];

    }



    localStorage.setItem("restaurantCart", JSON.stringify(updatedCart));

    setCartMessage("Added to cart successfully!");

  }

  if (isLoading) {

    return (

      <>


      <div className="container py-5">

        <div className="d-flex justify-content-center">

          <div
            className="spinner-border"
            style={{ color: "var(--color-primary)" }}
          ></div>

        </div>

      </div>

      </>

    );

  }


  if (error || !recipe) {

    return (

      <>
        <div className="container py-5">

          <div className="alert alert-danger">

            {error || "Recipe not found."}

          </div>


          <Link
            to="/menu"
            className="btn text-white"
            style={{
              backgroundColor: "var(--color-primary)",
              borderColor: "var(--color-primary)",
            }}
          >
            Back to Menu
          </Link>

        </div>

      </>

    );

  }

  const recipeIngredients = ingredients[category];
  const price = prices[category];

  return (
    <>
      <section className="container py-5">

        <div className="row g-4 align-items-start">

          <div className="col-12 col-md-5">

            <img
              src={recipe.image_url}
              alt={recipe.title}
              className="img-fluid rounded-4 w-100"
              style={{
                maxHeight: "420px",
                objectFit: "cover",
              }}

            />
          </div>


          <div className="col-12 col-md-7">

            <h1 className="fw-bold mb-3">{recipe.title}</h1>


            <p className="text-secondary mb-3">
              Enjoy a delicious meal prepared with simple ingredients.
            </p>

            <p className="fs-5 fw-bold mb-4">EGP {price}</p>


            <div className="border rounded-3 p-3 mb-4">

              <h2 className="h4 fw-semibold mb-3">Ingredients</h2>

              <p className="text-secondary">
                Here is a simple ingredient list for this type of food.
              </p>

              <ul className="list-group list-group-flush">

                {recipeIngredients.map((ingredient) => (
                  <li className="list-group-item px-0 py-2" key={ingredient}>
                    {ingredient}
                  </li>

                ))}

              </ul>

            </div>


            <div className="d-flex flex-wrap gap-2">

              <button
                type="button"
                className="btn text-white"
                style={{
                  backgroundColor: "var(--color-primary)",
                  borderColor: "var(--color-primary)",
                }}
                onClick={addToCart}
              >
                Add to Cart
              </button>

              <Link
                to="/menu"
                className="btn text-white"
                style={{
                  backgroundColor: "var(--color-primary)",
                  borderColor: "var(--color-primary)",
                }}
              >
                Back to Menu
              </Link>
            </div>


            {cartMessage && (
              <div className="alert alert-success mt-3 mb-0">{cartMessage}</div>
            )}
          </div>

        </div>

      </section>

    </>

  );

}


export default DishDetails;
