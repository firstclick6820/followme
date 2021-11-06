import React from 'react'
import { Row, Col, Container, Dropdown, Tooltip, OverlayTrigger } from 'react-bootstrap'
import Card from '../../../components/Card'



//profile-header
import ProfileHeader from '../../../components/profile-header'

////img

import img5 from '../../../assets/images/page-img/profile-bg4.jpg'
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
                                   
                            
                                  
                                    <button type="submit" className="btn btn-secondary d-block w-50 btn-soft-primary"style={{fontSize:"10px",border:"0" ,fontWeight:"600" }}>Download</button>
                                </Card.Body>
                            </Card>
                            <Card className="mb-0">
                               
                               <Card.Body className=" text-center d-flex flex-column justify-content-center align-items-center">
                                   <div>
                                   <img src={and} className="img-fluid w-25 mb-3 mt-3" alt="group-bg"/>
                                   </div>
                                   <p>Android</p>
                                
                                   <button type="submit" className="btn btn-secondary btn-soft-warning d-block w-50 mb-3 " style={{fontSize:"10px",border:"0",fontWeight:"600"}}>Android APK</button>
                                   <button type="submit" className="btn btn-secondary  btn-soft-danger d-block w-50" style={{fontSize:"10px" ,border:"0",fontWeight:"600" }}>Google play</button>
                               </Card.Body>
                           </Card>
                         
                          
                      
                            

                            <Card className="mb-0">
                              <Card.Body className=" text-center d-flex flex-column justify-content-center align-items-center">
                                   <div>
                                   <img src={macos} className="img-fluid w-25 mb-3 mt-3" alt="group-bg"/>
                                   </div>
                                   <p>Mac OS</p>
                                   <button type="submit" className="btn btn-secondary btn-soft-success d-block w-50"style={{fontSize:"10px" ,border:"0",fontWeight:"600" }}>Download</button>
                                </Card.Body>
                           </Card>
                           <Card className="mb-0">
                              <Card.Body className=" text-center d-flex flex-column justify-content-center align-items-center">
                                   <div>
                                   <img src={windows} className="img-fluid w-25 mb-3 mt-3" alt="group-bg"/>
                                   </div>
                                   <p>Windows</p>
                                   <button type="submit" className="btn btn-secondary btn-soft-info d-block w-50"style={{fontSize:"10px" ,border:"0",fontWeight:"600"}}>Download</button>
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
                                   
                            
                                  
                                    <button type="submit" className="btn btn-secondary btn-soft-danger d-block w-50"style={{fontSize:"10px" ,border:"0",fontWeight:"600"}}>Download</button>
                                </Card.Body>
                            </Card>
                            <Card className="mb-0">
                               
                               <Card.Body className=" text-center d-flex flex-column justify-content-center align-items-center">
                                   <div>
                                   <img src={and} className="img-fluid w-25 mb-3 mt-3" alt="group-bg"/>
                                   </div>
                                   <p>Android</p>
                                   <button type="submit" className="btn btn-secondary btn-soft-info d-block w-50"style={{fontSize:"10px" ,border:"0",fontWeight:"600"}}>Download</button>
                                   
                               </Card.Body>
                           </Card>
                         
                          
                      
                            

                            <Card className="mb-0">
                              <Card.Body className=" text-center d-flex flex-column justify-content-center align-items-center">
                                   <div>
                                   <img src={macos} className="img-fluid w-25 mb-3 mt-3" alt="group-bg"/>
                                   </div>
                                   <p>Mac OS</p>
                                   <button type="submit" className="btn btn-secondary btn-soft-warning d-block w-50"style={{fontSize:"10px" ,border:"0",fontWeight:"600" }}>Download</button>
                                </Card.Body>
                           </Card>
                           <Card className="mb-0">
                              <Card.Body className=" text-center d-flex flex-column justify-content-center align-items-center">
                                   <div>
                                   <img src={windows} className="img-fluid w-25 mb-3 mt-3" alt="group-bg"/>
                                   </div>
                                   <p>Windows</p>
                                   <button type="submit" className="btn btn-secondary btn-soft-success d-block w-50"style={{fontSize:"10px",border:"0",fontWeight:"600"}}>Download</button>
                                </Card.Body>
                           </Card>
                           </div>

                </Container>
            </div>
    </>

    )
}
export default download