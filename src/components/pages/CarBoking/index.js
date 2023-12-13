import { useEffect, useState } from 'react';
import './index.modul.css'
import FetchApi from '../../../constants/FetchApi';
import SideNavbar from '../../SideNavber';
const CarBoking = () => {


    const [carStatus, setCarStatus] = useState([])
    // const [carName, setCarName] = useState("")
    // const [myDate, setMyDate] = useState()
    const hanlarCarBookingStatus = async () => {

        const data = await FetchApi("car-booking-status", "", {
            method: "GET"
        })
        // console.log("my booking status === >", data)
        if (data && data.status === 200) {
            const bookingDetails = data.bookingDetails || [];
            setCarStatus(bookingDetails)
            // const mydate = bookingDetails.length >0 ?bookingDetails[1].date||"":""
            
            // setMyDate(myDates); // Set the array of dates in the state

        }
    }
    const isDataEmpty = !carStatus || carStatus.length === 0;
    // const bookDate = new Date(myDate).toLocaleDateString('en-US', {
    //     year: 'numeric',
    //     month: 'long',
    //     day: 'numeric'
    // });
    // console.log("my booking status here===>", bookDate);
    // console.log(carName)
    useEffect(() => {
        hanlarCarBookingStatus()
    }, [])
    return (
        <>
            <div className="d-flex body-main">
                <SideNavbar />
                <div className="main-rides"  >
                    <h3 className='trip-head'>My Trip</h3>
                    <div id='my-scroll' className='horizontal-scroll'   >
                        <div className='main-text' >
                            <div className='list-head'>
                                <h5 className='list-data'>Date</h5>
                                <h5 className='list-car'>Car</h5>
                                <h5 className='list-from'>From</h5>
                                <h5 className='list-crn'>CRN</h5>
                                <h5 className='list-km'>Km </h5>
                                <h5 className='list-total'>Total</h5>
                                <h5 className='list-status'>Status</h5>
                            </div>
                            {isDataEmpty ? (

                                <h3 className='not-status'>Looks like you haven't taken a trip yet.</h3>
                            ) : (
                                <ul>


                                    {carStatus.map((data, index) => {
                                        return (
                                            <div key={index}>

                                                <div className='item-frame'>
                                                    <table className='cb-table'>
                                                        <tr className='table-item'>
                                                            <td>{data.date.slice(0,10)}</td>
                                                            <td className='car-item'>  <img src="/image/caravatar.png" alt="" className='img-car' id='car-img' />{data.carName.slice(0, 8) + '...'}</td>
                                                            <td className='car-from'>
                                                                <i className="fas fa-map-marker mx-2"></i>
                                                                {data.from.slice(0, 10) + '...'}
                                                            </td>

                                                            <td className='car-phone'>{data.driveNO}</td>
                                                            <td className='car-km'>{data.package}</td>
                                                            <td className='car-total'>₹{data.totalPrice}</td>
                                                            <td> <span className='status-item'>successfully</span></td>
                                                        </tr>
                                                    </table>

                                                </div>

                                            </div>
                                        )
                                    })}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarBoking; 