import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="home">
      <h2>About Page</h2>
      <Link to="/contact">Move to Contact</Link>
    </div>
  );
};

export default About;
