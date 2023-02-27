import  './jooc.css';
import img1 from './../img/beat1.PNG'
import img2 from './../img/beat2.PNG'
import img3 from './../img/beat3.PNG'
import img4 from './../img/beat4.PNG'
import { BsChevronCompactDown } from "react-icons/bs";


function Jooc  () {
    return (
        < div className='cart'>
        <div className='produk'>
        <div className="product">
            <div className="foto">
            <img src={img1} alt="" />
            </div>
            <div className="desc-prod">
                <h1>produk 1</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat, quasi ex quidem quas soluta.</p>
                <a href="#">see more</a>
            </div>
        </div>
        <div className="product">
            <div className="foto">
            <img src={img2} alt="" />
            </div>
            <div className="desc-prod">
                <h1>produk 2</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat, quasi ex quidem quas soluta.</p>
                <a href="#">see more</a>
            </div>
        </div>
        <div className="product">
            <div className="foto">
            <img src={img3} alt="" />
            </div>
            <div className="desc-prod">
                <h1>produk 3</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat, quasi ex quidem quas soluta.</p>
                <a href="#">see more</a>
            </div>
        </div>
        <div className="product">
                    <div className="foto">
                    <img src={img4} alt="" />
                    </div>
                    <div className="desc-prod">
                        <h1>produk 4</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat, quasi ex quidem quas soluta.</p>
                        <a href="#">see more</a>
                    </div>
                </div>
                </div>        
                <BsChevronCompactDown className='arrowdo' fontSize="5rem"/>             
            </div>

        
        )
    }

    export default Jooc; 