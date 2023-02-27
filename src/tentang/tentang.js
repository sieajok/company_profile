import './tentang.css'
import img from '../img/uye.PNG'
import img2 from '../img/bersama.png'



function Tentang() {
    return(
        <>
    
  <div className='profil mt-10 pt-[80px]'>
        <div className="profiltentang_1">
        <img src={img}  className='mr-36' alt="" height={200} width={200}/>
            <div className="kataa2">
            <h2 className='ml-20 text-4xl'>VISI</h2>
                <p className="kataa2">
                Apa yang
                kami yakini
                AHM ingin menjadi pemimpin pasar sepeda motor di Indonesia dan menjadi pemain kelas dunia, dengan mewujudkan impian konsumen, menciptakan kegembiraan bagi konsumen dan berkontribusi kepada masyarakat Indonesia.
                </p>
            </div>
        </div>
    </div>



  <div className='profil mb-50'>
        <div className="profiltentang_2">
        <img src={img}  className='' alt="" height={200} width={200}/>
            <div className="kataa1">
            <h2 className='ml-4 text-4xl'>MISI</h2>
                <p className="kataa2">
                Apa yang
                kami lakukan
                Menciptakan solusi mobilitas bagi masyarakat dengan produk dan pelayanan terbaik.
                </p>
            </div>
        </div>
    </div>

    <div className='profil mb-50'>
        <div className="profiltentang_2">
            <div className='flex flex-col'>
            <h2 className='ml-[60px] text-4xl'>SEJARAH</h2>
        <img src={img2}  className='' alt="" height={350} width={350}/>
        </div>
            <div className="kataa1">
                <p className="kataa2 mt-7" style={{marginTop: "50px"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quidem, atque iure, amet architecto harum culpa ab eius magnam, quisquam porro ratione facilis nisi. Atque eius corrupti culpa a accusantium saepe incidunt velit officia repudiandae quo? Nulla, hic expedita? Id, veritatis doloribus laudantium officiis a praesentium explicabo est earum deleniti illo, sed sint? Quod, soluta. Reprehenderit tenetur neque repellendus totam omnis, harum sint aspernatur illo voluptates? Assumenda, et possimus dolorem dicta nemo consequatur nobis nam tempore rerum, cupiditate architecto porro.
                </p>
            </div>
        </div>
    </div>
  </>

    );
}

export default Tentang;