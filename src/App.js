import { useState } from 'react'
import './App.css';
import MovieCard from './MovieCard';
import SearchField from './SearchField';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=d0018397'

function App() {
    let [movies, setMovies] = useState([])

    async function searchMovie(title) {
        let response = await fetch(`${API_URL}&s=${title}`)
        let data = await response.json()
        setMovies(data.Search)
    }

    return (
        <div className='app'>
            <h1>MovieLand</h1>
            <SearchField searchFunction={searchMovie} />
            {movies?.length > 0 ?
                (
                    <div className='container'>
                        {movies.map(movie => <MovieCard movie={movie} />)}
                    </div>
                ) :
                (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    )
}

export default App