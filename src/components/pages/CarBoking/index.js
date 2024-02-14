import { useEffect, useState } from 'react';
import './index.modul.css'
import FetchApi from '../../../constants/FetchApi';
import SideNavbar from '../../SideNavber';
const CarBoking = () => {


    const [carStatus, setCarStatus] = useState([])
    const hanlarCarBookingStatus = async () => {

        const data = await FetchApi("car-booking-status", "", {
            method: "GET"
        })

        if (data && data.status === 200) {
            const bookingDetails = data.bookingDetails || [];
            setCarStatus(bookingDetails)
        }
    }
    const isDataEmpty = !carStatus || carStatus.length === 0;

    function formatDate(date) {
        const day = date.getDate();
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear().toString().slice(-2);

        return `${day}-${month}-${year}`;
    }

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
                                {/* <h5 className='list-km'>Km </h5> */}
                                <h5 className='list-total'>Total</h5>
                                <h5 className='list-status'>Status</h5>
                            </div>
                            {isDataEmpty ? (

                                <h3 className='not-status'>Looks like you haven't taken a trip yet.</h3>
                            ) : (
                                <ul>


                                    {carStatus && carStatus.length > 0 && carStatus.sort((a, b) => {
                                        // const dataComparision = new Date(b.pickupDate) - new Date(a.pickupDate)
                                        // if (dataComparision !== 0) {
                                        //     return dataComparision
                                        // } else {
                                        //     console.log("date ==>", b.pickupTime);
                                        //     return new Date(`${b.pickupDate} ${b.pickupTime}`) - new Date(`${a.pickupDate} ${a.pickupTime}`);


                                        // }
                                        // const dateTimeA = `${b.pickupDate} ${a.pickupDate}`;
                                        // const dateTimeB = `${a.pickupTime} ${b.pickupTime}`;
                                        // return new Date(dateTimeA) , new Date(dateTimeB);

                                       return b.pickupDate.localeCompare(a.pickupDate)||b.pickupTime.localeCompare(a.pickupTime)
                                    }).map((data, index) => {
                                        return (
                                            <div key={index}>

                                                <div className='item-frame'>
                                                    <table className='cb-table'>
                                                        <tr className='table-item'>
                                                            <td>{formatDate(new Date(data.pickupDate))}</td>
                                                            <td className='car-item'>  <img src="/image/caravatar.png" alt="" className='img-car' id='car-img' />{data.carName.slice(0, 8) + '...'}</td>
                                                            <td className='car-from'>
                                                                <i className="fas fa-map-marker mx-2"></i>
                                                                {data.from.slice(0, 10) + '...'}

                                                            </td>

                                                            <td className='car-phone'>{data.driveNO}</td>
                                                            <td className='car-km'>{data.package}</td>
                                                            <td className='car-total'>₹{data.totalPrice}</td>
                                                            <td> {data.status === 'Accepted' ?
                                                                (<span className='status-item'>success</span>)
                                                                : data.status === 'Cencel' ?
                                                                    (<span className='status-cencal'>Cencal</span>)
                                                                    : (<span className='status-item'>Proccess</span>)
                                                            }</td>
                                                            <td>{data.pickupTime}</td>
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