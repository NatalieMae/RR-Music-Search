import { useState, useEffect } from 'react'
<<<<<<< HEAD
import { useParams } from 'react-router-dom'

function ArtistView() {
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Artist Data Goes Here!</p>
=======
import { useParams, Link, useNavigate } from 'react-router-dom'

function ArtistView() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])
    
	useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setArtistData(resData.results)
        }
        fetchData()
	}, [id])

    const justAlbums = artistData.filter(entry => entry.collectionType === 'Album')

    const renderAlbums = justAlbums.map((album, i) =>{
        return (
            <div key={i}>
                <Link to={`/album/${album.collectionId}`}>
                    <p>{album.collectionName}</p>
                </Link>
            </div>
        )
    })

    const navButtons = () => {
        return(
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                |
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        )
    }

    return (
        <div>
            {artistData.length > 0 ? <h2>{artistData[0].artistName}</h2> : <h2>Loading...</h2>}
            {navButtons()}
            {renderAlbums}
>>>>>>> 7c5d6e4f7734ec7d1633e0ab2066b6813682e026
        </div>
    )
}

<<<<<<< HEAD

export default ArtistView
=======
export default ArtistView
>>>>>>> 7c5d6e4f7734ec7d1633e0ab2066b6813682e026
