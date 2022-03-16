import logo6 from "../img/square.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return( 
        <> 
 
     <nav>
     <button>
       <img className="imgNav" src={logo6} ></img>
       </button>
     <ul className="ulNav">
          <Link className="nav-link" to="/SobreMi">Iniciar sesion</Link>
          
          <li><a href="#">Curriculum pdf</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Aun no lo se</a></li>  

      </ul>

     </nav>
 </>
    )}

    export default Navbar