import {Card} from './components/Card/Card.tsx'
import {Header} from './components/Header/Header.tsx'
import {Drawer} from './components/Drawer/Drawer.tsx'

export function App() {
  return (
    <div className='wrapper clear'>
	<Drawer />
	<Header />
	
	<div className='content p-40'>
	  <div className='d-flex justify-between align-center mb-40'>
	    <h1>All paints</h1>
	    <div className='searchBlock d-flex'>
		<img src='/img/search.svg' alt='Search' />
		<input placeholder='Search...' />
	    </div>
	  </div>
	  <div className='cards'>
	    <Card />
	    <Card />
	    <Card />
	    <Card />
	    <Card />
	    <Card />
	    <Card />
	    <Card />
	    <Card />
	  </div>
	
	</div>
    </div>
  )
}