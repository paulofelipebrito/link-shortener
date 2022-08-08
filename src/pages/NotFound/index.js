import { Link } from 'react-router-dom';
import './notfound.css';

export default function NotFound(){
  return(
    <div className="error-container">
      <img src="notfound.png" alt="Page not found"/>
      <h1>Page not found</h1>
      <Link to="/">Come back to home.</Link>
    </div>
  );
}