import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

function Contact() {
  return (

    <>

    <section className="container py-5">

      {/* page header */}


      <div className="text-center mb-5">

        <h1 className="fw-bold mb-3"> Contact with us </h1>

        <p className="text-secondary">Have question? We like to hear you.</p>

      </div>


      {/* contact info */}

      <div className="row g-4 mb-5">

        {/* phone */}


        <div className="col-12 col-md-4">

          <div className="card border-0 shadow-sm h-100">

            <div className="card-body text-center p-4">

              <Phone
                size={28}
                style={{ color: "var(--color-primary)" }}
                className="mb-3"
              />

              <h2 className="h5 fw-bold mb-3">Phone</h2>

              <p className="text-secondary mb-0">+2001146367801</p>


            </div>

          </div>

        </div>


        {/* email */}

        <div className="col-12 col-md-4">

          <div className="card border-0 shadow-sm h-100">

            <div className="card-body text-center p-4">

              <Mail
                size={28}
                style={{ color: "var(--color-primary)" }}
                className="mb-3"
              />

              <h2 className="h5 fw-bold mb-3">Email</h2>

              <p className="text-secondary mb-0">
              alsharabyrestaurant@example.com
              </p>

            </div>

          </div>

        </div>



        {/* location */}

        <div className="col-12 col-md-4">

          <div className="card border-0 shadow-sm h-100">

            <div className="card-body text-center p-4">

              <MapPin
                size={28}
                style={{ color: "var(--color-primary)" }}
                className="mb-3"
              />

              <h2 className="h5 fw-bold mb-3">Location</h2>

              <p className="text-secondary mb-0">
                Al-Gomhoreya St, Al-Hawamdiyah, Giza
              </p>


            </div>

          </div>

        </div>

      </div>


      {/* opening hours */}

      <div className="row justify-content-center mb-5">

        <div className="col-12 col-lg-8">

          <div className="card border-0 shadow-sm">

            <div className="card-body p-4 p-md-5">

              <div className="d-flex align-items-center gap-3 mb-4">

                <Clock size={28} style={{ color: "var(--color-primary)" }} />

                <h2 className="h4 fw-bold mb-0">Opening Hours</h2>

              </div>


              <div className="d-flex justify-content-between gap-3 border-bottom py-3">

                <span>Saturday</span>

                <span className="text-secondary text-end">
                  14:00 PM - 23:30 PM
                </span>

              </div>

              <div className="d-flex justify-content-between gap-3 border-bottom py-3">

                <span>Saturday</span>

                <span className="text-secondary text-end">
                  12:30 PM - 23:30 PM
                </span>


              </div>


              <div className="d-flex justify-content-between gap-3 border-bottom py-3">

                <span>Saturday</span>

                <span className="text-secondary text-end">
                  12:30 PM - 40:00 PM
                </span>

              </div>


              <div className="d-flex justify-content-between gap-3 border-bottom py-3">

                <span>Saturday</span>

                <span className="text-secondary text-end">
                  12:00 PM - 22:00 PM
                </span>

              </div>


              <div className="d-flex justify-content-between gap-3 border-bottom py-3">

                <span>Saturday</span>

                <span className="text-secondary text-end">
                  13:0 PM - 23:30 PM
                </span>

              </div>


              <div className="d-flex justify-content-between gap-3 pt-3">

                <span>Friday</span>

                <span className="text-secondary text-end">
                  14:00 PM - 23:00 PM
                </span>



              </div>


            </div>


          </div>


        </div>


      </div>



      {/* reservation link */}

      <div className="text-center">

        <h2 className="h4 fw-bold mb-3">Want to visit us ?</h2>

        <p className="text-secondary mb-4">
          Book your table and eat your favorite meal
        </p>

        <Link
          to="/reservation"
          className="btn text-white px-4 py-2"
          style={{
            backgroundColor: "var(--color-primary)",
            borderColor: "var(--color-primary)",
          }}
        >
          Book table
        </Link>
      </div>

    </section>

    </>

  );
  
}

export default Contact;
