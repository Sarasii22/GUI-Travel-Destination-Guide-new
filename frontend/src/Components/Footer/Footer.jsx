import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import fbicon from '../../assets/icons/fb.png'
import igicon from '../../assets/icons/inster.png'
import yticon from '../../assets/icons/yt.png'
import giticon from '../../assets/icons/github.png'


const quick_links = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'About',
    link: '/about'
  },
  
  {
    name: 'Popular',
    link: '/popular'
  },
  {
    name: 'Packages',
    link: '/packages'
  },
  {
    name: 'Contact',
    link: '/contact'
  },
]
/*
const quick_links2 = [
  {
    name: 'Gallery',
    link: '/gallery'
  },
  {
    name: 'Login',
    link: '/login'
  },
  {
    name: 'Register',
    link: '/register'
  },
] */


const Footer = () => {
  return (
    <div>
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
      </div>
      <div className='fquick_links_title'>
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
    </div>
  )
}

export default Footer
