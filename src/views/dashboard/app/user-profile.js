import React, {useState,useEffect}  from 'react'
import {Row, Col, Container, Dropdown, Nav, Tab, Button, Modal } from 'react-bootstrap'
import Card from '../../../components/Card'
import CustomToggle from '../../../components/dropdowns'
import ShareOffcanvas from '../../../components/share-offcanvas'
import {Link} from 'react-router-dom'
import axios from "axios";
import { postCreatePost,getGetPostsByUserId,postComment,postCommentReply,getLikePost,getUnLikePost } from '../../../api/post/post'
// images

import img1 from '../../../assets/images/page-img/profile-bg1.jpg'
import img2 from '../../../assets/images/user/11.png'
import img3 from '../../../assets/images/icon/08.png'
import img4 from '../../../assets/images/icon/09.png'
import img5 from '../../../assets/images/icon/10.png'
import img6 from '../../../assets/images/icon/11.png'
import img7 from '../../../assets/images/icon/12.png'
import img8 from '../../../assets/images/icon/13.png'
import img9 from '../../../assets/images/page-img/07.jpg'
import img10 from '../../../assets/images/page-img/06.jpg'
import user1 from '../../../assets/images/user/1.jpg'
import user05 from '../../../assets/images/user/05.jpg'
import user06 from '../../../assets/images/user/06.jpg'
import user07 from '../../../assets/images/user/07.jpg'
import user08 from '../../../assets/images/user/08.jpg'
import user09 from '../../../assets/images/user/09.jpg'
import user10 from '../../../assets/images/user/10.jpg'

import icon1 from '../../../assets/images/icon/01.png'
import icon2 from '../../../assets/images/icon/02.png'
import icon3 from '../../../assets/images/icon/03.png'
import icon4 from '../../../assets/images/icon/04.png'
import icon5 from '../../../assets/images/icon/05.png'
import icon6 from '../../../assets/images/icon/06.png'
import icon7 from '../../../assets/images/icon/07.png'
import g1 from '../../../assets/images/page-img/g1.jpg'
import g2 from '../../../assets/images/page-img/g2.jpg'
import g3 from '../../../assets/images/page-img/g3.jpg'
import g4 from '../../../assets/images/page-img/g4.jpg'
import g5 from '../../../assets/images/page-img/g5.jpg'
import g6 from '../../../assets/images/page-img/g6.jpg'
import g7 from '../../../assets/images/page-img/g7.jpg'
import g8 from '../../../assets/images/page-img/g8.jpg'
import g9 from '../../../assets/images/page-img/g9.jpg'
import loader from '../../../assets/images/page-img/page-load-loader.gif'
import small07 from '../../../assets/images/small/07.png'
import small08 from '../../../assets/images/small/08.png'
import small09 from '../../../assets/images/small/09.png'
import small1 from '../../../assets/images/small/07.png'
import small2 from '../../../assets/images/small/08.png'
import small3 from '../../../assets/images/small/09.png'
import small4 from '../../../assets/images/small/10.png'
import small5 from '../../../assets/images/small/11.png'
import small6 from '../../../assets/images/small/12.png'
import small7 from '../../../assets/images/small/13.png'
import small8 from '../../../assets/images/small/14.png'
import user9 from '../../../assets/images/user/1.jpg'
import { val } from 'dom7'


const UserProfile =() =>{
   const [Post_Id,setPost_Id]=useState(0)
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const [allPost,setAllPost] = useState([])
 




   const [iscomment,setIsComment] = useState(false);
  const [isliked,setIsliked] =useState(false)
   
  


   const [text,setText]=useState('')
 /////////////////
   const [post,setPost] = useState({
       Text: "raza and ,mostafa = love",
       Visibility: 1,
       Location: "internet city",
       ImageUrls: "no problem",
       UserTagId: [
         2
       ]
     })
     const [commentorreply ,setCommentorReply] = useState({
        Text:'',
        Post_Id:0,
        ParentComment_Id:0
     })
 
     const getlikes = async(id)=>{
      setPost_Id(id)
      const token = sessionStorage.getItem('Token')
      setIsliked(!isliked)
      if(isliked==false)
      {
 
      await getLikePost({id,token}).then(res=>res.data['Result']).catch(err => alert("there is no likes"))
      }else{
       
      await getUnLikePost({id,token}).then(res=>res.data['Result']).catch(err => alert("there is no likes"))
      }
      }
 

      console.log("hi")
   const handleChange = (e)=>{
      let  val = e.target.value;
         setCommentorReply({
            ...commentorreply,
            [e.target.name]:val
         })
   }
   const handleSubmit = async(e)=>{
   e.preventDefault();
   const token = sessionStorage.getItem('Token');
 if(iscomment ==false){
      await postComment({commentorreply,token}).then(res=>console.log(res.data)).then(alert('we create the first comment'))
    }else{
      await postCommentReply({commentorreply,token}).then(res=>res.data).then(alert('we create the first reply '))
      }}


  const handleReply = async(e,obj)=>{
   setIsComment(true);
  console.log(obj)
   setTimeout(()=>{
     setIsComment(false)
   },15000)
  } 


    const handleRequest = async (e,obj)=>{
      e.preventDefault(); 
 
      const token = sessionStorage.getItem('Token');
    
    if(iscomment){
       await postCommentReply({commentorreply,token}).then(res =>console.log( res.data)).then(alert('this is reply'))
      console.log(commentorreply)
      return;
    }
    setCommentorReply({
      ...commentorreply,
      Post_Id:obj.Id,
      ParentComment_Id:0
   })
     console.log(commentorreply)
   await postComment({commentorreply,token}).then(res =>console.log(res.data)).then(alert('this is comment'))
    return;
}

    const handleComment =  (e,obj)=>{
       e.preventDefault(); 
     const token = sessionStorage.getItem('Token');
    
      setCommentorReply({
         ...commentorreply,
         Text:text,
         Post_Id:obj.Id,
         ParentComment_Id:0
      })
      

       console.log(commentorreply)
       console.log(text)
//       console.log(isComment)
     
   
//          isComment ?  await postCommentReply({commentorreply,token}).then(res =>console.log( res.data)).then(alert('this is reply'))
//          :await postComment({commentorreply,token}).then(res =>console.log( res.data)).then(alert('this is comment'))
//          return

  } 
  



const handleCreatePost =async ()=>{
const token = sessionStorage.getItem('Token')
await postCreatePost({post,token})
   }


const getPosts = async()=>{
 const token = sessionStorage.getItem('Token')
 const data = {userid:2,pagesize:13,pageno:0};
 await getGetPostsByUserId({data,token}).then(res=>setAllPost(res.data['Result'].Posts))
}
useEffect(()=>{
   getPosts()

},[isliked])
 

  return(
      <>
    {console.log(commentorreply)}
         <Container>
        
            <Row>
               <Col sm={12}>
                  <Card>
                     <Card.Body className=" profile-page p-0">
                        <div className="profile-header">
                           <div className="position-relative">
                              <img src={img1} alt="profile-bg" className="rounded img-fluid"/>
                              <ul className="header-nav list-inline d-flex flex-wrap justify-end p-0 m-0">
                                 <li><Link to="#"><i className="ri-pencil-line"></i></Link></li>
                                 <li><Link to="#"><i className="ri-settings-4-line"></i></Link></li>
                              </ul>
                           </div>
                           <div className="user-detail text-center mb-3">
                              <div className="profile-img">
                                 <img src={img2} alt="profile-img1" className="avatar-130 img-fluid" />
                              </div>
                              <div className="profile-detail">
                                 <h3>{localStorage.getItem('FullName')}</h3>
                              </div>
                           </div>
                           <div className="profile-info p-3 d-flex align-items-center justify-content-between position-relative">
                              <div className="social-links">
                                 <ul className="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                                    <li className="text-center pe-3">
                                       <Link to="#"><img src={img3} className="img-fluid rounded" alt="facebook"/></Link>
                                    </li>
                                    <li className="text-center pe-3">
                                       <Link to="#"><img src={img4} className="img-fluid rounded" alt="Twitter"/></Link>
                                    </li>
                                    <li className="text-center pe-3">
                                       <Link to="#"><img src={img5} className="img-fluid rounded" alt="Instagram"/></Link>
                                    </li>
                                    <li className="text-center pe-3">
                                       <Link to="#"><img src={img6} className="img-fluid rounded" alt="Google plus"/></Link>
                                    </li>
                                    <li className="text-center pe-3">
                                       <Link to="#"><img src={img7} className="img-fluid rounded" alt="You tube"/></Link>
                                    </li>
                                    <li className="text-center md-pe-3 pe-0">
                                       <Link to="#"><img src={img8} className="img-fluid rounded" alt="linkedin"/></Link>
                                    </li>
                                 </ul>
                              </div>
                              <div className="social-info">
                                 <ul className="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                                    <li className="text-center ps-3">
                                       <h6>Posts</h6>
                                       <p className="mb-0">690</p>
                                    </li>
                                    <li className="text-center ps-3">
                                       <h6>Followers</h6>
                                       <p className="mb-0">206</p>
                                    </li>
                                    <li className="text-center ps-3">
                                       <h6>Following</h6>
                                       <p className="mb-0">100</p>
                                    </li>
                                 </ul>
                              </div>
                          </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <div className="card p-0">
                     <div className="card-body p-0">
                        <div className="user-tabing">
                           <Nav as="ul" variant="pills" className="d-flex align-items-center justify-content-center profile-feed-items p-0 m-0">
                              <Nav.Item as="li" className=" col-12 col-sm-3 p-0 ">
                                 <Nav.Link  href="#pills-timeline-tab"  eventKey="first" role="button" className=" text-center p-3">Timeline</Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li" className="col-12 col-sm-3 p-0">
                                 <Nav.Link  href="#pills-about-tab" eventKey="second" role="button" className="text-center p-3">About</Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li" className=" col-12 col-sm-3 p-0">
                                 <Nav.Link  href="#pills-friends-tab"  eventKey="third" role="button" className="text-center p-3">Friends</Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li" className="col-12 col-sm-3 p-0">
                                 <Nav.Link  href="#pills-photos-tab"  eventKey="forth" role="button" className="text-center p-3">Photos</Nav.Link>
                              </Nav.Item>
                           </Nav>
                        </div>
                     </div>
                  </div>
                  <Col sm={12}>
                     <Tab.Content>
                        <Tab.Pane eventKey="first" >
                           <Card.Body className=" p-0">
                              <Row>
                                 <Col lg={4}>
                                    <div className="card">
                                       <div className="card-body">
                                          <Link to="#"><span className="badge badge-pill bg-primary font-weight-normal ms-auto me-1"><i className="ri-star-line"></i></span> 27 Items for you</Link>
                                       </div>
                                    </div>
                                    <Card>
                                       <div className="card-header d-flex justify-content-between">
                                          <div className="header-title">
                                             <h4 className="card-title">Life Event</h4>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                             <p className="m-0"><Link to="#"> Create </Link></p>
                                          </div>
                                       </div>
                                       <Card.Body >
                                          <Row>
                                             <Col sm={12}>
                                                <div className="event-post position-relative">
                                                   <Link to="#"><img src={img9} alt="gallary1" className="img-fluid rounded"/></Link>
                                                   <div className="job-icon-position">
                                                      <div className="job-icon bg-primary p-2 d-inline-block rounded-circle"><i className="ri-briefcase-line text-white"></i></div>
                                                   </div>
                                                   <div className="card-body text-center p-2">
                                                      <h5>Started New Job at Apple</h5>
                                                      <p>January 24, 2019</p>
                                                   </div>
                                                </div>
                                             </Col>
                                             <Col sm={12}>
                                                <div className="event-post position-relative">
                                                   <Link to="#"><img src={img10} alt="gallary1" className="img-fluid rounded"/></Link>
                                                   <div className="job-icon-position">
                                                      <div className="job-icon bg-primary p-2 d-inline-block rounded-circle"><i className="ri-briefcase-line text-white"></i></div>
                                                   </div>
                                                   <div className="card-body text-center p-2">
                                                      <h5>Freelance Photographer</h5>
                                                      <p className="mb-0">January 24, 2019</p>
                                                   </div>
                                                </div>
                                             </Col>
                                          </Row>
                                       </Card.Body>
                                    </Card>
                                    <Card>
                                       <div className="card-header d-flex justify-content-between">
                                          <div className="header-title">
                                             <h4 className="card-title">Photos</h4>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                             <p className="m-0"><Link to="#">Add Photo </Link></p>
                                          </div>
                                       </div>
                                       <Card.Body>
                                          <ul className="profile-img-gallary p-0 m-0 list-unstyled">
                                             <li><Link to="#"><img src={g1} alt="gallary" className="img-fluid" /></Link></li>
                                             <li><Link to="#"><img src={g2} alt="gallary" className="img-fluid" /></Link></li>
                                             <li><Link to="#"><img src={g3} alt="gallary" className="img-fluid" /></Link></li>
                                             <li><Link to="#"><img src={g4} alt="gallary" className="img-fluid" /></Link></li>
                                             <li><Link to="#"><img src={g5} alt="gallary" className="img-fluid" /></Link></li>
                                             <li><Link to="#"><img src={g6} alt="gallary" className="img-fluid" /></Link></li>
                                             <li><Link to="#"><img src={g7} alt="gallary" className="img-fluid" /></Link></li>
                                             <li><Link to="#"><img src={g8} alt="gallary" className="img-fluid" /></Link></li>
                                             <li><Link to="#"><img src={g9} alt="gallary" className="img-fluid" /></Link></li>
                                          </ul>
                                       </Card.Body>
                                    </Card>
                                    <Card>
                                       <div className="card-header d-flex justify-content-between">
                                          <div className="header-title">
                                             <h4 className="card-title">Friends</h4>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                             <p className="m-0"><Link to="javacsript:void();">Add New </Link></p>
                                          </div>
                                       </div>
                                       <Card.Body>
                                          <ul className="profile-img-gallary p-0 m-0 list-unstyled">
                                             <li>
                                                <Link to="#">
                                                <img src={user05} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Anna Rexia</h6>
                                             </li>
                                             <li>
                                                <Link to="#"><img src={user06} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Tara Zona</h6>
                                             </li>
                                             <li>
                                                <Link to="#"><img src={user07} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Polly Tech</h6>
                                             </li>
                                             <li>
                                                <Link to="#"><img src={user08} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Bill Emia</h6>
                                             </li>
                                             <li>
                                                <Link to="#"><img src={user09} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Moe Fugga</h6>
                                             </li>
                                             <li>
                                                <Link to="#"><img src={user10} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Hal Appeno </h6>
                                             </li>
                                             <li>
                                                <Link to="#"><img src={user07} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Zack Lee</h6>
                                             </li>
                                             <li>
                                                <Link to="#"><img src={user06} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Terry Aki</h6>
                                             </li>
                                             <li>
                                                <Link to="#"><img src={user05} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Greta Life</h6>
                                             </li>
                                          </ul>
                                       </Card.Body>
                                    </Card>
                                 </Col>
                                 <Col lg={8}>
                                    <Card id="post-modal-data" >
                                       <div className="card-header d-flex justify-content-between">
                                          <div className="header-title">
                                             <h4 className="card-title">Create Post</h4>
                                          </div>
                                       </div>
                                       <Card.Body>
                                          <div className="d-flex align-items-center">
                                             <div className="user-img">
                                                <img src={user1} alt="userimg" className="avatar-60 rounded-circle"/>
                                             </div>
                                             <form className="post-text ms-3 w-100 " >
                                                <input type="text" className="form-control rounded" placeholder="Write something here..." style={{border:"none"}}/>
                                             </form>
                                          </div>
                                          <hr/>
                                          <ul className=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
                                                <li className="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3 mb-md-0 mb-2"><img src={small07} alt="icon" className="img-fluid me-2"/> Photo/Video</li>
                                                <li className="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3 mb-md-0 mb-2"><img src={small08} alt="icon" className="img-fluid me-2"/> Tag Friend</li>
                                                <li className="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3"><img src={small09} alt="icon" className="img-fluid me-2"/> Feeling/Activity</li>
                                                <li className="bg-soft-primary rounded p-2 pointer text-center">
                                                   <div className="card-header-toolbar d-flex align-items-center">
                                                      <Dropdown>
                                                         <Dropdown.Toggle as={CustomToggle}  id="post-option"  >
                                                            <i className="ri-more-fill h4"></i>
                                                         </Dropdown.Toggle>
                                                         <Dropdown.Menu className=" dropdown-menu-right" aria-labelledby="post-option" >
                                                               <Dropdown.Item onClick={handleShow}  href="#" >Check in</Dropdown.Item>
                                                               <Dropdown.Item onClick={handleShow}  href="#" >Live Video</Dropdown.Item>
                                                               <Dropdown.Item onClick={handleShow}  href="#" >Gif</Dropdown.Item>
                                                               <Dropdown.Item onClick={handleShow}  href="#" >Watch Party</Dropdown.Item>
                                                               <Dropdown.Item onClick={handleShow}  href="#" >Play with Friend</Dropdown.Item>
                                                         </Dropdown.Menu>
                                                      </Dropdown>
                                                   </div>
                                                </li>
                                          </ul>
                                       </Card.Body>
                                       <Modal show={show} onHide={handleClose} size="lg">
                                        <Modal.Header className="d-flex justify-content-between">
                                            <h5 className="modal-title" id="post-modalLabel">Create Post</h5>
                                            <button type="button" className="btn btn-secondary"  onClick={handleClose} ><i className="ri-close-fill"></i></button>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="d-flex align-items-center">
                                                <div className="user-img">
                                                    <img src={img5} alt="userimg" className="avatar-60 rounded-circle img-fluid"/>
                                                </div>
                                                <form className="post-text ms-3 w-100" >
                                                    <input type="text" className="form-control rounded" placeholder="Write something here..." style={{border: "none"}}/>
                                                </form>
                                            </div>
                                            <hr/>
                                            <ul className="d-flex flex-wrap align-items-center list-inline m-0 p-0">
                                                <li className="col-md-6 mb-3">
                                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link><img src={small1} alt="icon" className="img-fluid"/> Photo/Video</div>
                                                </li>
                                                <li className="col-md-6 mb-3">
                                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link><img src={small2} alt="icon" className="img-fluid"/> Tag Friend</div>
                                                </li>
                                                <li className="col-md-6 mb-3">
                                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link><img src={small3} alt="icon" className="img-fluid"/> Feeling/Activity</div>
                                                </li>
                                                <li className="col-md-6 mb-3">
                                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link><img src={small4} alt="icon" className="img-fluid"/> Check in</div>
                                                </li>
                                                <li className="col-md-6 mb-3">
                                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link><img src={small5} alt="icon" className="img-fluid"/> Live Video</div>
                                                </li>
                                                <li className="col-md-6 mb-3">
                                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link><img src={small6} alt="icon" className="img-fluid"/> Gif</div>
                                                </li>
                                                <li className="col-md-6 mb-3">
                                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link><img src={small7} alt="icon" className="img-fluid"/> Watch Party</div>
                                                </li>
                                                <li className="col-md-6 mb-3">
                                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link><img src={small8} alt="icon" className="img-fluid"/> Play with Friends</div>
                                                </li>
                                            </ul>
                                            <hr/>
                                            <div className="other-option">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-img me-3">
                                                            <img src={user9} alt="userimg" className="avatar-60 rounded-circle img-fluid"/>
                                                        </div>
                                                        <h6>Your Story</h6>
                                                    </div>
                                                    <div className="card-post-toolbar">
                                                        <Dropdown>
                                                            <Dropdown.Toggle className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                                                <span className="btn btn-primary">Friend</span>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu clemassName="dropdown-menu m-0 p-0">
                                                                <Dropdown.Item className="dropdown-item p-3" href="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <i className="ri-save-line h4"></i>
                                                                        <div className="data ms-2">
                                                                            <h6>Public</h6>
                                                                            <p className="mb-0">Anyone on or off Facebook</p>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item className="dropdown-item p-3" href="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <i className="ri-close-circle-line h4"></i>
                                                                        <div className="data ms-2">
                                                                            <h6>Friends</h6>
                                                                            <p className="mb-0">Your Friend on facebook</p>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item className="dropdown-item p-3" href="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <i className="ri-user-unfollow-line h4"></i>
                                                                        <div className="data ms-2">
                                                                            <h6>Friends except</h6>
                                                                            <p className="mb-0">Don't show to some friends</p>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item className="dropdown-item p-3" href="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <i className="ri-notification-line h4"></i>
                                                                        <div className="data ms-2">
                                                                            <h6>Only Me</h6>
                                                                            <p className="mb-0">Only me</p>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button variant="primary" className="d-block w-100 mt-3">Post</Button>
                                        </Modal.Body>
                                    </Modal>
                                    </Card>
                               
                                   
                                   {allPost.map(item =>
                        <Col sm={12} key={item.Id}>
                   
                      
                            <Card className=" card-block card-stretch card-height">
                                <Card.Body>
                                    <div className="user-post-data">
                                        <div className="d-flex justify-content-between">
                                            
                                            <div className="me-3">
                                                <img className="rounded-circle img-fluid" src={item.User.ProfilePictureUrl} alt=""/>
                                            </div>
                                            
                                            <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                    
                                                   
                                                    <div>
                                                        <h5 className="mb-0 d-inline-block">{item.User.FullName}</h5>
                                                        <span className="mb-0 ps-1 d-inline-block">Added a post</span>
                                                        <p className="mb-0 text-primary">
                                                             {item.CreatedDate.split(":")[1]+":"+item.CreatedDate.split(":")[2].split("").slice(0,2).join("")    
}
                                                            </p>
                                                    </div>
                                                    
                                                    <div className="card-post-toolbar">
                                                        <Dropdown>
                                                            <Dropdown.Toggle className="bg-transparent border-white">
                                                            <i className="ri-more-fill"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu className="dropdown-menu m-0 p-0">
                                                                <Dropdown.Item className=" p-3" to="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <div className="h4">
                                                                            <i className="ri-save-line"></i>
                                                                        </div>
                                                                        <div className="data ms-2">
                                                                            <h6>Save Post</h6>
                                                                            <p className="mb-0">Add this to your saved items</p>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item className= "p-3" to="#">
                                                                        <div className="d-flex align-items-top">
                                                                        <i className="ri-close-circle-line h4"></i>
                                                                        <div className="data ms-2">
                                                                            <h6>Hide Post</h6>
                                                                            <p className="mb-0">See fewer posts like this.</p>
                                                                        </div>
                                                                    </div>
                                                                    </Dropdown.Item>
                                                                    <Dropdown.Item className=" p-3" to="#">
                                                                        <div className="d-flex align-items-top">
                                                                            <i className="ri-user-unfollow-line h4"></i>
                                                                            <div className="data ms-2">
                                                                                <h6>Unfollow User</h6>
                                                                                <p className="mb-0">Stop seeing posts but stay friends.</p>
                                                                            </div>
                                                                        </div>
                                                                    </Dropdown.Item>
                                                                    <Dropdown.Item className=" p-3" to="#">
                                                                        <div className="d-flex align-items-top">
                                                                            <i className="ri-notification-line h4"></i>
                                                                            <div className="data ms-2">
                                                                                <h6>Notifications</h6>
                                                                                <p className="mb-0">Turn on notifications for this post</p>
                                                                            </div>
                                                                        </div>
                                                                    </Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <p>{item.Text}</p>
                                        </div>
                                        <div className="user-post">
                                            <div className=" d-grid grid-rows-2 grid-flow-col gap-3">
                                                {item.Medias.map(val=>
                                                <div className="row-span-2 row-span-md-1" key={val.Id}>
                                                    <img src={val.Url} alt="image" className="img-fluid rounded w-100"/>
                                                </div>
                                                
                                                )}
                                            </div>
                                        </div>
                                        <div className="comment-area mt-3">
                                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                <div className="like-block position-relative d-flex align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <div className="like-data">
                                                            <Dropdown>
                                                               <Dropdown.Toggle  as={CustomToggle} >
                                                               <a  onClick={()=>getlikes(item.Id)}>
                                                               <i className="lar la-heart "  style={{fontSize:"24px"}}></i>
                                                               </a>
                                                               </Dropdown.Toggle>
                                                            </Dropdown>
                                                        </div>
                                                        <div className="total-like-block ms-2 me-3">
                                                            <Dropdown>
                                                               <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                                {item.LikesCount}
                                                               </Dropdown.Toggle>
                                                            </Dropdown>
                                                        </div>
                                                    </div>
                                                    <div className="total-comment-block">
                                                        <Dropdown>
                                                            <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                            {item.CommentsCount}
                                                            </Dropdown.Toggle>
                                                         </Dropdown>
                                                    </div>
                                                </div>
                                                <ShareOffcanvas sharecount={item.ShareCount} />
                                            </div>
                                        <hr/>
                                        <ul className="post-comments list-inline p-0 m-0">
                                            <li className="mb-2">
                                            {item.Comments.map(val=>
                                                <div className="d-flex">
                                                 <>
                                                    <div className="user-img" >
                                                    <img  className="avatar-35 rounded-circle img-fluid"/>
                                                </div>
                                                            <div className="comment-data-block ms-3">
                                                                <h6>Name</h6>
                                                                <p className="mb-0">{val.text}</p>
                                                                <div className="d-flex flex-wrap align-items-center comment-activity">
                                                                    <Link to="#">like</Link>
                                                                    <Link to="#"onClick={()=>{
                                                                       setTimeout(()=>{
                                                                        setIsComment(false)
                                                                       },10000)
                                                                  
                                                                       setCommentorReply({
                                                                          ...commentorreply,
                                                                          Post_Id:item.Id,
                                                                          ParentComment_Id:val.Id
                                                                       })
                                                                   }} >reply</Link>
                                                                    <Link to="#">translate</Link>
                                                                    <span> 5 min </span>
                                                                </div>
                                                            </div>
                                                            </>
                                                         </div>
                                                       )}
                                                    </li>
                                         
                                                 </ul>
                                        <form className="comment-text d-flex align-items-center mt-3" onSubmit={(e,n)=>handleRequest(e,item)}  >
                                            <input type="text" className="form-control rounded" placeholder="Enter Your Comment" onChange={(e)=>setCommentorReply({
                                               ...commentorreply,
                                               Text:e.target.value,
                                                Post_Id:item.Id
                                            })} />
                                            <div className="comment-attagement d-flex">
                                                <Link to="#"><i className="ri-link me-3"></i></Link>
                                                <Link to="#"><i className="ri-user-smile-line me-3"></i></Link>
                                                <Link to="#"><i className="ri-camera-line me-3"></i></Link>
                                           </div>
                                            <input type="submit"  style={{backgroundColor:"#50b5ff",border:"0",color:"white",padding:"0px 15px"}} value="send"/> 
                                        </form>
                                    </div>
                                </Card.Body>
                            </Card>

                        
                        </Col>
                        )}
                             
                                   
                                    
                                 </Col>
                              </Row>
                           </Card.Body>
                        </Tab.Pane> 
                        <div className="col-sm-12 text-center">
                           <img src={loader} alt="loader" style={{height: "100px"}} />
                        </div>
                     </Tab.Content>
                  </Col>
               </Tab.Container>
            </Row>
         </Container>   
      </>
  )

}

export default UserProfile