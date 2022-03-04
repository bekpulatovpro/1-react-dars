import women from "../../Assets/images/women.svg"
import star from "../../Assets/images/stars.png"
import bigwomen from "../../Assets/images/bigwomen.png"
import "./header.css"
function header() {
  return (
    <div className="header">
      <div className="container">
       <div className="header__inner">
       <div className="header__left">
          <h1 className="header__title">Digital Marketing. Creative Design.</h1>
          <p className="header__text">
            "Your work is going to fill a large part of your life, and the only
            way to be truly satisfied is to do what you believe is great work.
            And the only way to do great work is to love what you do."
          </p>
          <div className="header__inner">
          <div>
          <img className="header_inner__img" src={women} alt="women name" width={80} height={80} />
           </div>
              <div>
                  <h4 className="name__women">Samantha Norton</h4>
                  <img src={star} alt="stars" width={90} height={18}/>
              </div>
              
          </div>
          <button className="start__btn">Get start now</button>
        </div>
        <div className="header__right">
        <img className="header_inner__img" src={bigwomen} alt="women name" width={650} height={700} />
        </div>
       </div>
      </div>
    </div>
  );
}

export default header;
