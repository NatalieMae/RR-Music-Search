import {useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery'
import Searchbar from './components/Searchbar'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'
import { DataContext } from './context/DataContext'
import { Fragment } from 'react/cjs/react.production.min'

function App() {
	let [search, setSearch] = useState('')
	let [message, setMessage] = useState('Search for Music!')
	let [data, setData] = useState([])

	const API_URL = 'https://itunes.apple.com/search?term='

	useEffect(() => {
		if(search) {
			const fetchData = async () => {
				document.title = `${search} Music`
				const response = await fetch(API_URL + search)
				const resData = await response.json()
				if (resData.results.length > 0) {
					setData(resData.results)
				} else {
					setMessage('Not Found')
				}
			}
			fetchData()
		}
	}, [search])
	
	const handleSearch = (e, term) => {
		e.preventDefault()
		setSearch(term)
	}

	return (
		<div>
			{message}
			<Router>
				<Routes>
					<Route path='/' element={
						<Fragment>
							<Searchbar handleSearch ={handleSearch}/>
							<Gallery data={data} />
						</Fragment>
					} />
					<Route path='/album/:id' element={<AlbumView />} />
					<Route path='/artist/:id' element={<ArtistView />} />
					</Routes>
			</Router>
			<DataContext.Provider value={data}>
				{/* <Gallery data={data} /> */}
				<AlbumView />
				<ArtistView />
			</DataContext.Provider>
		
		</div>
	);
}

export default App;
