import './links.css'
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import {getLinksSaved, deleteLink} from '../../services/storeLinks'
import { useEffect, useState } from 'react'
import LinkItem from '../../components/LinkItem'

export default function Links(){
  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isEmptyList, setIsEmptyList] = useState(false);

  useEffect(()=>{
    async function getLinks(){
      const result = await getLinksSaved('@shortenLink');

      if(result.length === 0){
        setIsEmptyList(true);
      }

      setMyLinks(result);
    }
    getLinks();
  }, []) 

  function handleOpenLink(link){
    setData(link);
    setShowModal(true);
  }

  async function handleDelete(id){
    const result = await deleteLink(id, myLinks);

    if(result.length === 0){
      setIsEmptyList(true);
    }

    setMyLinks(result);
  }

  return(
    <div className="links-container">

      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#FFF"/>
        </Link>
        <h1>My Links</h1>
      </div>

      {isEmptyList && (
        <div className="links-item">
          <h2 className="empty-text">Your list is empty...</h2>
        </div>
      )}

      { myLinks.map( Link => (
        <div key={Link.id} className="links-item">
          <button className="link" onClick={() => handleOpenLink(Link)}>
            <FiLink size={18} color="#FFF"/>
            {Link.long_url}
          </button>
          <button className="link-delete" onClick={()=> handleDelete(Link.id)}>
            <FiTrash size={24} color="#FF5454"/>
          </button>
        </div>
      ))}

      { showModal && (
        <LinkItem 
          closeModal={()=> setShowModal(false)}
          content={data}
        />
      )}      
    </div>
  );
}