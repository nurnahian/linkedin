import React from "react";
import "./style.css";
import "./mainbody.css";
import "./sidebar.css";
import "./activities.css";

function UserLogin() {
    return (
        <>
            {/* <!-- Nav bar header --> */}
            <div className="header" >
                <div className="header_left">
                    <img src={require('../images/download.png')} alt="no icon" />
                    <div className="search_box">
                        <i className="bi bi-search"></i>
                        <input type="text" className="search_input" value="Search" />
                    </div>
                </div>
                <div className="header_right">
                    <div className="nav_link ">
                        <div className="nav_icon">
                            <i className="bi bi-house-door-fill" ></i>
                        </div>
                        <div className="nav_text">Home</div>
                    </div>

                    <div className="nav_link network">
                        <div className="nav_icon">
                            <i className="bi bi-people-fill fon" ></i>
                        </div>
                        <div className="nav_text">My Network</div>
                    </div>

                    <div className="nav_link jobs">
                        <div className="nav_icon"><i className="bi bi-bag-fill fon"></i></div>
                        <div className="nav_text">Jobs</div>
                    </div>

                    <div className="nav_link">
                        <div className="nav_icon">
                            <div className="info">3</div>
                            <i className="bi bi-chat-dots-fill fon"></i>
                        </div>
                        <div className="nav_text">Messaging</div>
                    </div>

                    <div className="nav_link">
                        <div className="nav_icon">
                            <div className="info">3</div>
                            <i className="bi bi-bell-fill fon" ></i>
                        </div>
                        <div className="nav_text">Notifications</div>
                    </div>

                    <div className="header_right_2">
                        <div className="nav_link">
                            <div className="nav_icon">
                                <img src={require('../images/bd.png')} alt="non" style={{height:'30px',objectFit: 'contain',borderRadius:'50px'}} />
                                <div className="nav_text dropdown drop">

                                    <i className="bi bi-caret-down-fill dropdown fon"
                                        ></i>

                                </div>
                            </div>
                        </div>
                        <div className="nav_link" style={{borderLeft: '1px solid black'}}>
                            <div className="nav_icon">
                                <img src={require('../images/micro.png')} alt="non" style={{height:'25px',objectFit: 'contain'}} />
                                <div className="nav_text dropdown drop">

                                    <i className="bi bi-caret-down-fill dropdown"
                                        style={{fontSize:'1rem',float:'center'}}></i>

                                </div>
                            </div>
                        </div>
                        <div className="right_nav_text ">
                            Try Premium Free for 1 Month
                        </div>
                        <div className="small_screen">
                            <i className="bi bi-three-dots"></i>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mainbody">
                <div className="sidebar" style={{border:'none'}}>
                    <div className="sidebar_first_col">
                        <div className="profile_header" style={{borderRadius: '10px'}}></div>
                        <img src={require('../images/bd.png')}  alt="no icon" style={{height:'80px',width:'80px',borderRadius: '50%',border:'4px solid white',margin:'-35px auto 0 auto'}}/>

                        <div className="profile_info">
                            <p style={{textAlign: 'center'}} className="act_title">Nur Nahian</p>
                            <p className="account_name">CSE STUDENT || Bangladesh open University</p>
                        </div>

                        <div style={{border:'0.2px solid lightgrey'}}></div>
                        <div className="connections">
                            <span style={{float:'left'}} className="account_name">connections</span>
                            <span style={{float:'right'}}><a href="https://www.linkedin.com/" style={{color:'blue'}}>30</a></span>
                            <br />
                            <h6>Grow your network</h6>
                        </div>

                        <div className="sidebar_access">
                            <div className="account_name">Access exclusive tools and sights</div>
                            <a href="https://www.linkedin.com/"> Try premium for one month</a>
                        </div>
                        <div className="sidebar_footer">
                            <i className="bi bi-bookmark-fill"></i>
                            <div>My items</div>
                        </div>
                    </div>

                    <div className="sidebar_second_col">
                        <div className="sidebar_title">Recent</div>
                        <div className="recent">
                            <div className="sidebar_second_text"># Cricket bangladesh</div>
                        </div>
                        <div className="sidebar_title" style={{color:'blue'}}>Groups</div>


                        <div className="recent">
                            <div className="sidebar_second_text"><i className="bi bi-people-fill"
                                style={{marginRight:'10px',fontSize: 'medium'}}></i> Cricket</div>
                        </div>

                        <div className="sidebar_title" style={{color:'blue'}}>Followed Hashtags</div>
                        <div className="recent">
                            <div className="sidebar_second_text"># Prothom Alo</div>
                        </div>
                    </div>
                </div>

                <div className="posts">
                    <div className="post_box">
                        <div className="input">
                            <div className="input_text">
                                <img src={require('../images/bd.png')}  alt="no icon" className="profile" />
                                <input type="text" value="start a post" className="post_input" />
                            </div>
                            <div className="input_blocks">
                                <div className="input_option">
                                    <div className="option"><i className="bi bi-image" style={{color:'lightblue'}}></i> </div>
                                    <div className="option_text">Photo</div>
                                </div>
                                <div className="input_option">
                                    <div className="option"><i className="bi bi-play-btn-fill" style={{color:'lightgreen'}}></i> </div>
                                    <div className="option_text">Video</div>
                                </div>
                                <div className="input_option">
                                    <div className="option"><i className="bi bi-calendar-event" style={{color:'orange'}}></i> </div>
                                    <div className="option_text">Event</div>
                                </div>
                                <div className="input_option">
                                    <div className="option"><i className="bi bi-card-text" style={{color:'crimson'}}></i> </div>
                                    <div className="option_text">Write article</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="post_item">
                        <div className="post_item_header">
                            <div className="post_item_info">
                                <img src={require('../images/bd.png')} alt="no icon" style={{height:'60px'}} />
                                <div className="post_item_owner" style={{marginLeft:'8px'}}>
                                    <a href="https://www.linkedin.com/" className="act_title">Cricket bangladesh</a>
                                    <p className="account_name">792,456 Followers</p>
                                </div>
                            </div>
                            <i className="bi bi-three-dots" style={{padding:'5px'}}></i>
                        </div>

                        <div className="post_item_body_info">
                            <p style={{fontSize: '0.95rem'}}></p>
                        </div>
                        <img src={require('../images/team.jpg')} alt="noom" className="post_item_body_video" style={{width:'100%'}} />
                        <div className="post_item_footer">
                            <div className="footer_item">
                                <i className="bi bi-hand-thumbs-up"></i>
                                <div>Like</div>
                            </div>
                            <div className="footer_item">
                                <i className="bi bi-chat-text"></i>
                                <div>Comment</div>
                            </div>
                            <div className="footer_item">
                                <i className="bi bi-arrow-90deg-right"></i>
                                <div>Share</div>

                            </div>
                            <div className="footer_item">
                                <i className="bi bi-cursor-fill"></i>
                                <div>Send</div>
                            </div>
                        </div>
                    </div>

                    <div className="post_item">
                        <div className="post_item_header">
                            <div className="post_item_info">
                                <img src={require('../images/prothom.jpg')} alt="no icon" style={{height:'60px'}} />
                                <div className="post_item_owner" style={{marginLeft:'8px'}}>
                                    <a href="https://www.linkedin.com/" className="act_title">Prothom Alo</a>
                                    <p className="account_name">10 Million - Followers</p>
                                </div>
                            </div>
                            <i className="bi bi-three-dots" style={{padding:'5px'}}></i>
                        </div>
                        <div className="post_item_body_info">
                            <p style={{fontSize: '0.95rem'}}>Taskin Ahmed leads the way with a five wicket haul as Bangladesh bowl
                                out the hosts for 154 in the 3rd ODI at Centurion.
                                PHOTO CREDIT: Cricket South Africa
                                #BCB #Cricket #SAvBAN
                            </p>
                        </div>

                        <img src={require('../images/team.jpg')} alt="noom" className="post_item_body_video" style={{width:'100%'}} />

                        <div className="post_item_footer">
                            <div className="footer_item">
                                <i className="bi bi-hand-thumbs-up"></i>
                                <div>Like</div>
                            </div>
                            <div className="footer_item">
                                <i className="bi bi-chat-text"></i>
                                <div>Comment</div>
                            </div>
                            <div className="footer_item">
                                <i className="bi bi-arrow-90deg-right"></i>
                                <div>Share</div>

                            </div>
                            <div className="footer_item">

                                <i className="bi bi-cursor-fill"></i>
                                <div>Send</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="activity">
                    <div className="news">
                        <div className="news_head">
                            <div className="news_title">Linkedln News</div>
                            <i className="bi bi-info-square-fill" style={{fontSize:'15px'}}></i>
                        </div>
                        <br />

                        <div className="new_list">
                            <div className="act_title" style={{display: 'flex',flexDirection: 'row',alignItems: 'flex-start'}}>
                                <i className="bi bi-record-fill"
                                    style={{fontSize:'14px',marginRight:'10px',display:'block',marginTop:'5px'}}></i>
                                Bangladesh News To-Day
                            </div>
                        </div>
                    </div>


                    <div className="news">
                        <div className="news_head">
                            <div className="news_title act_title">Add to your feed</div>
                            <i className="bi bi-info-square-fill" style={{fontSize:'15px'}}></i>
                        </div>
                        <br />
                        <div className="account_feed">
                            <img src={require('../images/download.png')} alt="no icon" className="account_picture" />
                            <div className="account_info">
                                <h4 className="act_title">Linkedln</h4>
                                <p className="account_name">Company - internet</p>

                                <div className="follow">
                                    + Follow
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                        About
                        <div>Linked
                            <i className="fa fa-linkedin"></i> LinkedIn Corporation © 2022
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default UserLogin
