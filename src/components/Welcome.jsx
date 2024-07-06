import { Link } from 'react-router-dom';
import '../styles/Welcome.css';

function Welcome() {
  return (
    <div className="welcome-component">
      <Link to="/index">
        <div className="welcome-container">
          <h1 className="welcome-text">echium_photo</h1>
          <img
            src="https://i.ibb.co/rphBVTG/430299530011.jpg"
            className="welcome-background"
            title="click me"
            alt="Welcome Image - Click Me"
          />
        </div>
      </Link>
    </div>
  );
}

export default Welcome;
