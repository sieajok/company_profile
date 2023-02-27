import  './geleri.css';
import img1 from './../img/geleri1.PNG'
import img2 from './../img/geleri2.PNG'
import img3 from './../img/geleri3.PNG'
import img4 from './../img/geleri4.PNG'
import img5 from './../img/geleri5.PNG'
import img6 from './../img/geleri6.PNG'


function Geleri  () {
    return (
        <div className="container">
        <li className="heading">
          Galeri
        </li>
        <div className="gallery">
          <div className="gallery-item">
          <img src={img1}/>
          </div>
          <div className="gallery-item">
          <img src={img2}/>
          </div>
          <div className="gallery-item">
          <img src={img3}/>
          </div>
          <div className="gallery-item">
          <img src={img4}/>
          </div>
          <div className="gallery-item">
          <img src={img5}/>
          </div>
          <div className="gallery-item">
          <img src={img6}/>
          </div>
        </div>
      </div>
      

    );
}
export default Geleri;