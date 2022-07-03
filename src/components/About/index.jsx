import './style.css'

const About = () => {
  return (
    <section className="about">
        <div className="about-heading">
            <h1>About Us</h1>
            <div className="underline"></div>
        </div>
        <div className="about-body">
            <div className="about-content">
                <h1>Why we are the one of the best option to have lunch and dinner?</h1>
                <p>We serve fine mealswelcome to EDR-TEST.! Here we take care of our ingredients and take our cooking very seriously. Our doner is made in the traditional way with freshly grilled veal, freshly baked bread and crispy vegetables. </p>
                <p>EDR-TEST. is a mixture between "fine dining" and "fast-food", something we have chosen to call Fine lunch + dinner. Our meals have several components with different healthy and therapeutic functions and is widely utilized in local communities. Overall, Uyghur food is rich in nutrients and beneficial for health.</p>
            </div>
            <div className="about-poster">
                <div className="poster-wrapper">
                    <img src="./imgs/about.jpeg" alt="about-poster" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About