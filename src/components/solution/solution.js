import biznesWomen from "../../Assets/images/biznesWoman.png";
import triangle from "../../Assets/images/triangle.png";
import "./solution.css";

function solution() {
  return (
    <div className="solution">
      <div className="container">
        <span className="mini__text">Event Technology</span>
        <h2 className="solution__title">
          The solution that your business can rely on
        </h2>
        <p className="solution__text">
          Your work is going to fill a large part of your life, and the only way
          to be truly satisfied is to do what you believe is great work. And the
          only way to do great work is to love what you do.
        </p>
        <img src={biznesWomen} alt="women" width={1200}/ >
        <img className="triangle__img" src={triangle} alt="triangle"/>
        <span className="more__span">More about Us</span>
      </div>
    </div>
  );
};

export default solution;
