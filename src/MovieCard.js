import React from 'react';

export default function MovieCard(props){
    const movie = props.movie;
    return(
        <div className="card">
                    <img className="cardImage" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}></img>
                    <div className="cardContent">
                        <h3 className="cardTitle">{movie.title}</h3>
                        <p><small>RELEASE DATE : {movie.release_date}</small></p>
                        <p><small>RATING : {movie.vote_average}</small></p>
                        <p className="card_desc">{movie.overview}</p>
                    </div>
                </div>   
    )
}