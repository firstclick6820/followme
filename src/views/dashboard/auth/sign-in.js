import React,{useState} from 'react'
import { Login } from '../../../api/auth/login'
import {Row, Col, Container, Form, Button, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom'

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/components/navigation/navigation.scss';

//img

import login1 from '../../../assets/images/login/1.png'
import login2 from '../../../assets/images/login/2.png'
import login3 from '../../../assets/images/login/3.png'

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const SignIn = ()=>{ 
   const history = useHistory();
   const [signin,setSignin] = useState({
      Email:'',
      Password:''
   })
   const  checkEmail = (em)=> {
      var EMAIL_REGEXP = new RegExp('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$', 'i');
      if( EMAIL_REGEXP.test(em))return true;
      else{
         alert("Kindly provide Your Email ya arsa")
         return false;
      }
  }
  const sessionFunc =(data)=>{
  const {user_name,email,first_name,last_name,phone_no,date_of_birth,city,marital_status,age,country,state,address,url,profile_image} = data['Result'];

  for(let i  in data['Result']){
 localStorage.setItem(i,data['Result'][i])
  }
  history.push('/')
  
  
  }
   const handleClick = async ()=>{
      const {Email,Password}=signin;
      if(checkEmail(Email) && Email && Password !==''){
         await Login(signin).then(res => res.data['Result'] ==="Invalid Email or Password" ?
        alert('you have to sign up bro ')
          : sessionFunc(res.data)
         )  
      }    
      else return ;  
     
     
   }
   // const handleClick = async ()=>{
   //    const {Email,Password}=signin;
   //    if(checkEmail(Email) && Email && Password !==''){
   //       await Login(signin).then(res => console.log(res.data)  )  
   //    }    
   //    else return ;  
     
     
   // }
   return (
      <>
         <section className="sign-in-page">
            <div id="container-inside">
               <div id="circle-small"></div>
               <div id="circle-medium"></div>
               <div id="circle-large"></div>
               <div id="circle-xlarge"></div>
               <div id="circle-xxlarge"></div>
            </div>
            <Container className="p-0">
               <Row className="no-gutters">
                  <Col md="6" className="text-center pt-5">
                     <div className="sign-in-detail text-white">
                        {/* <Link className="sign-in-logo mb-5" to="#">
                           <Image src={logo} className="img-fluid" alt="logo"/>
                        </Link> */}
                        <div className="sign-slider overflow-hidden ">
                           <Swiper 
                              spaceBetween={30} 
                              centeredSlides={true} 
                              autoplay={{
                                 "delay": 2000,
                                 "disableOnInteraction": false }} 
                              className="list-inline m-0 p-0 ">
                              <SwiperSlide>
                                    <Image src={login1} className="img-fluid mb-4" alt="logo"/>
                                    <h4 className="mb-1 text-white">Find new friends</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                              </SwiperSlide>
                              <SwiperSlide>
                                    <Image src={login2} className="img-fluid mb-4" alt="logo"/> 
                                    <h4 className="mb-1 text-white">Connect with the world</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                              </SwiperSlide>
                              <SwiperSlide>
                                 <Image src={login3} className="img-fluid mb-4" alt="logo"/>
                                 <h4 className="mb-1 text-white">Create new events</h4>
                                 <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                              </SwiperSlide>
                           </Swiper>
                        </div>
                     </div>
                  </Col>

                  <Col md="6" className="bg-white pt-5 pt-5 pb-lg-0 pb-5">
                     <div className="sign-in-from">
                        <h1 className="mb-0">Sign in</h1>
                        <p>Enter your email address and password to access admin panel.</p>
                        <Form className="mt-4">
                           <Form.Group className="form-group">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="email" className="mb-0" id="exampleInputEmail1" placeholder="Enter email" onChange={(e)=>setSignin({
                                 ...signin,
                                 Email:e.target.value
                              })}/>
                           </Form.Group>
                           <Form.Group className="form-group">
                              <Form.Label>Password</Form.Label>
                              <Link to="/auth/forgetpassword" className="float-end">Forgot password?</Link>
                              <Form.Control type="password" className="mb-0" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>setSignin({
                                 ...signin,
                                 Password:e.target.value
                              })}/>
                           </Form.Group>
                           <div className="d-inline-block w-100">
                              <Form.Check className="d-inline-block mt-2 pt-1">
                                 <Form.Check.Input type="checkbox" className="me-2" id="customCheck11"/>
                                 <Form.Check.Label>Remember Me</Form.Check.Label>{' '}
                              </Form.Check>
                              <Button variant="primary" type="button"  className="float-end" onClick={() => handleClick()}>Sign in</Button>
                           </div>
                           <div className="sign-info">
                              <span className="dark-color d-inline-block line-height-2">Don't have an account? <Link to="/auth/sign-up">Sign up</Link></span>
                              <ul className="iq-social-media">
                                 <li><Link to="#"><i className="ri-facebook-box-line"></i></Link></li>
                                 <li><Link to="#"><i className="ri-twitter-line"></i></Link></li>
                                 <li><Link to="#"><i className="ri-instagram-line"></i></Link></li>
                              </ul>
                           </div>
                        </Form>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>   
      </>
   )
}

export default SignIn
