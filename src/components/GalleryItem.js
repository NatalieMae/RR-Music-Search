import { useState } from 'react' 
import { Link } from 'react-router-dom'
<<<<<<< HEAD

=======
>>>>>>> 7c5d6e4f7734ec7d1633e0ab2066b6813682e026

function GalleryItem(props){
    let [view, setView] = useState(false)

    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }
    
    const detailStyle = {
        'width': '80vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': `url(${props.item.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'yellow'
    }

    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        return (
            <div style={detailStyle}>
                <h2>{props.item.trackName}</h2>
                <h3>
<<<<<<< HEAD
                    <Link to={`.artist/${props.item.artistId}`}>
=======
                    <Link to={`/artist/${props.item.artistId}`}>
>>>>>>> 7c5d6e4f7734ec7d1633e0ab2066b6813682e026
                        {props.item.artistName}
                    </Link>
                </h3>
                <h3>
<<<<<<< HEAD
                    <Link to={`/artist/${props.item.collectionId}`}>
=======
                    <Link to={`/album/${props.item.collectionId}`}>
>>>>>>> 7c5d6e4f7734ec7d1633e0ab2066b6813682e026
                        {props.item.collectionName}
                    </Link>
                </h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        )
    }
    

    return (
<<<<<<< HEAD
        <div onClick={() => setView(!view)} style={{'display': 'inline-block'}}>
            <p>One Gallery Item</p>
                {view ? detailView() : simpleView()}
=======
        <div onClick={() =>setView(!view)} style={{'display': 'inline-block'}}>
            {/* This simple ternary shows the simple view when 'view' is false! */}
            {view ? detailView() : simpleView()}
>>>>>>> 7c5d6e4f7734ec7d1633e0ab2066b6813682e026
        </div>
    )
}

export default GalleryItem