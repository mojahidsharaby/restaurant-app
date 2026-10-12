import { Link } from 'react-router-dom';

function About() {

  return (
    <>
      <section className="container py-5">

        <div className="row justify-content-center">

          <div className="col-12 col-lg-8 text-center">

            <h1 className="fw-bold mb-3">About Our Restaurant</h1>


            <p className="text-secondary mb-4">
              We believe that great food combines delicious taste and
              appropriate price. We seek to provide various meals with fresh
              ingredients and beautiful hospitality experience.
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

        </div>

      </section>

    </>

  );

}

export default About;
