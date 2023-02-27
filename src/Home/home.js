
import Navbar from "../Nav/Navbar";
import Carousel from "../carousel/carousel";
import img from './../img/gerbang.jpeg';
import Card from "../card/card";

import Geleri from "../geleri/Geleri";
import Jooc from "../pardo/jooc";
import Footer from "../footer/footer";




const Home = () => {
    return(
        <div>
            <Navbar />
            
            <Carousel />
             <Card />
             <Geleri />
             <Jooc />
             <Footer />
        </div>
    )
}

export default Home;