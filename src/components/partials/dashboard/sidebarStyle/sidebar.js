import React, {useState, useContext, useEffect} from 'react'
import { Link , useLocation} from 'react-router-dom'
import {Accordion, useAccordionButton, AccordionContext} from 'react-bootstrap'
import Scrollbar from 'smooth-scrollbar'

function CustomToggle({ children, eventKey, onClick }) {

   const { activeEventKey } = useContext(AccordionContext);

   const decoratedOnClick = useAccordionButton(eventKey, (active) => onClick({state: !active, eventKey: eventKey}));

   const isCurrentEventKey = activeEventKey === eventKey;
 
   return (
     <Link to="#" aria-expanded={isCurrentEventKey ? 'true' : 'false'} className="nav-link" role="button" onClick={(e) => {
       decoratedOnClick(isCurrentEventKey)
     }}>
       {children}
     </Link>
   );
 }
const Sidebar = () => { 
   useEffect(
      () =>{
          Scrollbar.init(document.querySelector('#sidebar-scrollbar'))
   })
   const [activeMenu, setActiveMenu] = useState(false)
   let location = useLocation();
      return (
         <>
            <div className="iq-sidebar">
               <div id="sidebar-scrollbar">
                  <nav className="iq-sidebar-menu">
                     <Accordion as="ul" id="iq-sidebar-toggle" className="iq-menu">
                        <li className={`${location.pathname === '/' ? 'active' : ''} `}>
                           <Link to="/" ><i className="las la-home"></i><span>Community</span></Link>
                        </li>

                        <Accordion.Item as="li" className={`${location.pathname === '/dashboard/blog/blog-grid' || location.pathname === '/dashboard/blog/blog-list' || location.pathname === '/dashboard/blog/blog-detail' ?  'active' : ''}`} eventKey="sidebar-blog"  >
                           <CustomToggle eventKey="sidebar-blog" onClick={(activeKey) => setActiveMenu(activeKey)}>
                                 <i className="lab la-blogger"></i>
                                 <span>Profile</span>
                                 <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                           </CustomToggle>
                           <Accordion.Collapse eventKey="sidebar-blog">
                              <ul id="blog" className="iq-submenu " >
                                 <li className={`${location.pathname === '/dashboard/blog/blog-grid' ? 'active' : ''}`}>
                                    <Link to="/dashboard/blog/blog-grid">
                                       <i className="ri-grid-line"></i>
                                       Friend List
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboard/blog/blog-list' ? 'active' : ''}`}>
                                    <Link to="/dashboard/blog/blog-list">
                                       <i className="ri-list-check-2"></i>Friends Follower
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboard/blog/blog-detail' ? 'active' : ''}`}>
                                    <Link to="/dashboard/blog/blog-detail">
                                       <i className="ri-information-line"></i>Group
                                    </Link>
                                 </li>
                                
                              </ul>
                           </Accordion.Collapse>
                        </Accordion.Item>
                        <Accordion.Item as="li" className={`${location.pathname === '/dashboard/blog/blog-grid' || location.pathname === '/dashboard/blog/blog-list' || location.pathname === '/dashboard/blog/blog-detail' ?  'active' : ''}`} eventKey="sidebar-event"  >
                           <CustomToggle eventKey="sidebar-event" onClick={(activeKey) => setActiveMenu(activeKey)}>
                                 <i className="lab la-blogger"></i>
                                 <span>Events</span>
                                 <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                           </CustomToggle>
                           <Accordion.Collapse eventKey="sidebar-event">
                              <ul id="blog" className="iq-submenu " >
                                 <li className={`${location.pathname === '/dashboard/blog/blog-grid' ? 'active' : ''}`}>
                                    <Link to="/dashboard/blog/blog-grid">
                                       <i className="ri-grid-line"></i>
                                       Calender
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboard/blog/blog-list' ? 'active' : ''}`}>
                                    <Link to="/dashboard/blog/blog-list">
                                       <i className="ri-list-check-2"></i>Birthday
                                    </Link>
                                 </li>
                             
                                
                              </ul>
                           </Accordion.Collapse>
                        </Accordion.Item>
                       
                      
                        <li className={`${location.pathname === '/dashboard/app/profile' ? 'active' : ''}`}>
                           <Link to="/dashboard/app/profile" ><i className="las la-user"></i><span>Market</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboards/app/friend-list' ? 'active' : ''}`}>
                           <Link to="/dashboards/app/friend-list" ><i className="las la-user-friends"></i><span>Signal</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboard/app/friend-profile' ? 'active' : ''}`}>
                           <Link to="/dashboard/app/friend-profile" ><i className="las la-user-friends"></i><span>WEBTRADER</span></Link>
                        </li>
                        {/* <Accordion.Item as="li" className={`${location.pathname === '/dashboard/blog/blog-grid' || location.pathname === '/dashboard/blog/blog-list' || location.pathname === '/dashboard/blog/blog-detail' ?  'active' : ''}`} eventKey="sidebar-blog"  >
                           <CustomToggle eventKey="sidebar-aboutus" onClick={(activeKey) => setActiveMenu(activeKey)}>
                                 <i className="lab la-blogger"></i>
                                 <span>ImTrader</span>
                                 <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                           </CustomToggle>
                           <Accordion.Collapse eventKey="sidebar-aboutus">
                              <ul id="blog" className="iq-submenu " >
                                 <li className={`${location.pathname === '/dashboard/blog/blog-grid' ? 'active' : ''}`}>
                                    <Link to="/dashboard/blog/blog-grid">
                                       <i className="ri-grid-line"></i>
                                       Rules
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboard/blog/blog-list' ? 'active' : ''}`}>
                                    <Link to="/dashboard/blog/blog-list">
                                       <i className="ri-list-check-2"></i>News
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboard/blog/blog-detail' ? 'active' : ''}`}>
                                    <Link to="/dashboard/blog/blog-detail">
                                       <i className="ri-information-line"></i>Invite
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboard/blog/blog-detail' ? 'active' : ''}`}>
                                    <Link to="/dashboard/blog/blog-detail">
                                       <i className="ri-information-line"></i>Ranking
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboard/blog/blog-detail' ? 'active' : ''}`}>
                                    <Link to="/dashboard/blog/blog-detail">
                                       <i className="ri-information-line"></i>Price
                                    </Link>
                                 </li>
                               
                              </ul>
                           </Accordion.Collapse>
                        </Accordion.Item> */}
                        <li className={`${location.pathname === '/dashboards/app/profile-images' ? 'active' : ''}`}>
                           <Link to="/dashboards/app/profile-images" ><i className="las la-image"></i><span>My-Image</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboards/app/aboutus' ? 'active' : ''}`}>
                           <Link to="/dashboards/app/aboutus" ><i class="las la-exclamation-circle"></i><span> About us</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboards/app/download' ? 'active' : ''}`}>
                           <Link to="/dashboards/app/download" ><i className="las la-download"></i><span> Download</span></Link>
                        </li>


                    
                        <li className={`${location.pathname === '/dashboards/app/profile-events' ? 'active' : ''}`}>
                           <Link to="/dashboards/app/profile-events" ><i className="las la-film"></i><span>Prize</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboard/app/profile-badges' ? 'active' : ''}`}>
                           <Link to="/dashboard/app/profile-badges" ><i className="las la-certificate"></i><span>Rules</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboard/app/profile-forum' ? 'active' : ''}`}>
                           <Link to="/dashboard/app/profile-forum" ><i className="lab la-wpforms"></i><span>News</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboard/app/notification' ? 'active' : ''}`}>
                           <Link to="/dashboard/app/notification" ><i className="las la-bell"></i><span>Notification</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboard/app/file' ? 'active' : ''}`}>
                           <Link to="/dashboard/app/file" ><i className="las la-file"></i><span>Ranking</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboard/app/friend-request' ? 'active' : ''}`}>
                           <Link to="/dashboard/app/friend-request" ><i className="las la-anchor"></i><span>Friend Follower</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboard/app/chat' ? 'active' : ''}`}>
                           <Link to="/dashboard/app/chat"><i className="lab la-rocketchat"></i><span>Fcoin</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboard/app/contactus' ? 'active' : ''}`}>
                           <Link to="/dashboard/app/contactus"><i class="las la-phone-volume"></i><span>Contact Us</span></Link>
                        </li>
                     
                     
                        
                        <Accordion.Item as="li" className={`${location.pathname === '/dashboard/blog/blog-grid' || location.pathname === '/dashboard/blog/blog-list' || location.pathname === '/dashboard/blog/blog-detail' ?  'active' : ''}`} eventKey="sidebar-blog"  >
                           <CustomToggle eventKey="sidebar-blog" onClick={(activeKey) => setActiveMenu(activeKey)}>
                                 <i className="lab la-blogger"></i>
                                 <span>More</span>
                                 <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                           </CustomToggle>
                           <Accordion.Collapse eventKey="sidebar-blog">
                              <ul id="blog" className="iq-submenu " >
                                 <li className={`${location.pathname === '/dashboard/blog/blog-grid' ? 'active' : ''}`}>
                                    <Link to="/dashboard/blog/blog-grid">
                                       <i className="ri-grid-line"></i>
                                       Connect Account
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboard/blog/blog-list' ? 'active' : ''}`}>
                                    <Link to="/dashboard/blog/blog-list">
                                       <i className="ri-list-check-2"></i>Be a Signal Provider
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboard/blog/blog-detail' ? 'active' : ''}`}>
                                    <Link to="/dashboard/blog/blog-detail">
                                       <i className="ri-information-line"></i>FollowSTAR
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboard/blog/blog-detail' ? 'active' : ''}`}>
                                    <Link to="/dashboard/blog/blog-detail">
                                       <i className="ri-information-line"></i>Download
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboard/blog/blog-detail' ? 'active' : ''}`}>
                                    <Link to="/dashboard/app/settings" >
                                       <i className="ri-information-line"></i>Settings
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboard/blog/blog-detail' ? 'active' : ''}`}>
                                    <Link to="/dashboard/blog/blog-detail">
                                       <i className="ri-information-line"></i>Logout
                                    </Link>
                                 </li>
                              </ul>
                           </Accordion.Collapse>
                        </Accordion.Item>
                       
                      
        
                        
                     </Accordion>
                  </nav>
                  <div className="p-5"></div>
               </div>
            </div>
         </>
   )
}

export default Sidebar
