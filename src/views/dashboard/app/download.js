import React from 'react'
import { Row, Col, Container, Dropdown, Tooltip, OverlayTrigger } from 'react-bootstrap'
import Card from '../../../components/Card'
import { Link } from 'react-router-dom'


//profile-header
import ProfileHeader from '../../../components/profile-header'

////img
import gi1 from '../../../assets/images/page-img/gi-1.jpg'
import gi2 from '../../../assets/images/page-img/gi-2.jpg'
import gi3 from '../../../assets/images/page-img/gi-3.jpg'
import gi4 from '../../../assets/images/page-img/gi-4.jpg'
import gi5 from '../../../assets/images/page-img/gi-5.jpg'
import gi6 from '../../../assets/images/page-img/gi-6.jpg'
import gi7 from '../../../assets/images/page-img/gi-7.jpg'
import gi8 from '../../../assets/images/page-img/gi-8.jpg'
import gi9 from '../../../assets/images/page-img/gi-9.jpg'
import user05 from '../../../assets/images/user/05.jpg'
import user06 from '../../../assets/images/user/06.jpg'
import user07 from '../../../assets/images/user/07.jpg'
import user08 from '../../../assets/images/user/08.jpg'
import user09 from '../../../assets/images/user/09.jpg'
import user10 from '../../../assets/images/user/10.jpg'
import img1 from '../../../assets/images/page-img/profile-bg1.jpg'
import img2 from '../../../assets/images/page-img/profile-bg2.jpg'
import img3 from '../../../assets/images/page-img/profile-bg3.jpg'
import img4 from '../../../assets/images/page-img/profile-bg4.jpg'
import img5 from '../../../assets/images/page-img/profile-bg5.jpg'
import img6 from '../../../assets/images/page-img/profile-bg6.jpg'
import img7 from '../../../assets/images/page-img/profile-bg7.jpg'
import img9 from '../../../assets/images/page-img/profile-bg9.jpg'
import apple from '../../../assets/images/apple'
import and from '../../../assets/images/and.png'
import macos from '../../../assets/images/macos.png'
import windows from '../../../assets/images/windows.png'





const download =()=> {
    return(
      <>
          <ProfileHeader title="Download" img={img5} alt="jhjh"/>
              <div id="download-page" className="download-page">
                <Container>
                   
                        <h1 className="text-center">App</h1>
                    <div className="d-grid gap-1 d-grid-template-1fr-15 mt-4 mb-4">
                            <Card className="mb-0">
                               
                                <Card.Body className=" text-center d-flex flex-column justify-content-center align-items-center">
                                    <div>
                                    <img src={apple} className="img-fluid w-25 mb-3 mt-3" alt="group-bg"/>
                                    </div>
                                    <p>App Store</p>
                                   
                            
                                  
                                    <button type="submit" className="btn btn-secondary d-block w-50"style={{fontSize:"10px"}}>Download</button>
                                </Card.Body>
                            </Card>
                            <Card className="mb-0">
                               
                               <Card.Body className=" text-center d-flex flex-column justify-content-center align-items-center">
                                   <div>
                                   <img src={and} className="img-fluid w-25 mb-3 mt-3" alt="group-bg"/>
                                   </div>
                                   <p>Android</p>
                                
                                   <button type="submit" className="btn btn-secondary d-block w-50 mb-3 " style={{fontSize:"10px"}}>Android APK</button>
                                   <button type="submit" className="btn btn-secondary d-block w-50" style={{fontSize:"10px"}}>Google play</button>
                               </Card.Body>
                           </Card>
                         
                          
                      
                            

                            <Card className="mb-0">
                              <Card.Body className=" text-center d-flex flex-column justify-content-center align-items-center">
                                   <div>
                                   <img src={macos} className="img-fluid w-25 mb-3 mt-3" alt="group-bg"/>
                                   </div>
                                   <p>Mac OS</p>
                                   <button type="submit" className="btn btn-secondary d-block w-50"style={{fontSize:"10px"}}>Download</button>
                                </Card.Body>
                           </Card>
                           <Card className="mb-0">
                              <Card.Body className=" text-center d-flex flex-column justify-content-center align-items-center">
                                   <div>
                                   <img src={windows} className="img-fluid w-25 mb-3 mt-3" alt="group-bg"/>
                                   </div>
                                   <p>Windows</p>
                                   <button type="submit" className="btn btn-secondary d-block w-50"style={{fontSize:"10px"}}>Download</button>
                                </Card.Body>
                           </Card>
                           </div>
                   

                </Container>
                <Container>
                <h1 className="text-center">MT4</h1>
                    <div className="d-grid gap-1 d-grid-template-1fr-15 mt-4 mb-4">
                            <Card className="mb-0">
                               
                                <Card.Body className=" text-center d-flex flex-column justify-content-center align-items-center">
                                    <div>
                                    <img src={apple} className="img-fluid w-25 mb-3 mt-3" alt="group-bg"/>
                                    </div>
                                    <p>App Store</p>
                                   
                            
                                  
                                    <button type="submit" className="btn btn-secondary d-block w-50"style={{fontSize:"10px"}}>Download</button>
                                </Card.Body>
                            </Card>
                            <Card className="mb-0">
                               
                               <Card.Body className=" text-center d-flex flex-column justify-content-center align-items-center">
                                   <div>
                                   <img src={and} className="img-fluid w-25 mb-3 mt-3" alt="group-bg"/>
                                   </div>
                                   <p>Android</p>
                                   <button type="submit" className="btn btn-secondary d-block w-50"style={{fontSize:"10px"}}>Download</button>
                                   
                               </Card.Body>
                           </Card>
                         
                          
                      
                            

                            <Card className="mb-0">
                              <Card.Body className=" text-center d-flex flex-column justify-content-center align-items-center">
                                   <div>
                                   <img src={macos} className="img-fluid w-25 mb-3 mt-3" alt="group-bg"/>
                                   </div>
                                   <p>Mac OS</p>
                                   <button type="submit" className="btn btn-secondary d-block w-50"style={{fontSize:"10px"}}>Download</button>
                                </Card.Body>
                           </Card>
                           <Card className="mb-0">
                              <Card.Body className=" text-center d-flex flex-column justify-content-center align-items-center">
                                   <div>
                                   <img src={windows} className="img-fluid w-25 mb-3 mt-3" alt="group-bg"/>
                                   </div>
                                   <p>Windows</p>
                                   <button type="submit" className="btn btn-secondary d-block w-50"style={{fontSize:"10px"}}>Download</button>
                                </Card.Body>
                           </Card>
                           </div>

                </Container>
            </div>
    </>

    )
}
export default download