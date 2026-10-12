import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Reservation() {

  const [formData, setFormData] = useState({

    fullName: "",
    phone: "",
    date: "",
    time: "",
    guests: "",

  });

  const [submitted, setSubmitted] = useState(false);
  const [saveError, setSaveError] = useState("");

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({

      ...formData,
      [name]: value,
    });
  }

  // part localstorage
  function saveReservation() {
    
    try {

      const savedReservations = localStorage.getItem(
        "restaurantReservation"
      );

      const reservations = savedReservations
        ? JSON.parse(savedReservations)
        : [];

      const newReservation = {
        id: Date.now(),
        ...formData,
      };

      reservations.push(newReservation);

      localStorage.setItem(
        "restaurantReservation",
        JSON.stringify(reservations)
      );

      return true;
    } catch (error) {
      console.error("Error saving reservation:", error);
      return false;
    }
  }


  function handleSubmit(event) {

    event.preventDefault();

    setSubmitted(false);

    setSaveError("");

    const isSaved = saveReservation();

    if (isSaved) {

      setSubmitted(true);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {

      setSaveError(
        "Failled to save your reservation."
      );
    }
  }

  return (

    <>

    <section className="container py-5">

      <div className="text-center mb-4">

        <h1 className="fw-bold mb-3">Book a Table</h1>


        <p className="text-secondary">

          Make a reservation and enjoy your favorite meal.
        </p>

      </div>


      <div className="row justify-content-center">

        <div className="col-12 col-lg-8">

          <div className="card border-0 shadow-sm">

            <div className="card-body p-4 p-md-5">

              {submitted && (

                <div className="alert alert-success mb-4" role="status">

                  success to you record reservation.
                </div>

              )}

              {saveError && (

                <div className="alert alert-danger mb-4" role="alert">
                  {saveError}
                </div>

              )}


              <form onSubmit={handleSubmit}>

                <div className="row g-3">

                  <div className="col-12">

                    <label htmlFor="fullName" className="form-label">

                      Full Name
                    </label>


                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="form-control"
                      placeholder="Enter your fall name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  {/* phone */}

                  <div className="col-12">

                    <label htmlFor="phone" className="form-label">

                      Phone Number
                    </label>


                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>


                  <div className="col-12 col-md-6">

                    <label htmlFor="date" className="form-label">
                      Reservation Date
                    </label>


                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="form-control"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>


                  <div className="col-12 col-md-6">

                    <label htmlFor="time" className="form-label">
                      Reservation Time
                    </label>


                    <input
                      type="time"
                      id="time"
                      name="time"
                      className="form-control"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  {/* guest */}

                  <div className="col-12">

                    <label htmlFor="guests" className="form-label">
                      Guest Number
                    </label>


                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      className="form-control"
                      placeholder="Enter number of guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                    />

                  </div>



                  {/* button submit  */}


                  <div className="col-12">

                    <button
                      type="submit"
                      className="btn text-white w-100"
                      style={{
                        backgroundColor: "var(--color-primary)",
                        borderColor: "var(--color-primary)",
                      }}

                      disabled={submitted}
                    >
                      Book Table
                    </button>

                  </div>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>


    </>

  );
  
}

export default Reservation;

