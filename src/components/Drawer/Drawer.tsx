export function Drawer() {
  return (
    <div style={{display: 'none'}} className='overlay'>
	<div className='drawer'>
	  <h2 className='d-flex justify-between mb-40'>
	    Basket
	    <img className='cu-p' src='/img/btn-remove.svg' alt='Remove' />
	  </h2>
	  
	  <div className='items'>
	    <div className='cartItem d-flex'>
		<img className='mr-15' height={70} src='/img/cards/1.jpg' alt='' />
		<div className='mr-20'>
		  <p className='mb-5'>Loopcolors Cans 400ml 203 Farben</p>
		  <b>120 USD.</b>
		</div>
		<img className='removeBtn' src='/img/btn-remove.svg' alt='Remove' />
	    </div>
	  </div>
	  
	  <div className='cartTotalBlock'>
	    <ul>
		<li>
		  <span>Total</span>
		  <div></div>
		  <b>275 USD</b>
		</li>
		<li>
		  <span>Tax 5%:</span>
		  <div></div>
		  <b>10.5 USD</b>
		</li>
	    </ul>
	    <button className='greenButton'>Make order <img src='/img/arrow.svg' alt='Arrow' />
	    </button>
	  </div>
	
	</div>
    </div>
  )
}