import './style.css'
import { BsFacebook, BsInstagram, BsYoutube, BsMessenger } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-content">
            <div className="footer-up">
                <div className="footer-logo">EDR-TEST.</div>
                <div className="footer-icons">
                    <BsFacebook className='footer-icon'/>
                    <BsInstagram className='footer-icon'/>
                    <BsYoutube className='footer-icon'/>
                    <BsMessenger className='footer-icon'/>
                </div>
            </div>
        </div>
        <div className="copyRight">
            Web dev EDR 2022 &copy;
        </div>
    </footer>
  )
}

export default Footer