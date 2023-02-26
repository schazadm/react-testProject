import { useRef } from 'react';
import SearchIcon from './search.svg'

function SearchField({ searchFunction }) {
    let title = useRef('')

    return (
        <div className='search'>
            <input
                ref={title}
                type="text"
                placeholder='Search for movies'
            />
            <img
                src={SearchIcon}
                alt='search'
                onClick={() => searchFunction(title.current.value)}
            />
        </div>
    );
}

export default SearchField;