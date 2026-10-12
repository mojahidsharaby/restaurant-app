import profileImg from '../../assets/images/profile.png';
import './welcome.css';

function Welcome({ onPreview }) {

    return (
      <>
        <section className="welcome-screen min-vh-100 d-flex justify-content-center align-items-center p-3">
          <div className="welcome-card bg-white text-center p-4 rounded-4 shadow">
            <div className="mb-3">
              <img
                src={profileImg}
                alt="Mohammed AlSharaby"
                className="welcome-photo rounded-circle shadow-sm"
              />
            </div>

            <div>
              <h1 className="h2 fw-bold mb-2">Mohamed Al-Sharaby</h1>

              <h2
                className="h5 mb-3"
                style={{ color: "rgb(52, 98, 226)", fontWeight: 600 }}
              >
                Front-End Developer
              </h2>

              <p
                className="text-secondary mb-4"
                style={{  fontWeight: 500 }}
              >
                Front-End Software Engineer building scalable, high-performance
                web application interfaces with modern React technologies.
              </p>

         <button
              className="btn welcome-button px-4 py-2"
              onClick={onPreview}
            >
              Tap to preview my project
            </button>

          </div>

        </div>

      </section>

    </>

  );

}


export default Welcome;
