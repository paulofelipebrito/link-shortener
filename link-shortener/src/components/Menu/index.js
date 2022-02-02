import './menu.css';
import {BsYoutube, BsInstagram} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export default function Menu(){
  return(
    <div className="menu">
      <a className="social" href="https://youtube.com/pfle_fps">
        <BsYoutube color="#FFF" size={24}/>
      </a>
      <a className="social" href="https://instagram.com/felipebrito_">
        <BsInstagram color="#FFF" size={24}/>
      </a>
      <Link to="/links" className="menu-item">My links</Link>
    </div>
  );
}