import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../Pages/Trending.css';
import CustomPagination from '../component/CustomPagination';
import { SingleContent } from '../component/SingleContent/SingleContent';
import { API_SERVICE } from '../Config/config';

export const Trending = () => {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);


    const fetchTrending = async () =>{
       
        const{data} = await axios.get(
            `${API_SERVICE.MOVIE_DB_API}/3/trending/all/day?api_key=${API_SERVICE.MOVIE_API_DB_SERVICE}&page=${page}`
            );
           //console.log(data.results);
            setContent(data.results);
    };

    useEffect(() => {
        fetchTrending();
    }, [page]);

    return (
        <div >
            <span className="pageTitle">Trending Page</span>
            <div className="trending">
                {content && content.map((c) => 
                    <SingleContent  
                    key={c.id}
                    id={c.id}
                    poster={c.poster_path}
                    title={c.title || c.name}
                    date={c.first_air_date || c.release_date}
                    media_type={c.media_type}
                    vote_average={c.vote_average}/>
                )}
            </div>
            <CustomPagination setPage={setPage}  />
        </div>
    )
}
