import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem} from 'react-bootstrap'
import fbicon from '../../assets/icons/fb.png'
import igicon from '../../assets/icons/inster.png'
import yticon from '../../assets/icons/yt.png'
import giticon from '../../assets/icons/github.png'
import eicon from '../../assets/icons/email-icon.png'
import picon from '../../assets/icons/phone-icon.png'
import licon from '../../assets/icons/location-icon.png'

const quick_links = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'About',
    link: 'about'
  },
  
  {
    name: 'Popular',
    link: 'popular'
  },
  {
    name: 'Packages',
    link: 'packages'
  },
  {
    name: 'Contact',
    link: 'contact'
  },
]

const quick_links2 = [
  {
    name: 'Gallery',
    link: 'gallery'
  },
  {
    name: 'Login',
    link: '/login'
  },
  {
    name: 'Register',
    link: '/register'
  },
] 


const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <div>
    <div className='footer-container'>
      <div className='fquick_links_title'>
        <h4>About Us</h4>
        <p>Explore the wonders of Sri Lanka with Ceylon Bliss. Book your dream tour, browse our gallery, and read customer testimonials to see why travelers love us. Let us guide you through an unforgettable journey across this beautiful island. Discover breathtaking landscapes and rich culture with our expertly crafted travel experiences.</p>
      </div>
      
      <div className='fquick_links_title'>
        <h4>Discover</h4>
        <ListGroup className='fquick_links'>
          {
            quick_links.map((item, index) => (
              <ListGroupItem key={index} className='link1'>
                <Link to={item.link}>{item.name}</Link>
              </ListGroupItem>
            ))
          }
        </ListGroup>
        
      </div>
      <div className='fquick_links_title'>
      <h4>Quick Links</h4>
        <ListGroup className='fquick_links'>
          {
            quick_links2.map((item, index) => (
              <ListGroupItem key={index} className='link2'>
                <Link to={item.link}>{item.name}</Link>
              </ListGroupItem>
            ))
          }
        </ListGroup>
      </div>
      
      <div className='fquick_links_title'>
        <h4>Contact Us</h4>
        <ListGroup className='fquick_links'>
          <ListGroupItem className='flocation'>
            <h6>
              <span>
                <img src={licon} alt='' />
              </span>
              Address:     
              </h6>
              <p>
                No. 12, Ceylon Bliss (PVT) LTD, Baththaramulla, Colombo
              </p>
          </ListGroupItem>
          <ListGroupItem className='femail'>
            <h6>
              <span>
                <img src={eicon} alt='' />
              </span>
              Email:     
              </h6>
              <p>
              ceylonbliss@gmail.com
              </p>
          </ListGroupItem>
          <ListGroupItem className='fphone'>
            <h6>
              <span>
                <img src={picon} alt='' />
              </span>
                Phone:     
              </h6>
              <p>
                +94 11 245 5486
              </p>
          </ListGroupItem>
        </ListGroup>
      </div>
    </div>
    <div className='ftitle'>
      <h2>Ceylon Bliss</h2>
      <div className='social_links'>
        <span>
          <Link to='/'><img src={fbicon} alt='facebook' /></Link>
        </span>
        <span>
          <Link to='/'><img src={igicon} alt='instagram' /></Link>
        </span>
        <span>
          <Link to='/'><img src={yticon} alt='youtube' /></Link>
        </span>
        <span>
          <Link to='/'><img src={giticon} alt='github' /></Link>
        </span>
      </div>  
      <div className='copyright'>
        <p>
          Copyright {year}, design and develop by Ceylon Bliss.
          All rights reserved.
        </p>
      </div>
    </div>
    </div>
  )
}

export default Footer
