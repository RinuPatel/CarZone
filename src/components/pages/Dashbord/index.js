import React, { useState } from 'react'
import Button from '../../Element/CustomButton'
import Footer from '../../Footer'
import './index.mudel.css'
import AppConfig from '../../../constants/AppConfig'


export default function Dashbord() {

  const MY_DOMAIN = AppConfig.SUB_DOMAIN;
  const [city, setCity] = useState('Select city')

  console.log("my select city here", city);

  const handlerCityWise = () => {
    if (city === "Select city") {
      window.location.href = MY_DOMAIN + "cars-list"
    } else {
      window.location = window.location.href.split('?')[0] + "?q=" + city;//this is split location in the  array and get 0 position data
      window.location.href = MY_DOMAIN + "cars-list?city=" + city;//we are passing query on city data
      console.log("my city data == >", city);
      console.log("my href ===>", window.location);
    }

  }
  const getCity = (e) => {
    console.log("my event is ==>", e);
    const value = e.target.innerText;
    setCity(value)
  }
  return (

    <>
      <div className="banner-image w-100 vh-100 d-flex justify-content-left align-items-center" >
        <div className='justify-content-left align-items-center display-content' id='display'>
          <div className="text-left" id='text-head'>
            <h1 className='text-white text-head' id='header-dashbord'>Book Your Cars Rental</h1>
            {/* <h4 className='text-white text-mini' id='title-dashbord'>Fast & Easy Way To Rent A Car</h4> */}
            <h5 className='text-white text-third'  >Ready to hit the road? Browse our fleet and book <br />your perfect ride today.</h5>
          </div>
          <p className='line-dash'></p>
          <div style={{ display: "flex" }} className='my-drop'>

            <div className="hm-search-heading2">
              <div className="my-btn-drop">
                <button
                  className="home-searchBtn-container"
                >{city} <i className="fas fa-caret-down dropIcon"></i></button>
                <div className="my-city-content1 "  >
                  <p onClick={getCity}>Surat</p>
                  <p onClick={getCity}>Ahembadab</p>
                  <p onClick={getCity}>Bardoli</p>
                  <p onClick={getCity}>Mumbai</p>
                </div>
              </div>
            </div>
            <div className="hm-search-heading2">
              <Button className="city-btn" onClick={handlerCityWise} >FIND CARS  </Button>
            </div>
            <div>
            </div>
          </div>

        </div>

      </div>
      <div className='list-car-front'>
        <h1>Our Cars</h1>
        <div className='our_car'>
          <div class="polaroid">
            <img src="all image/car9.jpeg" alt="Norther Lights" className='image' />
            <div class="middle">
              <div class="text"> <a href="/cars-list" className='link-car'> View More</a></div>
            </div>
            <div class="name-car">
              <p>RR</p>
            </div>

          </div>
          <div class="polaroid mx-3">
            <img src="all image/car8.jpeg" alt="Norther Lights" className='image' />
            <div class="middle">
              <div class="text"> <a href="/cars-list" className='link-car'> View More</a></div>
            </div>
            <div class="name-car">
              <p>BMW</p>
            </div>
          </div>
          <div class="polaroid">
            <img src="all image/ca1.webp" alt="Norther Lights" className='image' />
            <div class="middle">
              <div class="text"> <a href="/cars-list" className='link-car'> View More</a></div>
            </div>
            <div class="name-car">
              <p>McLaren Elva</p>
            </div>
          </div>
          <div class="polaroid">
            <img src="all image/car1.jpeg" alt="Norther Lights" className='image' />
            <div class="middle">
              <div class="text"> <a href="/cars-list" className='link-car'> View More</a></div>
            </div>
            <div class="name-car">
              <p>Sender</p>
            </div>
          </div>
          <div class="polaroid mx-3">
            <img src="all image/car2.jpeg" alt="Norther Lights" className='image' />
            <div class="middle">
              <div class="text"> <a href="/cars-list" className='link-car'> View More</a></div>
            </div>
            <div class="name-car">
              <p>Hyundai</p>
            </div>
          </div>
          <div class="polaroid">
            <img src="all image/car3.jpeg" alt="Norther Lights" className='image' />
            <div class="middle">
              <div class="text"> <a href="/cars-list" className='link-car'> View More</a></div>
            </div>
            <div class="name-car">
              <p>Lamborghini</p>
            </div>
          </div>
          {/* <img src="all image/car.jpeg" alt="not found" className='img-car-offer' />
          <img src="all image/car1.jpeg" alt="not found" className='img-car-offer' />
          <img src="all image/car2.jpeg" alt="not found" className='img-car-offer' />
          <img src="all image/car3.jpeg" alt="not found" className='img-car-offer' />
          <img src="all image/car4.jpeg" alt="not found" className='img-car-offer' />
          <img src="all image/car5.jpeg" alt="not found" className='img-car-offer' /> */}
        </div>
      </div>

      <div className='our-benifit-main' id='benefit-main' >

        <h1 className='benefit-title' id='benefit-title'>Our Benefits</h1>
        <p className='benefit-line'>Cars Rantals Service</p>

      </div>
      <div className='beninit-item-main'>
        <div className='benenit-item'>
          <img src="/image/p2.jpg" alt="image not found" />
          <h3>Our Customer Always 100% Satisfied</h3>
          <p>Our team of experts is always available to assist you. We take pride in providing top-notch services and ensuring your needs are met with the utmost care and attention.</p>
        </div>
        <div className='benenit-item'>
          <img src="/image/p3.jpg" alt="image not found" />
          <h3>We Provide Easier<br></br>
            & Faster Bookings</h3>
          <p>We understand that your time is valuable, and we want to make your booking experience as  efficient as possible.we have streamlined our booking process to ensure that you can secure your booking  quickly.</p>
        </div>
        <div className='benenit-item'>
          <img src="/image/p1.jpg" alt="image not found" />
          <h3>Your Choice of <br></br>
            Any Pickup Location</h3>
          <p>We understand that convenience is important when it comes to choosing a pickup location. That is why we provide you the flexibility to choose the pickup location as per your needs and preferences.</p>
        </div>

      </div>
      <Footer />
    </>
  )
}
