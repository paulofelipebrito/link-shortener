import {FiLink} from 'react-icons/fi'
import './home.css'

import Menu from '../../components/Menu'
import { useState } from 'react';
import LinkItem from '../../components/LinkItem';

import api from '../../services/api'
import { saveLink } from '../../services/storeLinks'

export default function Home(){
  const [link, setLink] = useState('');
  const [data, setData] = useState('');
  const [showModal, setShowModal] = useState(false);

  async function handleShortLink(){
    try{
      const response = await api.post('/shorten', {
        long_url: link
      });
      setData(response.data);
      setShowModal(true);

      saveLink('@shortenLink', response.data)
      setLink('');
    }catch{
      alert("Something went wrong");
      setLink('');
    }
    setShowModal(true);    
  }

  return(
    <div className="container-home">
      <div className="logo">
        <img src="./logo.png" alt="Shortener Link Logo"/>
        <h1>ShortenerLink</h1>
        <span>Paste your link to shorten 👇</span>
      </div>

      <Menu/>
      {showModal && 
        (<LinkItem 
          closeModal={()=>{setShowModal(false)}}
          content={data}/>
        )
      }

      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF"/>
          <input 
          placeholder="Paste your link here..."
          value={link}
          onChange={(event) => setLink(event.target.value)}/>
        </div>

        <button onClick={handleShortLink}>Shorten link</button>
      </div>
    </div>
  );
}