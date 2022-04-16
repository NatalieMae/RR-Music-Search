import { useState, useEffect } from 'react'
<<<<<<< HEAD
import { useParams } from "react-router-dom";

function AlbumView() {
    const {id} = useParams()
    const [ albumData, setAlbumData ] = useState([])

    return (
        <div>
            <h2>The id passed was: {id} </h2>
            <p>Album Data Goes Here!</p>
=======
import { useParams, useNavigate } from 'react-router-dom'

function AlbumView() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [ albumData, setAlbumData ] = useState([])

    useEffect(() => {
        const API_URL = `http://localhost:4000/song/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setAlbumData(resData.results)
        }
        fetchData()
    },[id])

    const justSongs = albumData.filter(entry => entry.wrapperType === 'track')

    const renderSongs = justSongs.map((song, i) => {
        return (
            <div key={i}>
                <p>{song.trackName}</p>
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
            {navButtons()}
            {renderSongs}
>>>>>>> 7c5d6e4f7734ec7d1633e0ab2066b6813682e026
        </div>
    )
}

<<<<<<< HEAD
export default AlbumView
=======
export default AlbumView
>>>>>>> 7c5d6e4f7734ec7d1633e0ab2066b6813682e026
