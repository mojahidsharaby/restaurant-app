import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Cart() {

  const savedCart = localStorage.getItem("restaurantCart");

  const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);

  useEffect(() => {

    localStorage.setItem("restaurantCart", JSON.stringify(cart));
  }, [cart]);

  function increaseQuantity(id) {

    setCart((currentCart) =>

      currentCart.map((item) => {

        if (item.id === id) {

          return {
            
            ...item,

            quantity: item.quantity + 1,
          };

        }

        return item;

      }),

    );

  }

  function decreaseQuantity(id) {

    setCart((currentCart) =>

      currentCart.map((item) => {

        if (item.id === id) {

          return {
      
            ...item,
            quantity: item.quantity - 1,
          };

        }

        return item;
      }),

    );

  }

  function removeItem(id) {
    
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  }

  function calculateTotal() {

    let total = 0;

    cart.forEach((item) => {

      total += item.price * item.quantity;
    });

    return total;


  }

  const total = calculateTotal();

  return (
      <>
    <section className="container py-5">

      {/* header */}
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">

        <h1 className="fw-bold mb-0">Your Cart</h1>

        <Link to="/menu" className="btn btn-outline-secondary">
          Continue Shopping
        </Link>

      </div>

      {/* Empty cart */}
      {cart.length === 0 ? (

        <div className="text-center border rounded-3 bg-light p-5">

          <h2 className="h4 mb-3">Your cart is empty !</h2>

          <p className="text-secondary mb-4">
            Explore our menu and choose something to eat.
          </p>

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

        </div>

      ) : (
          
        <>
          {/* cart item */}
            <div className="row g-3">
              
              {cart.map((item) => (
              
                <div className="col-12" key={item.id}>
                  
                  <div className="card border-0 shadow-sm">
                    
                    <div className="card-body">
              
                      <div className="row align-items-center g-3">

                      {/* product img */}

                      <div className="col-4 col-sm-3 col-md-2">

                          <img
                            
                          src={item.image}
                          alt={item.title}
                          className="img-fluid rounded-2 w-100"
                          style={{
                            height: "110px",
                            objectFit: "cover",
                          }}

                        />

                      </div>


                        {/* product info */}
                        
                        <div className="col-8 col-sm-9 col-md-10">

                          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3">

                            <div>

                            <h2 className="h5 fw-bold mb-2">{item.title}</h2>

                            <span className="badge text-bg-light border mb-2">
                              {item.category}
                            </span>

                            <p className="text-secondary mb-0">
                              EGP {item.price.toFixed(2)} per item
                              </p>

                          </div>

                            {/* quantity part */}

                            <div className="d-flex flex-wrap align-items-center gap-2">

                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm"
                              onClick={() => decreaseQuantity(item.id)}
                              disabled={item.quantity <= 1}
                            >
                              -
                            </button>

                            <span className="fw-semibold px-2">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-sm"
                              onClick={() => increaseQuantity(item.id)}
                            >
                              +
                            </button>

                            <button
                              type="button"
                              className="btn btn-outline-danger btn-sm"
                              onClick={() => removeItem(item.id)}
                            >
                              Remove
                              </button>

                          </div>

                          {/* subtotal */}
                            <div className="text-lg-end">

                            <p className="text-secondary small mb-1">
                              Subtotal
                            </p>

                            <p className="fw-bold mb-0">
                              EGP {(item.price * item.quantity).toFixed(2)}
                              </p>


                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                  </div>
                  
                </div>
                
              ))}
              
          </div>

            {/* Cart total */}


          <div className="d-flex justify-content-center mt-4">

            <div
              className="border rounded-3 bg-light p-4 w-100"
              style={{ maxWidth: "350px" }}
            >
              <div className="d-flex justify-content-between align-items-center mb-3">

                <span className="fw-semibold">Total</span>

                <span className="fs-5 fw-bold">EGP {total.toFixed(2)}</span>

              </div>

              <Link
                to="/menu"
                className="btn w-100 text-white"
                style={{
                  backgroundColor: "var(--color-primary)",
                  borderColor: "var(--color-primary)",
                }}
              >
                Continue Shopping
                </Link>


              </div>
              
            </div>
            
          </>
          
      )}

    </section>

    
     </>
  );

}

export default Cart;

