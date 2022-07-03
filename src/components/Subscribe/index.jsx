import './style.css'

const Subscribe = () => {

  const handleSubmit = (e)=> {
    e.preventDefault()
    alert("You are subscribed!")
  }

  return (
    <section className='subscribe'>
        <div className="subscribe-title">
            <h1>SUBSCRIBE US</h1>
            <p>We will update our informations time by time, In order to you don't miss any, Please subscribe us</p>
        </div>
         <form className="subscribe-form" onSubmit={handleSubmit}  >
            <input type="email" placeholder='Your Email...' required />
            <button>SUBSCRIBE</button>
        </form>
    </section>
  )
}

export default Subscribe