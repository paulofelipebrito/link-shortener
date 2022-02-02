import './links.css'
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi'

export default function Links(){
  return(
    <div className="links-container">

      <div className="links-header">
        <FiArrowLeft size={38} color="#FFF"/>
        <h1>My Links</h1>
      </div>

      <div className="links-item">
        <button className="link">
          <FiLink size={18} color="#FFF"/>
          https://paulofelipebrito.com
        </button>
        <button className="link">
          <FiTrash size={24} color="#FF5454"/>
        </button>
      </div>
      <div className="links-item">
        <button className="link">
          <FiLink size={18} color="#FFF"/>
          https://paulofelipebrito.com
        </button>
        <button className="link">
          <FiTrash size={24} color="#FF5454"/>
        </button>
      </div>

    </div>
  );
}