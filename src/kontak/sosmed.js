import './sosmed.css'
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Sosmed = () => {
    return ( 
        <>
        <div className="sosmed-container">
            <h2>Contact Us</h2>
            <div className="sosmed-row">
                <div className="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, harum qui suscipit doloremque facere minus similique voluptatibus quidem at unde vel </p>
                </div>
                <div className="sosmed">
                    <ul>
                        <li><FaWhatsapp id='icon'/> 089602809437</li>
                        <li><FaInstagram id='icon'/> Instagram</li>
                    </ul>
                    <ul>
                        <li><FaWhatsapp id='icon'/> 089602809437</li>
                        <li><FaInstagram id='icon'/> Instagram</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Sosmed;