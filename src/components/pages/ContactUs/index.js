import { useState } from 'react'
import './contatc.css'
import emailValidation from '../../../utils/emailValidation'
import FetchApi from '../../../constants/FetchApi'
import SuccessPopup from '../../Success'

const ContactUs = () => {
    const [fname, setFname] = useState()
    const [fnameError, setFnameError] = useState()
    const [lname, setlname] = useState()
    const [lnameError, setLnameError] = useState()
    const [email, setEmail] = useState()
    const [emailError, setEmailError] = useState()
    const [message, setMessage] = useState()
    const [messageError, setMessageError] = useState()
    const [need,setNeed] = useState()
    const [showSuccess,setShowSuccess] = useState(false)

    let isAllData = true
    const fnameVal = (e) => {
        const value = e.target.value;
        if (value) {
            setFname(value)
            setFnameError("");
        }
    }
    const lnameVal = (e) => {
        const value = e.target.value;
        if (value) {
            setlname(value)
            setLnameError("")
        }
    }
    const emailVal = (e) => {
        const value = e.target.value;
        if (value) {
            setEmail(value)
            setEmailError("")
        }
    }
    const messageVal = (e) => {
        const value = e.target.value;
        if (value) {
            setMessage(value)
            setMessageError("")
        }
    }
    const handlerContactUs = async (e) => {
        e.preventDefault()

        if (fname) {
            setFnameError("")
        } else {
            setFnameError("Please enter your first name")
            isAllData = false
        }
        if (lname) {
            setLnameError("")
        } else {
            setLnameError("Please enter your last name");
            isAllData = false
        } if (!email) {
            setEmailError("Please enter your email")
            isAllData = false
        } else if (email && emailValidation(email)) {
            setEmailError("")
        } else {
            setEmailError("format is invalid")
            isAllData = false
        }if(message){
            setMessageError("")
        }else{
            setMessageError("Please fill tha field")
            isAllData = false
        }
        if(isAllData===true){

            const contactData = {
                fname:fname,
                lname:lname,
                email:email,
                need:need?need:"",
                message:message    
            }
            const data = await FetchApi("conatct-us",contactData,{
                method:"POST"
            })
            if(data.status === 200){
              
                setShowSuccess(true)
                setTimeout(() => {
                    setShowSuccess(false)
                }, 1500);
                setFname("")
                setlname("")
                setEmail("")
                setMessage("")
                setNeed("")
            }
            console.log("my contact data",data);
        }

    }
    return (
        <>
            {showSuccess && (

            <SuccessPopup/>
            )}
            <div class='container contant-main' >
                {/* <center></center> */}
                <div class="container">
                    <p style={{ textAlign: "center" }}>If you have any query related website or anything else, you can contact us via filling the contact us form.</p>
                    <div class=" ">
                        <div class="col-lg-8 mx-auto " >
                            <div class="card mt-4 mx-auto p-4  bg-light" >
                                <div class="card-body bg-light mx-4">
                                    <div class="container">

                                        <form id="contact-form" role="form" >

                                            <h2 style={{ textAlign: "center" }}>Contact Us</h2>

                                            <div class="controls">

                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="form_name">Firstname *</label>
                                                            <input id="form_name"
                                                                type="text"
                                                                name="name"
                                                                class="form-control"
                                                                placeholder="Please enter your firstname *"
                                                                onChange={fnameVal}
                                                                value={fname}
                                                            />

                                                        </div>
                                                        <span style={{ color: "red" }}>

                                                            {fnameError}
                                                        </span>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="form_lastname">Lastname *</label>
                                                            <input id="form_lastname"
                                                                type="text"
                                                                name="surname"
                                                                class="form-control"
                                                                placeholder="Please enter your lastname *"
                                                                onChange={lnameVal}
                                                                value={lname}
                                                            />
                                                        </div>
                                                        <span style={{ color: "red" }}>

                                                            {lnameError}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="form_email">Email *</label>
                                                            <input
                                                                type="text"

                                                                class="form-control"
                                                                placeholder="Please enter your email *"
                                                                onChange={emailVal}
                                                                value={email}
                                                            />

                                                        </div>
                                                        <span style={{ color: "red" }}>

                                                            {emailError}
                                                        </span>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="form_need">Please specify your need *(optional)</label>
                                                            <select id="form_need" name="need" class="form-control" onChange={(e)=>{setNeed(e.target.value)}} value={need}>
                                                                <option value="" selected disabled>--Select Your Issue--</option>
                                                                <option >Request issue</option>
                                                                <option >Response status</option>
                                                                <option >Other</option>
                                                            </select>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label for="form_message">Message *</label>
                                                            <textarea id="form_message"
                                                                name="message"
                                                                class="form-control"
                                                                placeholder="Write your message here."
                                                                rows="4"
                                                                onChange={messageVal}
                                                                value={message}
                                                            ></textarea
                                                            >
                                                        </div>
                                                        <span style={{ color: "red" }}>
                                                            {messageError}
                                                        </span>
                                                    </div>


                                                    <div class="col-md-12">
                                                        <button className='btn-submit' onClick={handlerContactUs}>Submit</button>
                                                    </div>

                                                </div>


                                            </div>
                                        </form>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactUs; 