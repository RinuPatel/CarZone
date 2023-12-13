import { useEffect, useState } from 'react';
import './index.mudel.css'
import FetchApi from '../../../constants/FetchApi';
import AppConfig from '../../../constants/AppConfig';
import CustomButton from '../../Element/CustomButton';
import pageLoader from '../../PageLoader';
import ServerError from '../../Errors/ServerError';

const CarsList = (props) => {
    const MY_DOMAIN = AppConfig.SUB_DOMAIN;
    const [catearyName, setCatearyName] = useState()
    const [carItems, setCarItems] = useState([])
    const [isActive, setIsActive] = useState(false);

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

                                    <div className=' text-white' id='main-sceen'>
                                        {

                                            carItems.length > 0 && (
                                                <div className='item-list'>
                                                    {carItems.map((items, index) => (
                                                        <div className="mx-3  my-2 car-fram " id="car-fram"  >

                                                            < img src={"http://localhost:8000/carImage/" + items.image[0]} className="card-img-top" alt="..." />
                                                            <p >{items.carName}</p>
                                                            <div className='item-title'>
                                                                <div>

                                                                </div>
                                                                <div className=''>

                                                                    <p>Exterior: {items.exteriorColor}</p>
                                                                    <p>Interior : {items.interiorColor}</p>
                                                                </div>
                                                                <div style={{ marginLeft: "0.1rem" }}>
                                                                    <p>Transmission: {items.trasmission}</p>
                                                                    <p >City : {items.city}</p>

                                                                </div>
                                                            </div>
                                                            <p> {items.schedule}</p>
                                                            <CustomButton onClick={(e) => { handlerOneCarDetails(items._id) }}> Rent It</CustomButton>

                                                        </div>
                                                    ))}

                                                </div>
                                            )
                                        }



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