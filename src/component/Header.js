import React from 'react';
import {Link} from 'react-router-dom';


export const Header = () => {
    
    return (
       <header onClick={() => window.scroll(0, 0)} >
           <div className="container" >
               <div className="inner-content">
                   <div className="brand">
                       
                       <Link to="#">MovieStreaming </Link>
                   </div>

                   <ul className="nav-links">
                       <li>
                           <Link to="/trending">Trending</Link>
                       </li>

                       <li>
                           <Link to="/movies">Movies</Link>
                       </li>

                       <li>
                           <Link to="/movielist">Movie List</Link>
                       </li>
                       

                       <li>
                           <Link to="/watched">Watched</Link>
                       </li>

                       <li>
                           <Link to="/add" 
                           className='btn btn-main' 
                           >
                               Search
                               </Link>
                       </li>
                   </ul>
               </div>
           </div>
       </header>
    );
};
