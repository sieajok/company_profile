import  './Navbar.css';
import { Link } from 'react-router-dom';
import img from './../img/honda.png'
import Poto from '../joe/poto';


function Navbar () { 
    return (
        <div>
    <nav className="navbar">
    <img src={img} alt="" id='honda-logo'/>
        <div className="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                <li><a href="/">Beranda</a></li>
                <li><a href="#">Visi</a></li>
                <li><a href="#">Misi</a></li>
                <li><a href="/home2">Tentang</a></li>
                <li><a href="/Contact">Contact</a></li>
                <div>
                <button class="button accept-btn"  onclick="addAnimation2()">
                <Link to='/login' className='active'><center className='login'>Log in</center></Link>
                </button>
                </div>
            </ul>
            
        </div>
    </nav>
</div>
        );
    }
    
    export default Navbar;
    