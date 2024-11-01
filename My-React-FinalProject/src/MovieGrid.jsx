import MovieCard from "./MovieCard";

function MovieGrid(){
    const movies=[
        {id:1,name:"Devara",hero:"NTR",director:"Koratala siva"},
        
        {id:2,name:"Hanu man",hero:"Teja",director:"Prashant Varma"},
      
        {id:3,name:"Salaar",hero:"Prabhas",director:"Prasanth neel" },
        
        {id:4,name:"kalki",hero:"Prabhas",director:"Nag ashwin"}
        
    ];

    return(
        <>
        {movies.map(m=>
            <MovieCard movie={m}/>
            
            ) }       
        </>
    )
    }
export default MovieGrid;