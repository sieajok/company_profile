import  './footer.css';
import img from './../img/p.jpeg'


const Footer = () => {
    return ( 
    <>
    <footer>
        <div className="desc">
            <div className="left-footer">
                <div className="footer-logo">
                    <img src={img} alt="" />
                    <h1>HONDA</h1>
                </div>  
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatibus cum maxime rerum error nostrum tenetur suscipit, minus explicabo accusamus, velit aspernatur optio ducimus. Inventore!</p>
            </div>
            <div className="right-footer">
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quaerat molestias explicabo debitis, vitae harum quas expedita fuga cumque accusantium aspernatur ipsum reprehenderit dolorem voluptatibus alias sapiente eius minus ad voluptatem ex totam, animi impedit consequuntur a. Ipsum, a provident ducimus commodi incidunt obcaecati dolore nemo laboriosam magnam quisquam eos, sequi quas impedit ea sint id, velit distinctio dolores neque? Hic, illum. Quisquam repellat aliquid quod sequi ducimus nesciunt corporis recusandae ut minus expedita iure consequuntur molestiae aspernatur placeat, numquam, magnam minima animi saepe! Maxime doloremque expedita deserunt dicta veniam numquam labore, accusantium minus placeat eaque, illum similique laborum corrupti!</p>
                <div className="nyuu">
                    <a href="#">see more</a>
                </div>
            </div>
        </div>
        <div className="copyright">
            <span>© Copyright 2020, PT. Astra Honda Motor. All Rights Reserved.</span>
        </div>
    </footer>
    </> 
    );
}
 
export default Footer;