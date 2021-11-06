import React from 'react'
import { Row, Col, Container, Dropdown, Tooltip, OverlayTrigger } from 'react-bootstrap'
import Card from '../../../components/Card'



//profile-header
import ProfileHeader from '../../../components/profile-header'

////img

import img5 from '../../../assets/images/page-img/profile-bg3.jpg'
import address from '../../../assets/images/address.png'
import corporation from '../../../assets/images/corporation.png'
import feedback from '../../../assets/images/feedback.png'
import windows from '../../../assets/images/windows.png'





const contactus =()=> {
    return(
      <>
          <ProfileHeader title="Contact Us" img={img5} alt="jhjh"/>
              <div id="contactus-page " className="contactus-page">
                <Container>
                
                    <div className="d-grid gap-1 d-grid-template-1fr-15 mt-4 mb-4">
                            <Card className="mb-0">
                               
                                <Card.Body className=" text-center d-flex flex-column justify-content-center align-items-center">
                                    <div>
                                    <img src={address} className="img-fluid w-50 mb-3 mt-3" alt="group-bg"/>
                                    </div>
                                    <p style={{fontWeight:"600",color:"black",fontSize:"16px"}}>Address</p>
                                   
                                    <p>38 Bridge Dr.
                                    Lewis Center, OH 43035 
                        
                                    9283 6th Avenue
                                    Rochester, NY 14606 

                                    7609 Pawnee Dr.
                                    Lake In The Hills, IL 60156</p>
                                </Card.Body>
                            </Card>
                            <Card className="mb-0">
                               <Card.Body className=" text-center d-flex flex-column justify-content-center align-items-center">
                                   <div>
                                   <img src={corporation} className="img-fluid w-50 mb-3 mt-3" alt="group-bg"/>
                                   </div>
                                   <p style={{fontWeight:"600",color:"black",fontSize:"16px"}}>Cooperation</p>
                                   <p>Advertising Cooperation / Ads Cooperation
                                    
                                    Business Cooperation
                                    info@bluebridge.com</p>
                                  
                               </Card.Body>
                            </Card>
                            <Card className="mb-0">
                              <Card.Body className=" text-center d-flex flex-column justify-content-center align-items-center">
                                   <div>
                                   <img src={feedback} className="img-fluid w-50 mb-3 mt-3" alt="group-bg"/>
                                   </div>
                                   <p style={{fontWeight:"600",color:"black",fontSize:"16px"}}>Feedback</p>
                                   <p>Suggestions
                                    support@bluebridge.com
                                    <br />
                                    <br />
                                    <br /> </p>
                               
                                </Card.Body>
                           </Card>
                          
                           </div>

                </Container>
            </div>
    </>

    )
}
export default contactus