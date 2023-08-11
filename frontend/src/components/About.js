import React from 'react'
import imageinja from "../img/inja.jpg"

export const About = () => {
    return (
        <>
            <div className="container emp-profile">
                <form >
                    <div className="row justify-content-center">
                        <div className="col-md-4 profile-image">
                            <img src={imageinja} alt="My Pic"/>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>Injamul Haque</h5>
                                <h6>MERN Developer</h6>
                                <p className="profile-ration mt-3 mb-5">RANKING: <span>1/10</span></p>
                                
                                <ul className="nav nav-tabs profile_tab">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Profile</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-4">
                        <div className="col-md-2">
                            <div className="profile-work">
                                <p>Work Link</p>
                                <a href="https://www.youtube.com/">Youtube</a><br/>
                                <a href="https://www.youtube.com/">Facebook</a><br/>
                                <a href="https://www.youtube.com/">Instagram</a><br/>
                                <a href="https://www.youtube.com/">LinkedIn</a><br/>
                                <a href="https://www.youtube.com/">Twitter</a>
                            </div>
                        </div>
                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label >User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>54654545456454</p>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label >Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Inja</p>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label >Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>email@email.com</p>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label >Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>5646544565</p>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label >Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>MERn Developer</p>
                                        </div>
                                    </div>
                                </div>



                                <div className="tab-pane fade " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label >User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>54654545456454</p>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label >Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Inja</p>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label >Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>email@email.com</p>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label >Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>5646544565</p>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label >Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>MERN Developer</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </>
    )
}
export default About