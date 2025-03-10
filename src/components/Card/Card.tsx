export function Card() {
  return (
    <div className='card'>
	<div className='favorite'>
	  <img src='/img/unliked.svg' alt='Favorite button' />
	</div>
	
	<img width={133} src='/img/cards/1.jpg' alt='' />
	<h5>Loopcolors Cans 400ml 203 Farben</h5>
	<div className='d-flex justify-between align-center'>
	  <div className='d-flex flex-column'>
	    <span>Price:</span>
	    <b>120 USD.</b>
	  </div>
	  <button className='button'>
	    <img width={15} height={15} src='/img/btn-plus.svg' alt='Plus' />
	  </button>
	</div>
    </div>
  )
}