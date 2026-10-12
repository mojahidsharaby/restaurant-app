import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import { getRecipes } from '../services/api';

const pricesByCategory = {

  Burger: 30,
  Pasta: 25,
  Pizza: 40,
};

const categoryEmoji = {

  Burger: "🍔",
  Pasta: "🍝",
  Pizza: "🍕",
};

function Menu() {

  const [recipesArray, setRecipesArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {

    async function fetchRecipes() {

      try {

        const data = await getRecipes();
        setRecipesArray(data);
      } catch {

        setError("Failed to load recipes. Please try again.");
      }

      setIsLoading(false);

    }

    fetchRecipes();

  }, []);

  const filteredRecipes =
    selectedCategory === "All"
      ? recipesArray
      : recipesArray.filter((recipe) => recipe.category === selectedCategory);

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


  if (error) {

    return (

      <>

        <div className="container py-5"> 


          <div className="alert alert-danger">{error}</div>

        </div>
        
      </>
    );
  }

  return (
    <>

    <section className="container py-5">

      <div className="text-center mb-4">

        <h1 className="fw-bold mb-3">Explore burgers, pasta, and pizza.</h1>

      </div>


      <div className="border rounded-3 bg-light p-3 p-md-4 mb-4">

        <h2
          className="h5 fw-bold text-center mb-3"
          style={{ color: "var(--color-primary)" }}
        >
          Our Prices
        </h2>


        <div className="row g-3">

          <div className="col-12 col-sm-4">

            <button
              type="button"
              className="btn w-100 h-100 border rounded-3 p-3 text-center"
              onClick={() => setSelectedCategory("Burger")}
              style={{
                backgroundColor:
                  selectedCategory === "Burger"
                    ? "var(--color-surface)"
                    : "#ffffff",
                borderColor:
                  selectedCategory === "Burger"
                    ? "var(--color-primary)"
                    : "#dee2e6",
                color: "var(--color-text)",
              }}

            >
              <span className="d-block fs-3 mb-2">{categoryEmoji.Burger}</span>

              <span className="d-block fw-semibold mb-2">Burger</span>

              <span
                className="d-block fw-bold"
                style={{ color: "var(--color-primary)" }}
              >
                EGP {pricesByCategory.Burger}
              </span>

            </button>

          </div>


          <div className="col-12 col-sm-4">

            <button
              type="button"
              className="btn w-100 h-100 border rounded-3 p-3 text-center"
              onClick={() => setSelectedCategory("Pasta")}
              style={{
                backgroundColor:
                  selectedCategory === "Pasta"
                    ? "var(--color-surface)"
                    : "#ffffff",
                borderColor:
                  selectedCategory === "Pasta"
                    ? "var(--color-primary)"
                    : "#dee2e6",
                color: "var(--color-text)",
              }}

            >
              <span className="d-block fs-3 mb-2">{categoryEmoji.Pasta}</span>


              <span className="d-block fw-semibold mb-2">Pasta</span>


              <span
                className="d-block fw-bold"
                style={{ color: "var(--color-primary)" }}
              >
                EGP {pricesByCategory.Pasta}
              </span>

            </button>

          </div>


          <div className="col-12 col-sm-4">

            <button
              type="button"
              className="btn w-100 h-100 border rounded-3 p-3 text-center"
              onClick={() => setSelectedCategory("Pizza")}
              style={{
                backgroundColor:
                  selectedCategory === "Pizza"
                    ? "var(--color-surface)"
                    : "#ffffff",
                borderColor:
                  selectedCategory === "Pizza"
                    ? "var(--color-primary)"
                    : "#dee2e6",
                color: "var(--color-text)",
              }}
            >

              <span className="d-block fs-3 mb-2">{categoryEmoji.Pizza}</span>

              <span className="d-block fw-semibold mb-2">Pizza</span>

              <span
                className="d-block fw-bold"
                style={{ color: "var(--color-primary)" }}
              >
                EGP {pricesByCategory.Pizza}
              </span>

            </button>

          </div>

        </div>

      </div>


      <div className="text-center mb-4">

        <button
          type="button"
          className="btn"
          onClick={() => setSelectedCategory("All")}

          style={{
            backgroundColor:
              selectedCategory === "All"
                ? "var(--color-primary)"
                : "transparent",
            borderColor: "var(--color-primary)",
            color:
              selectedCategory === "All" ? "#ffffff" : "var(--color-primary)",

          }}
        >
          All Recipes
        </button>

      </div>


      <div className="row g-4">

        {filteredRecipes.map((recipe) => (

          <div className="col-12 col-sm-6 col-lg-4" key={recipe.id}>

            <div className="card h-100 border-0 shadow-sm">

              <img
                src={recipe.image_url}
                alt={recipe.title}
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
              />


              <div className="card-body d-flex flex-column">

                <span className="badge text-bg-light border align-self-start mb-3">

                  {recipe.category}
                </span>


                <h2 className="h5 fw-bold mb-2">{recipe.title}</h2>


                <p className="small text-secondary">By Al-Sharaby Restaurant</p>


                <div className="mt-auto d-flex justify-content-between align-items-center gap-2">

                  <span className="fw-bold">
                    EGP {pricesByCategory[recipe.category]}

                  </span>


                  <Link
                    to={`/dish/${recipe.id}?category=${recipe.category}`}
                    className="btn btn-outline-secondary btn-sm d-inline-flex align-items-center gap-2"
                  >

                    View Recipe
                    <ArrowRight size={16} />
                  </Link>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>


      {filteredRecipes.length === 0 && (

        <p className="text-center text-secondary mt-4">No recipes found.</p>
      )}

      </section>

     </>

  );
}

export default Menu;
