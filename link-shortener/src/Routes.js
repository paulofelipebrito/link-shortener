import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Links from './pages/Links';
import NotFound from './pages/NotFound';

export default function RoutesApp(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/links" element={<Links/>}></Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  ); 
}