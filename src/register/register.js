import  './register.css';
import img from './../img/p.jpeg'


function Register() {
  return (
    <div>
    <title style={{ color: "brown" }}>Login 15</title>
    <meta name="author" content="Zaur" />
    <meta descryption content="Presentation of website" />
    <meta name="keywords" content="technology, cyber security, software" />
    <meta httpEquiv="refresh" content={100} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charSet="utf-8" />
    <link rel="stylesheet" href="login15.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    />
    <link
      href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2 family=Poppins:wght@200;300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
    />
    <div className="login-wrapper">
      <div className="avatar">
        <img src={img}/>
      </div>
      <h2>Register</h2>
      <h3>Welcome HONDA</h3>
      <form className="login-form">
        <div className="input-group">
          <input type="email" placeholder="Email" />
          <i className="fa-solid fa-user" />
        </div>
        <div className="input-group">
          <input type="+62" placeholder="+62" />
          <i className="fa-user-circle" />
        </div>
        <div className="input-group">
          <input type="password" placeholder="Password" pattern=".{6,}" />
          <i className="fa-solid fa-lock" />
        </div>
        <button type="submit">
          LOGIN
          <i className="fa-sharp fa-solid fa-arrow-right" />
        </button>
        <a href="/login">Login</a>
      </form>
    </div>
    
  </div>
  
    
  );
}

export default Register;
