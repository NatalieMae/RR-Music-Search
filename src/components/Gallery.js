<<<<<<< HEAD
// Gallery.js
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
=======
>>>>>>> 7c5d6e4f7734ec7d1633e0ab2066b6813682e026
import GalleryItem from './GalleryItem'


function Gallery(){
    const data = useContext(DataContext)
    
    const display = data.map((item,index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })
    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery