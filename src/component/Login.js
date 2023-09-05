import React from "react";
import "./Login.css";
import Linklogo from "../images/LI-Logo.png";
import Discover from "../images/discover.png";
import People from "../images/people.png";
import Job from "../images/job.png";
import RightImg from "../images/linkein-main.png";


function Login() {
    return (
        <>
            <nav className="top-nav">
                <div className="link-logo">
                    <img src={Linklogo} alt="Linkedin Logo" />
                </div>
                <div className="nav-button">
                    <div className="icon">
                        <img src={Discover} alt="" />
                        <h6>Discover</h6>
                    </div>
                    <div className="icon">
                        <img src={People} alt="" />
                        <h6>People</h6>
                    </div>
                    <div className="icon">
                        <img src={Job} alt="" />
                        <h6>Job</h6>
                    </div>
                    <div className="icon job">
                        <img src={Job} alt="" />
                        <h6>Job</h6>
                    </div>
                    <div className="join">Join Now</div>
                    <div className="singin">Sing in</div>
                </div>
            </nav>
            <main className="main-manu">
                <div className="left-from">
                    <div className="from">
                        <h3>Join the biggest professional community</h3>
                        <div className="email">
                            <input type="text" placeholder="Email" />
                        </div>
                        <div>
                            <input type="text" placeholder="Password" />
                        </div>
                        <div className="privacy">
                            By clicking Agree & Join, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.
                        </div>
                        <div className="agre-join">Agree & Join</div>

                        <div className="already-account">Already on LinkedIn? <span>Sign in</span></div>
                    </div>
                </div>
                <div className="right-from">
                    <div>
                        <img src={RightImg} alt="" height={560} />
                    </div>
                </div>
            </main>
            <footer className="foter">
                <div className="footer-sec">
                    <div className="link-logo">
                        <img src={Linklogo} alt="Linkedin Logo" width={140} height={40} />
                    </div>
                    <div>
                        <ul>
                            <li>General</li>
                            <li>Sign Up</li>
                            <li>Help Center</li>
                            <li>About</li>
                            <li>Press</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Developers</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Browse LinkedIn</li>
                            <li>Learning</li>
                            <li>Jobs</li>
                            <li>Salary</li>
                            <li>Mobile</li>
                            <li>Services</li>
                            <li>Products</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Business Solutions</li>
                            <li>Talent</li>
                            <li>Marketing</li>
                            <li>Sales</li>
                            <li>Learning</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Directories</li>
                            <li>Members</li>

                            <li>Jobs</li>
                            <li>Companies</li>
                            <li>Featured</li>
                            <li>Posts</li>
                            <li>Articles</li>
                            <li>Schools</li>
                            <li>News</li>
                            <li>News Letters</li>
                            <li>Services</li>
                            <li>Products</li>
                            <li>Content Topics</li>
                        </ul>
                    </div>
                </div>

            </footer>
            <div id="div2">
                <label id="label7">Linked</label>
                <i class="fa fa-linkedin"></i>
                <label id="label8">&copy; 2020</label>
                <a id="a3" href="#">About</a>
                <a id="a3" href="#">Accessibility</a>
                <a id="a3" href="#">User Agreement</a>
                <a id="a3" href="#">Privacy Policy</a>
                <a id="a3" href="#">Cookie Policy</a>
                <a id="a3" href="#">Copyright Policy</a>
                <a id="a3" href="#">Brand Policy</a>
                <a id="a3" href="#">Guest Controls</a>
                <a id="a3" href="#">Community Guidelines </a>
            </div>
        </>
    );
}

export default Login;