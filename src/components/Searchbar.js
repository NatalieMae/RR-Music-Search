import { useState } from 'react'
// import GalleryItem from './GalleryItem'
// import AlbumView from './AlbumView'
// import ArtistView from './ArtistView'

function SearchBar(props) {
    let [searchTerm, setSearchTerm] = useState('')

    return (
        <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>

            <input type="text" placeholder="Enter a search term here" onChange={
                (e) => setSearchTerm(e.target.value)
            } />

            <input type="submit" />

        </form>
    )
}

export default SearchBar
