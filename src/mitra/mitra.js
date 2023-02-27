import img from './../img/pt.PNG'
import React from 'react';
import './mitra.css'


function About() {
    return(
        <>
    <div className='about' >
        <div className="profiltentang_11">
        <img src={img} alt="" height={200} width={200}/>
            <div className="about1">
            <h2>RIOT DEVELOPER</h2>
                <p className="about2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quidem, atque iure, amet architecto harum culpa ab eius magnam, quisquam porro ratione facilis nisi. Atque eius corrupti culpa a accusantium saepe incidunt velit officia repudiandae quo? Nulla, hic expedita? Id, veritatis doloribus laudantium officiis a praesentium explicabo est earum deleniti illo, sed sint? Quod, soluta. Reprehenderit tenetur neque repellendus totam omnis, harum sint aspernatur illo voluptates? Assumenda, et possimus dolorem dicta nemo consequatur nobis nam tempore rerum, cupiditate architecto porro.
                </p>
            </div>
        </div>
    </div>

   
    </>

);
}

export default About;