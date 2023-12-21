import React from 'react'

import './Menu.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/index.esm'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


export default function Menu() {
  function isMobileDevice() {
    if(window.innerWidth <= 767){
      return 'true'
    }else{
      return 'false'
    }
  }

  function menu() {
    let hiddenMenu = document.querySelector('.hidden-menu');
    let hiddenSideMenu = document.querySelector('.side-menu');
    if (isMobileDevice() == 'false' && hiddenMenu.style.display == 'none'){
      hiddenSideMenu.style.display = 'block'
    }
    else if (isMobileDevice() == 'true' && hiddenMenu.style.display === 'none') {
      hiddenMenu.style.display = 'block';
    } else if(isMobileDevice() == 'false') {
      hiddenMenu.style.display = 'none';
    }
    else{
      hiddenMenu.style.display = 'none';
    }
  }
  function hideSideMenu(){
    document.querySelector('.side-menu').style.display = 'none'
  }



  useEffect(() => {
    window.addEventListener('scroll', hideSideMenu);
    return () => {
      window.removeEventListener('scroll', hideSideMenu);
    };
  }, []); 

  function hideSideMenu() {
    const sideMenu = document.querySelector('.side-menu');
    if (sideMenu && sideMenu.style.display !== 'none') {
      sideMenu.style.display = 'none';
    }
  }


  return (
    <div id='menu' className="head-menu">
    <nav className="navbar navbar-expand-lg yaya">
      <div className="container-fluid" style={{overflow: 'hidden'}}>
        <a className="navbar-brand menu-logo" href="#">
        Y&M Royal Chic
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu">
            <li className="nav-item">
            <Link className="nav-link activee" to="/haha">
                  HOME
                </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                PAGES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                SHOP
              </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
                ELEMENTS
              </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
                CART(1)
              </a>
            </li>
          </ul>
          
        </div>
        <div className="hamburger-toggle" onClick={menu}>
                <span className="line top"></span>
                <span className="line middle"></span>
                <span className="line bottom"></span>
            </div>
      </div>
    </nav>









    <div className='hidden-menu'>
      <ul className='navbar-nav'>
        <li><Link className="activee" to="/haha">
                  HOME
                </Link></li>
        <li><a href="#">PAGES</a></li>
        <li><a href="v">SHOP</a></li>
        <li><a href="v">ELEMENTS</a></li>
        <li><a href="v">CART(1)</a></li>
      </ul>
    </div>
    <div className="side-menu">
    <h6 className="navbar-brand side-menu-title" href="#">
        Y&M Royal Chic
        </h6>
        <p>Y&M Royal Chic is a destination for mo
          dern women seeking a blend of timeless 
          elegance and contemporary fashion. Our curated collection celebrates indi
          viduality with chic dresses and versatile pieces, offering a seamless fusion of grace and sophisticat
          ion. Step into Y&M Royal Chic, where style mee
          ts simplicity, and discover a curated selection that empowers your unique expression of fashion.</p>
            <h3>FOLLOW US</h3>
            <button className='side-menu-btn' onClick={hideSideMenu}></button>
<div className="social">
  <span>Ig.</span>
  <span>Fb.</span>
  <span>Tw.</span>
</div>
    </div>
    </div>
  )
}

