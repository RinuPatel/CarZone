import { BrowserRouter  ,Route,Switch,Routes } from 'react-router-dom';
import './App.css';
import Register from './components/pages/Register';
import Header from './components/Header';
import Dashbord from './components/pages/Dashbord';
import CarsList from './components/pages/CarsList';
import Login from './components/pages/Login';
import CarDetails from './components/pages/CarDetails';
import CarBoking from './components/pages/CarBoking';
import BookingConfiem from './components/pages/BookingConfiem';
import ContactUs from './components/pages/ContactUs';
import PageLoader from './components/PageLoader';
import MyAccount from './components/pages/MyAccount';
import Updatepassword from './components/pages/Updatepassword';
import AboutUs from './components/pages/AboutUs';
import ServerError from './components/Errors/ServerError';



function App() {
  return (
  
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Dashbord />} />
        <Route path="/cars-list" element={<CarsList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/car-details" element={<CarDetails />}  />
        <Route path="/car-booking-status" element={<CarBoking />} />
        <Route path="/booking-confiem" element={<BookingConfiem/>}/>
        <Route path="/cantact-us" element={<ContactUs/>}/>
        <Route path="/my-account" element={<MyAccount/>}/>
        <Route path="/update-password" element={<Updatepassword/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/server-error" element={<ServerError/>}/>
        <Route path="/page-loader" element={<PageLoader/>}/>
        </Routes>
    </BrowserRouter>
//     <Router>
//       <Switch>
//        <Route path="/register">
//        <Register />
//        </Route>
//        <Route path="/">
//        <Dashbord />
//        </Route>
// \
//       </Switch>
//     </Router>

  );
}

export default App;
