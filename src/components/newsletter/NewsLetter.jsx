import './NewsLetter.css'

export default function NewsLetter() {
  return (
    <div className='Main-sub'>
      <div className="head-Sub">
        <div className="head-content">
        <h1>Subscribe to Our Newsletter</h1>
        <p>Join our mailing list to get the latest news</p>
        </div>
       
       <form action="">
        <div className="form">
      <input className='input' type="text" name='email' placeholder='Enter your email'/>
      <button type='subscribe'><p>Subscribe</p></button>
         </div>
       </form>
     
      </div>
    </div>
  )
}
