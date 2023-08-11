import React, {useState} from 'react'
import signupimg from "../img/signupimg.png";
import { Link, useNavigate } from 'react-router-dom';

export const Signup = () => {
    const navigate = useNavigate ();

// get data from frontend filed
const [user, setUser] = useState({
    name:"", email:"", phone:"", work:"", password:"", cpassword:""
});

let name, value;
const handleInputs = (e)=>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});
}

// send data to backend
const postData = async (e)=>{
    e.preventDefault();
    const {name, email, phone, work, password, cpassword} = user;
    const res = await fetch("/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            name:name, email:email, phone:phone, work:work, password:password, cpassword:cpassword
        })
    });

    const data = await res.json();
    if (data.status === 422 || !data){
        window.alert("Unable to Register");
        console.log("Unable to Register");
        
    }else{
        window.alert("Registeration Successful");
        console.log("Registeration Successful");
        navigate("/login");
    }
}
    return (
        <>
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign Up</h2>
                            <form method="post" id="register-form" className="register-form">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i className="zmdi zmdi-account"></i>
                                    </label>
                                    <input type="text" name="name" onChange={handleInputs} value={user.name}  autoComplete='off' placeholder='Your Name' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email"></i>
                                    </label>
                                    <input type="text" name="email" onChange={handleInputs} value={user.email} autoComplete='off' placeholder='Your Email' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <i className="zmdi zmdi-phone"></i>
                                    </label>
                                    <input type="text" name="phone" onChange={handleInputs} value={user.phone} autoComplete='off' placeholder='Your Phone' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="work">
                                        <i className="zmdi zmdi-slideshow"></i>
                                    </label>
                                    <input type="text" name="work" onChange={handleInputs} value={user.work} autoComplete='off' placeholder='Your Profession' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-lock"></i>
                                    </label>
                                    <input type="text" name="password" onChange={handleInputs} value={user.password} autoComplete='off' placeholder='Your Password' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <i className="zmdi zmdi-lock"></i>
                                    </label>
                                    <input type="text" name="cpassword" onChange={handleInputs} value={user.cpassword} autoComplete='off' placeholder='Confirm Password' />
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" onClick={postData} value="Register" name="signup" id="signup" className="form-submit"/>
                                </div>

                            </form>
                        </div>
                        <div className="signup-image">
                            <figure>
                                <img src={signupimg} alt="Signup Pic" />
                            </figure>
                            <Link to="/login" className="signup-image-link">I am already registered</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Signup