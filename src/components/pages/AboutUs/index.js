import Footer from '../../Footer'
import './aboutUs.css'


const AboutUs = () => {

    return (
        <>
            <div className='w-100  about-screen'>

                <div className=' about-us'>
                    <h3>About us</h3>
                    <div className='first-car'>
                        <div className='img'>
                            <img src="about-.jpg" alt="" />
                        </div>
                        <div className='first-car-lines'>
                            <h4>Welcome to Our GoCarRatanls</h4>
                            <p>Hello Welcome to GoCarRantals We take pride in providing exceptional car rental services that cater to
                                all your transportation needs.</p>
                            <p>At GoCarRantals, we understand the importance of a seamless travel experience. With our
                                diverse fleet of well-maintained vehicles, you can choose the perfect ride for your journey.</p>
                            <p>Our team of dedicated professionals is committed to delivering top-notch customer service. From the moment
                                you contact us to the end of your rental, we're here to assist you every step of the way.</p>
                        </div>
                    </div>
                </div>
                <div className='second-car-screen'>
                    <div className='car-lines'>
                        <p>Safety and comfort are our priorities. Our vehicles undergo rigorous inspections to ensure they meet the highest
                            industry standards, giving you peace of mind during your travels.</p>
                        <p>Whether you're planning a family vacation, a business trip, or just need a temporary set of wheels, GoCarRantals
                            has the ideal solution for you.</p>
                        <p>We believe in transparency and fair pricing. With no hidden fees and competitive rates, you can trust us to offer
                            a budget-friendly rental experience.</p>
                        {/* <p>GoCarRantals is more than just a rental agency; we're your travel companion. Let us be a part 
                                 of your journey, making memories that last a lifetime.</p> */}
                    </div>
                    <div className='cars-img ' >
                        <img src="car1.jpeg" alt="" />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default AboutUs