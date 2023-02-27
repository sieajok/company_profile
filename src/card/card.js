import './card.css'
import img1 from '../img/uye.PNG'
import img2 from '../img/motor.PNG'
import { BsChevronCompactDown } from "react-icons/bs";

function Card() {
  return (
    <div className="container">
          <div className='card-container'>
      <div className='card1'>
          <img src={img1}/>
          <div className='konteks1'>
            <h1 className="joe">Lorem</h1>
            <p className="joe"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis provident voluptatem vero? Modi, ipsum. Dignissimos id aperiam excepturi asperiores architecto.</p>
            <a href='#'>SELENGKAPNYA</a>
          </div>

      </div>
      <div className='card1'>
          <img src={img2}/>
          <div className='konteks1'>
            <h1 className="joe"> Lorem</h1>
            <p className="p"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis provident voluptatem vero? Modi, ipsum. Dignissimos id aperiam excepturi asperiores architecto.</p>
            <a href='#'>SELENGKAPNYA</a>
          </div>

      </div>
    </div>
    <div className='arrow-down'><BsChevronCompactDown /></div>
    </div>
  );
}

export default Card;