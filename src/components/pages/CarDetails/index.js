import { useEffect, useRef, useState } from 'react'
import FetchApi from '../../../constants/FetchApi'
import './index.modul.css'
import CustomButton from '../../Element/CustomButton'
import AppConfig from '../../../constants/AppConfig'

import PageLoader from '../../PageLoader'
import Cookies from 'js-cookie'

const CarDetails = () => {
    const [myCarDetails, setMyCarDetails] = useState({})
    const [isError, setIsError] = useState(false)
    const [from, setFrom] = useState("")
    const [date, setDate] = useState("")
    const [packages, setPackages] = useState("")
    const pRef = useRef(null);
    const DOMAIN = AppConfig.SUB_DOMAIN
    const BASE_URL = AppConfig.BASE_URL
    const [errorFrom, setErrorFrom] = useState("");
    const [errorDate, setErrorDate] = useState("");
    const [errorPackage, setErrorPackage] = useState("");
    const [times, setTimes] = useState("")
    const todays = new Date().toJSON().slice(0, 10);
    console.log("today date", times);
    // setToday(todays);

    let isAllData = true;
    var url_string = window.location;// it is get current page url
    var url = new URL(url_string);
    var myCarKey = url.searchParams.get("item_key");
    console.log("my car key", myCarKey)
    const handlerDisplayOneCarDetails = async () => {
        if (myCarKey) {
            const data = await FetchApi("/display-carlist?item_id=" + myCarKey, "", {
                method: "GET"
            })
            setMyCarDetails(data)
        } else {
            setIsError(true)
        }


    }
    console.log("my image here == > ", myCarDetails.registerYear);
    const dateString = myCarDetails.registerYear
    const makeYear = myCarDetails.makeYear
    const carRating = myCarDetails.schedule?myCarDetails.schedule:"";

    const formatDate = new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const makeDate = new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const inputFrom = (e) => {
        const value = e.target.value;
        setFrom(value)
        if (value) {
            setErrorFrom("")
        }
    }
    const inputData = (e) => {
        const value = e.target.value;
        setDate(value)
        if (value) {
            setErrorDate("")
        }
    }
    const inputtime = (e) => {
        const value = e.target.value;
        setTimes(value)
        if(value){
            setErrorDate("")
        }
    }
    const inputPackage = (e) => {
        const value = e.target.value;
        setPackages(value)
        if (value) {
            setErrorPackage("")
        }
    }
    const handlarCarBooking = async () => {
        try {
            if (from) {
                setErrorFrom("")
            } else {
                setErrorFrom("Error: Please enter your location")
                isAllData = false;
            }
            if (date) {
                setErrorDate("")
            } else {
                setErrorDate("Error: Please select pickaup date")
                isAllData = false;
            }
            if (packages) {
                setErrorPackage("")
            } else {
                setErrorPackage("Error: Please enter your package");
                isAllData = false;
            }
            if(times){
                setErrorDate("")
            }else{
                setErrorDate("Error: Please select pickaup time")
                isAllData = false;
            }
            if (isAllData === true) {
                if (pRef.current && carRating) {
                    const paragraph = pRef.current.textContent;
                    const rentPerCar = parseInt(paragraph.match(/\d+$/)[0], 10);
                    console.log("my car price", rentPerCar)
                    const hourse = packages.substring(packages, 2)
                    // const totalCarRent = hourse * paragraph
                    const carValue = parseInt(carRating.match(/\d+$/)[0], 10);
                    const totalCarPrice = carValue * hourse
                    console.log("my hour and price", hourse, carValue)
                    console.log("my total price", totalCarPrice)

                    const carBookingDetails = {
                        from: from,
                        date: date,
                        package: packages,
                        price: rentPerCar,
                        carName: myCarDetails.carName,
                        totalPrice: totalCarPrice,
                        vehicalNo: myCarDetails.vehicalNo,
                        phone: myCarDetails.phone,
                        bookId: myCarKey,
                        time: times   
                    }
                    if (carBookingDetails) {

                        const carBookingStr = JSON.stringify(carBookingDetails)
                        localStorage.setItem("booking", carBookingStr);

                        const token = Cookies.get("LTK");
                        if (token) {

                            window.location.href = DOMAIN + "booking-confiem";
                        } else {
                            window.location.href = DOMAIN + "login";
                        }
                    }

                }
            }

        } catch (error) {
            console.log("car booking error", error)
        }
    }

    useEffect(() => {
        handlerDisplayOneCarDetails()
    }, [])

    const [hour, setHour] = useState(12);

    const options = [];
    for (let i = 1; i <= hour; i++) {
        options.push(
            <option key={i} value={i}>
                {i}
            </option>
        )
    }

    return (
        <>
            <div className="d-flex blackgroun">

                <div className='car-del-main'>

                    {myCarDetails && myCarDetails.image && myCarDetails.city ? (
                        <div>
                            <div className='image-frame' style={{ marginTop: "5rem" }}>
                                <div className='mx-2'>
                                    <img src={BASE_URL + /carImage/ + myCarDetails.image[0]} alt="" className='image-display' />
                                </div>
                                <div className='car-imag-mul mx-1' style={{ overflow: 'auto', maxHeight: '400px', borderRadius: '0.5rem' }} id="mul-car">
                                    <img src={BASE_URL + /carImage/ + myCarDetails.image[1]} alt="" className='image-side mx-1 my-1' />
                                    <img src={BASE_URL + /carImage/ + myCarDetails.image[0]} alt="" className='image-side mx-1 my-1' />
                                    <img src={BASE_URL + /carImage/ + myCarDetails.image[2]} alt="" className='image-side  mx-1 my-1' />
                                    <img src={BASE_URL + /carImage/ + myCarDetails.image[3]} alt="" className='image-side mx-1 my-1' />
                                    <img src={BASE_URL + /carImage/ + myCarDetails.image[4]} alt="" className='image-side mx-1 my-1' />
                                    <img src={BASE_URL + /carImage/ + myCarDetails.image[5]} alt="" className='image-side mx-1 my-1' />
                                </div>
                            </div>

                            <div className='car-del '>

                                <div className='container-div' id='ove-del'>
                                    <div className='car-details'>

                                        <h2 className='car-name' style={{ fontFamily: "Times New Roman" }}> {myCarDetails.carName} </h2>


                                        <div className='car-frame'>
                                            <table></table>
                                            <hr />
                                            <div className='car-frame-line1'>
                                                <div className='line1'>
                                                    <h5>Make year</h5>
                                                    <p className="txt">{makeDate}</p>
                                                </div>
                                                <div className='line1'>
                                                    <h5>Registration year</h5>
                                                    <p className="txt">{formatDate}</p>

                                                </div>
                                                <div className='line1'>
                                                    <h5>Fuel type</h5>
                                                    <p className="txt">{myCarDetails.fuelType}</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className='car-frame-line1'>
                                                <div className='line2'>
                                                    <h5>Km driven</h5>
                                                    <p >31K Km</p>
                                                </div>
                                                <div className='line2'>
                                                    <h5>Trasmission</h5>
                                                    <p className="txt">{myCarDetails.trasmission}</p>
                                                </div>
                                                <div className='line2'>
                                                    <h5>City</h5>
                                                    <p className="txt">{myCarDetails.city}</p>

                                                </div>
                                            </div>
                                            <hr />
                                            <div style={{ marginLeft: "2.8rem" }}>

                                                <h5 >Vehicle No</h5>
                                                <p>{myCarDetails.vehicalNo}</p>
                                            </div>
                                            <div className='posted-by'>
                                                <h4 className=''>Posted By : {myCarDetails.admidName}</h4>
                                                <img src="/image/avatar.png" alt="" className='img-posted' />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='booking-side' style={{ marginTop: "-0.1rem", marginLeft: "-2rem", width: "35rem", borderRadius: "0.2rem", height: "30rem", marginLeft: "2rem" }}>
                                        <h4 className='book-title'>Book This car</h4>
                                        <div className='amount-screen'>
                                            <p>Per Hourse</p>
                                            <h1 ref={pRef}>{carRating.substring(carRating.length - 4)}</h1>
                                        </div>


                                        <div style={{ marginLeft: "-4rem" }}>
                                            <div>
                                                {/* <Datepicker/> */}
                                            </div>
                                            <div className='input-side'>

                                                <span className="input-lable" >FROM</span>
                                                <input
                                                    type="text"
                                                    className="my-input col-8"
                                                    placeholder='Your pickup location'
                                                    onChange={inputFrom}
                                                />
                                            </div>
                                            <div style={{ height: "0.8rem", color: "red", marginLeft: "9rem" }}>
                                                {errorFrom}

                                            </div>
                                            <div className='input-side-date'>

                                                <span className="input-lable" >DATE/TIME</span>
                                                <input
                                                    type="date"
                                                    style={{ width: "8rem" }}
                                                    className="my-input"
                                                    placeholder='Your pickup location'
                                                    onChange={inputData}
                                                    // value={todays}
                                                    min={todays}
                                                />

                                                <div class="cs-form">

                                                    <input
                                                     type="time" 
                                                     class="form-control"
                                                      value={times} 
                                                      onChange={inputtime}
                                                      style={{width:"8rem"}}
                                                      />
                                                </div>

                                            </div>

                                            <div style={{ height: "0.3rem", color: "red", marginLeft: "9rem" }}>
                                                {errorDate}
                                            </div>
                                            <div className='my-pack' id='myDropdown' >
                                                <span className="input-lable-pack" >PACKAGES</span>
                                                <select name="" id="dropdown" className='dropdown1' onChange={inputPackage} >
                                                    <option value="">Select Packages</option>
                                                    <option value="1 hrs 10 km">1 hrs 10 km </option>
                                                    <option value="2 hrs 20 km">2 hrs 30 km</option>
                                                    <option value="3 hrs 40 km">3 hrs 40 km</option>
                                                    <option value="5 hrs 60 km">5 hrs 60 km</option>
                                                    <option value="7 hrs 80 km">7 hrs 80 km</option>
                                                    <option value="9 hrs 100 km">9 hrs 100 km</option>
                                                    <option value="10 hrs 110 km">10 hrs 110 km</option>
                                                </select>
                                            </div>
                                            <div style={{ height: "0rem", color: "red", marginLeft: "9rem", marginTop: "-1rem" }}>
                                                {errorPackage}
                                            </div>

                                            <div className='btn-booking'>
                                                <CustomButton onClick={handlarCarBooking}> Continue</CustomButton>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                        : (

                            <PageLoader />



                        )
                    }




                </div>

            </div>
            {/* <Footer /> */}
        </>
    )
}

export default CarDetails; 