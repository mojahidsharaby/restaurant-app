import { Link } from 'react-router-dom';

function NotFound() {
  return (

    <>
      
        <section className="container py-5 text-center">

      <h1 className="display-1 fw-bold">404</h1>

      <h2 className="fw-semibold mb-3">Page Not Found</h2>

      <Link
        to="/"
        className="btn text-white"
        style={{
          backgroundColor: "var(--color-primary)",
          borderColor: "var(--color-primary)",
        }}
      >
        Back Home
            </Link>

      </section>

      </>

  );
}

export default NotFound;
