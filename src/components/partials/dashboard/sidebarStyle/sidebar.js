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
                           <i className="lar la-user"></i>
                                 <span>Profile</span>
                                 <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                           </CustomToggle>
                           <Accordion.Collapse eventKey="sidebar-blog">
                              <ul id="blog" className="iq-submenu " >
                                 <li className={`${location.pathname === '/dashboard/blog/blog-grid' ? 'active' : ''}`}>
                                    <Link to="#/dashboard/blog/blog-grid">
                                    <i class="lar la-list-alt"></i>
                                       Friend List
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboard/blog/blog-list' ? 'active' : ''}`}>
                                    <Link to="#/dashboard/blog/blog-list">
                                    <i className="las la-user-plus"></i>Friends Follower
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboard/blog/blog-detail' ? 'active' : ''}`}>
                                    <Link to="#/dashboard/blog/blog-detail">
                                    <i class="las la-users"></i>Group
                                    </Link>
                                 </li>
                                
                              </ul>
                           </Accordion.Collapse>
                        </Accordion.Item>
                        <Accordion.Item as="li" className={`${location.pathname === '/dashboard/blog/blog-grid' || location.pathname === '/dashboard/blog/blog-list' || location.pathname === '/dashboard/blog/blog-detail' ?  'active' : ''}`} eventKey="sidebar-event"  >
                           <CustomToggle eventKey="sidebar-event" onClick={(activeKey) => setActiveMenu(activeKey)}>
                           <i class="las la-calendar-day"></i>
                                 <span>Events</span>
                                 <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                           </CustomToggle>
                           <Accordion.Collapse eventKey="sidebar-event">
                              <ul id="blog" className="iq-submenu " >
                                 <li className={`${location.pathname === '/dashboard/blog/blog-grid' ? 'active' : ''}`}>
                                    <Link to="#/dashboard/blog/blog-grid">
                                    <i class="lar la-calendar"></i>
                                       Calender
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboard/blog/blog-list' ? 'active' : ''}`}>
                                    <Link to="#/dashboard/blog/blog-list">
                                    <i class="las la-birthday-cake"></i>Birthday
                                    </Link>
                                 </li>
                             
                                
                              </ul>
                           </Accordion.Collapse>
                        </Accordion.Item>
                       
                      
                        <li className={`${location.pathname === '/dashboard/app/profile' ? 'active' : ''}`}>
                           <Link to="#/dashboard/app/profile" ><i class="las la-store-alt"></i><span>Market</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboards/app/friend-list' ? 'active' : ''}`}>
                           <Link to="#/dashboards/app/friend-list" ><i class="las la-signal"></i><span>Signal</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboard/app/friend-profile' ? 'active' : ''}`}>
                           <Link to="#/dashboard/app/friend-profile" ><i className="las la-user-friends"></i><span>WEBTRADER</span></Link>
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
                           <Link to="#/dashboards/app/profile-images" ><i class="las la-camera-retro"></i><span>My-Image</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboards/app/aboutus' ? 'active' : ''}`}>
                           <Link to="/dashboards/app/aboutus" ><i class="las la-exclamation-circle"></i><span> About us</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboards/app/download' ? 'active' : ''}`}>
                           <Link to="/dashboards/app/download" ><i className="las la-download"></i><span> Download</span></Link>
                        </li>


                    
                        <li className={`${location.pathname === '/dashboards/app/profile-events' ? 'active' : ''}`}>
                           <Link to="#/dashboards/app/profile-events" ><i class="las la-trophy"></i><span>Prize</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboard/app/profile-badges' ? 'active' : ''}`}>
                           <Link to="#/dashboard/app/profile-badges" ><i class="las la-clipboard-list"></i><span>Rules</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboard/app/profile-forum' ? 'active' : ''}`}>
                           <Link to="#/dashboard/app/profile-forum" ><i class="las la-newspaper"></i><span>News</span></Link>
                        </li>
                        <li className={`${location.pathname === '#/dashboard/app/notification' ? 'active' : ''}`}>
                           <Link to="#/dashboard/app/notification" ><i className="las la-bell"></i><span>Notification</span></Link>
                        </li>
                        <li className={`${location.pathname === '#/dashboard/app/file' ? 'active' : ''}`}>
                           <Link to="#/dashboard/app/file" ><i class="las la-list-ol"></i><span>Ranking</span></Link>
                        </li>
                        <li className={`${location.pathname === '#/dashboard/app/friend-request' ? 'active' : ''}`}>
                           <Link to="#/dashboard/app/friend-request" ><i className="las la-user-plus"></i><span>Friend Follower</span></Link>
                        </li>
                        <li className={`${location.pathname === '#/dashboard/app/chat' ? 'active' : ''}`}>
                           <Link to="#/dashboard/app/chat"><i class="las la-coins"></i><span>Fcoin</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboard/app/contactus' ? 'active' : ''}`}>
                           <Link to="/dashboard/app/contactus"><i class="las la-phone-volume"></i><span>Contact Us</span></Link>
                        </li>
                     
                     
                        
                        <Accordion.Item as="li" className={`${location.pathname === '/dashboard/blog/blog-grid' || location.pathname === '/dashboard/blog/blog-list' || location.pathname === '/dashboard/blog/blog-detail' ?  'active' : ''}`} eventKey="sidebar-blog"  >
                           <CustomToggle eventKey="sidebar-blog" onClick={(activeKey) => setActiveMenu(activeKey)}>
                           <i class="las la-angle-double-right"></i>
                                 <span>More</span>
                                 <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                           </CustomToggle>
                           <Accordion.Collapse eventKey="sidebar-blog">
                              <ul id="blog" className="iq-submenu " >
                                 <li className={`${location.pathname === '/dashboard/blog/blog-grid' ? 'active' : ''}`}>
                                    <Link to="#/dashboard/blog/blog-grid">
                                    <i class="las la-user-plus"></i>
                                       Connect Account
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboard/blog/blog-list' ? 'active' : ''}`}>
                                    <Link to="#/dashboard/blog/blog-list">
                                    <i class="las la-people-carry"></i>Be a Signal Provider
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboard/blog/blog-detail' ? 'active' : ''}`}>
                                    <Link to="#/dashboard/blog/blog-detail">
                                    <i class="lar la-star"></i>FollowSTAR
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboard/app/download' ? 'active' : ''}`}>
                                    <Link to="/dashboards/app/download">
                                    <i class="las la-download"></i>Download
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboard/blog/blog-detail' ? 'active' : ''}`}>
                                    <Link to="/dashboard/app/settings" >
                                    <i class="las la-cog"></i>Settings
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboard/blog/blog-detail' ? 'active' : ''}`}>
                                    <Link to="/auth/sign-in">
                                    <i class="las la-sign-out-alt"></i>Logout
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
