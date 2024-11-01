function MovieCard({movie}){
    
    return(
        <>
        <h1 style={{color:"Blue"}}>ID = {movie.id}</h1>
        <h1 style={{color:"green"}}>Name = {movie.name}</h1>
        <h1 style={{color:"skyblue"}}>Hero = {movie.hero}</h1>
        <h1 style={{color:"brown"}}>Director = {movie.director}</h1>
        </>
    )
    }
    export default MovieCard;