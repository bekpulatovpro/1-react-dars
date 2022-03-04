import icongirl from "../../Assets/images/icongirl.png"
import iconpdf from "../../Assets/images/iconpdf.png"
import people from "../../Assets/images/people.png"

import "./experience.css";

function exper() {
  return (
    <div className="experience">
      <div className="container">
        <div className="exper__inner">
          <div className="exper__left">
            <h2 className="exper__title">
              Experience design and intelligent marketing for growing brands
            </h2>
            <p className="exper__text">
              The first rule of any technology used in a business is that
              automation applied to an efficient operation will magnify the
              efficiency.
            </p>
            <div className="exper__flex">
                <div>
                    <img src={icongirl} width={45} height={45}/>
                    <h5 className="mini__title">Customer Support</h5>
                    <p className="mini__exper__text">Make every detail perfect & limit the number of details.</p>
                </div>
                <div>
                <img src={iconpdf} width={45} height={45}/>
                    <h5 className="mini__title">Email marketing</h5>
                    <p className="mini__exper__text">Make every detail perfect & limit the number of details.</p>
                </div>
            </div>
            <button className="nav__button">READ MORE</button>
          </div>
          <div className="exper__right">
            <card className="exper__card">
              <img className="people__img" src={people} width={540} height={200} />
              <h4 className="card__title">Get in touch of the world</h4>
              <p className="card__text">Your work is going to fill a large part of your life, and the only way to be truly satisfied.</p>
              <form className="card__form">
                  <div className="card__flex">
                    <input className="left__input" type='text' placeholder="Enter your name"/>
                    <input className="right__input" type='email' placeholder="Email"/>
                  </div>
                  <input className="big__input" type='text' placeholder="Enter your subject?"/>
                  <br/>
                  <textarea placeholder="Enter your subject?" />
              </form>
              <button className="nav__button exper__button">Send message</button>
            </card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default exper;
