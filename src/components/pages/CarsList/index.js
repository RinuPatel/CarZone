import { useEffect, useState } from 'react';
import './index.css'
import FetchApi from '../../../constants/FetchApi';
import AppConfig from '../../../constants/AppConfig';
import CustomButton from '../../Element/CustomButton';
import ServerError from '../../Errors/ServerError';
import CustomCheckBox from '../../Element/CustomCheckBox';
import { useNavigate } from 'react-router';

const CarsList = (props) => {
    const Navigate = useNavigate()
    const MY_DOMAIN = AppConfig.SUB_DOMAIN;
    const [catearyName, setCatearyName] = useState()
    const [carItems, setCarItems] = useState([])
    const [isActive, setIsActive] = useState(false);
    const [carSeaterList, setCarSeaterlLst] = useState([
        {
            title: "4 Seats"
        },
        {
            title: "5 Seats"
        },
        {
            title: "6 Seats"
        },
        {
            title: "6+ Seats"
        },
        {
            title: "All"
        },
    ])
    const [cityFilter,setCityFilter] = useState([
        {
            title: "Surat"
        },
        {
            title: "Mumbai"
        },
        {
            title: "Bardoli"
        },
        {
            title: "Ahemdabad"
        },
        
    ])

    var url_string = window.location;// it is get current page url
    var url = new URL(url_string);
    var myQuery = url.searchParams.get("city");
    console.log("my query city here ==>", url);
    const handlerListOfCars = async () => {
        try {
            if (!myQuery) {
                const data = await FetchApi('display-carlist', "", {
                    method: "GET",
                })
                console.log("my data ", data);
                setCarItems(data)
            } else {
                const data = await FetchApi('display-carlist?city=' + myQuery, "", {
                    method: "GET",
                })
                console.log("my data ", data);
                setCarItems(data)
            }
        } catch (error) {
            console.log("some error occur..!", error)
        }
    }
    const handlerOneCarDetails = (id) => {
        console.log("my car is here", id)
        window.location = window.location.href.split('?')[0] + "?q=" + id;
        window.location.href = MY_DOMAIN + "car-details?item_key=" + id;
        // Navigate(MY_DOMAIN + "car-details?item_key=" + id)
    }
    const handlerCarCategary = async (myQuery) => {
        if (myQuery) {
            const data = await FetchApi('display-carlist?car_categary=' + myQuery, "", {
                method: "GET",
            })

            setCarItems(data)
        } else {
            const data = await FetchApi('display-carlist', "", {
                method: "GET",
            })
            setIsActive(true)
            console.log("car data here=>",data);

            setCarItems(data)
        }

    }

    console.log("my car categary", catearyName)
    useEffect(() => {
        handlerListOfCars()

    }, [])




    return (
        <>
            <div className="background-image  d-flex ">
                <div className='my-list ' >
                    {
                        carItems && carItems.length > 0 ?
                            (
                                <div>
                                    <h3 id='title-h3 black-text'>CATEGARY</h3>
                                    <div className='categary-name' id='btn-cat' >
                                        <button className="categary-type mx-2" value="all cars" onClick={(e) => { handlerCarCategary() }} >All Cars</button>
                                        <button className='categary-type mx-2' value="BMW" onClick={(e) => { handlerCarCategary(e.target.value) }}>BMW </button>
                                        <button className='categary-type mx-2' value="Honda" onClick={(e) => { handlerCarCategary(e.target.value) }}>Honda</button>
                                        <button className='categary-type mx-2' value="Maruti" onClick={(e) => { handlerCarCategary(e.target.value) }}>Maruti</button>
                                        <button className='categary-type mx-2' value="Mercedes" onClick={(e) => { handlerCarCategary(e.target.value) }}>Luxury</button>
                                        <button className='categary-type mx-2' value="Mercedes" onClick={(e) => { handlerCarCategary(e.target.value) }}>Luxury</button>
                                    </div>
                                    <hr />
                                    <div className='mainContaineInCar'>
                                        <div className='yourCar-filterbar-container'>
                                            <div className='car-seat-filter'>
                                                <h6>Car Seat</h6>
                                                {
                                                    carSeaterList.map((item, index) => {
                                                        return (
                                                            <div>

                                                                <CustomCheckBox>{item.title}</CustomCheckBox>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className='city-filter'>
                                                <h6>City</h6>
                                                {
                                                    cityFilter.map((item, index) => {
                                                        return (
                                                            <div>

                                                                <CustomCheckBox>{item.title}</CustomCheckBox>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>

                                        <div className=' text-white' id='main-sceen'>
                                            {
                                                carItems.length > 0 && (
                                                    <div className='item-list'>
                                                        {carItems.map((items, index) => (
                                                            <div className="mx-3  my-2 car-fram " id="car-fram"  >
                                                                < img src={AppConfig.BASE_URL + "carImage/" + items.image[0]} className="card-img-top" alt="..." />
                                                                <p >{items.carName}</p>
                                                                <div className='item-title'>
                                                                    <div className=''>
                                                                        <p>Exterior: {items.exteriorColor}</p>
                                                                        <p>Interior : {items.interiorColor}</p>
                                                                    </div>
                                                                    <div style={{ marginLeft: "0.1rem" }}>
                                                                        <p>Seats: {items.seats}</p>
                                                                        <p >City : {items.city}</p>
                                                                    </div>
                                                                </div>
                                                                <p style={{fontWeight:"bold"}}>Per Day Rate:  {items.schedule}₹</p>
                                                                <CustomButton onClick={(e) => { handlerOneCarDetails(items._id) }}> Rent It</CustomButton>
                                                            </div>
                                                        ))}

                                                    </div>
                                                )
                                            }



                                        </div>
                                    </div>
                                </div>
                            ) :
                            (
                                <div>
                                    <ServerError />
                                </div>
                            )
                    }

                </div>
            </div>

        </>
    )
}

export default CarsList;