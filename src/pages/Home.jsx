import { Link } from 'react-router-dom';

import pasta from '../assets/images/pasta.jpg';
import pizza from '../assets/images/pizza.jpg';
import burger from '../assets/images/burger.jpg';
import heroFood from '../assets/images/Hfood.jpg';


function Home() {

  return (
    <>

      <section
        className="py-5"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div className="container">

          <div className="row align-items-center g-4">

            <div className="col-12 col-lg-6">

              <p
                className="fw-semibold text-uppercase mb-3"
                style={{ color: "var(--color-primary)" }}
              >
                Welcome to our restaurant
              </p>


              <h1 className="display-4 fw-bold mb-3">
                Good Food
                <br />

                <span style={{ color: "var(--color-primary)" }}>
                  Good Mood
                </span>

              </h1>

              <p className="text-secondary mb-4">
                Choose from our menu of burgers, pasta, and pizza.
              </p>


              <div className="d-flex flex-wrap gap-3">

                <Link
                  to="/menu"
                  className="btn text-white"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    borderColor: "var(--color-primary)",
                  }}

                >
                  Explore Menu
                </Link>

                <Link to="/reservation" className="btn btn-outline-secondary">
                  Book a Table
                </Link>

              </div>

            </div>


            <div className="col-12 col-lg-6">

              <img
                src={heroFood}
                alt="Food from our restaurant"
                className="img-fluid rounded-4 w-100"
                style={{
                  height: "320px",
                  objectFit: "cover",
                }}

              />
            </div>

          </div>

        </div>

      </section>


      <section className="py-5 bg-white">

        <div className="container">

          <div className="mb-4">

            <h2 className="fw-bold mb-2">Our Dishes</h2>


            <p className="text-secondary mb-0">

              Here are some meals from our menu.
            </p>

          </div>


          <div className="row g-4">

            <div className="col-12 col-md-6 col-lg-4">

              <div className="card h-100 border-0 shadow-sm">

                <img
                  src={pasta}
                  alt="Fresh Pasta"
                  className="card-img-top"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                  }}

                />


                <div className="card-body d-flex flex-column">

                  <h3 className="h5 fw-bold mb-2">Fresh Pasta</h3>


                  <p className="small text-secondary">
                    Pasta served with a delicious sauce.
                  </p>

                  <div className="mt-auto d-flex justify-content-between align-items-center pt-2">

                    <span className="fw-bold">EGP 25</span>


                    <span style={{ color: "#987b35" }}>★ 4.8</span>

                  </div>

                </div>

              </div>

            </div>


            <div className="col-12 col-md-6 col-lg-4">

              <div className="card h-100 border-0 shadow-sm">

                <img
                  src={pizza}
                  alt="Classic Pizza"
                  className="card-img-top"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body d-flex flex-column">

                  <h3 className="h5 fw-bold mb-2">Classic Pizza</h3>

                  <p className="small text-secondary">
                    Pizza with cheese and fresh toppings.
                  </p>

                  <div className="mt-auto d-flex justify-content-between align-items-center pt-2">

                    <span className="fw-bold">EGP 40</span>


                    <span style={{ color: "#987b35" }}>★ 4.9</span>

                  </div>

                </div>

              </div>

            </div>


            <div className="col-12 col-md-6 col-lg-4">

              <div className="card h-100 border-0 shadow-sm">

                <img
                  src={burger}
                  alt="Classic Burger"
                  className="card-img-top"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body d-flex flex-column">

                  <h3 className="h5 fw-bold mb-2">Classic Burger</h3>



                  <p className="small text-secondary">

                    Burger served with cheese and sauce.
                  </p>

                  <div className="mt-auto d-flex justify-content-between align-items-center pt-2">

                    <span className="fw-bold">EGP 30</span>


                    <span style={{ color: "#987b35" }}>★ 4.5</span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </>

  );

}


export default Home;
