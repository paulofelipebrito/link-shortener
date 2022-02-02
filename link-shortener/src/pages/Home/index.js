import {FiLink} from 'react-icons/fi'
import './home.css'

export default function Home(){
  return(
    <div className="container-home">
      <div className="logo">
        <img src="./logo.png" alt="Shortener Link Logo"/>
        <h1>ShortenerLink</h1>
        <span>Paste your link to shorten 👇</span>
      </div>

       <div className="area-input">
          <div>
            <FiLink size={24} color="#FFF"/>
            <input placeholder="Paste your link here..."/>
          </div>

          <button>Shorten link</button>
       </div>
    </div>
  );
}