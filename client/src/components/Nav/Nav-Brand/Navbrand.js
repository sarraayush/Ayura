import { Link } from 'react-router-dom';
import './NavBrand.css';

const NavBrand = () => {
    return ( 
        <div href="#home" className='navbrand__container'>
           <h1 className='navbrand'>
               <Link to="/">AYURA</Link>
            </h1>
        </div>
     );
}
 
export default NavBrand;