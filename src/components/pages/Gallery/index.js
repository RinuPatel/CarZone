import "./GalleryCss.css";
import { Link } from 'react-router-dom';
import '../../pages/GelleryImage/All/AllCss.css'

export default function Gallery() {
    return (
        <>

            <div className="gallery">

                <div className="bgImage">
                    <ul>
                        <h2>Gallary</h2>
                        <Link to="/">Home </Link> <Link to="/Gallery">/Gallery</Link>
                    </ul>


                </div>
                <div className="header">
                    <ul>
                        <Link to="/all">All</Link>
                        <Link to="/MarutiSuzuki">Maruti Suzuki</Link>
                        <Link to="/honda">Honda</Link>
                        <Link to="/Mahindra">Mahindra</Link>
                        <Link to="/Tata">Tata</Link>
                        {/* <Link to="/Toyota">Toyota</Link> */}


                    </ul>


                </div>

            </div>
            {/* <All/> */}
            {/* <div className="All">

                <div className="header">
                    
                </div>

                <div className="images">
                    <div className="subCar1"></div>
                    <div className="subCar2">
                        <img src="car/c1.webp" alt="sdf" />
                    </div>
                    <div className="subCar3"></div>

                </div>


                <div className="images1">
                    <div className="subCar4"></div>
                    <div className="subCar5"></div>
                    <div className="subCar6"></div>

                </div>
            </div>
 */}

        </>
    )
}