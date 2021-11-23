import React, {useState,useEffect,useRef}  from 'react'
import { Row, Col, Container, Dropdown, OverlayTrigger, Tooltip, Modal} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import CustomToggle from '../../components/dropdowns'
import ShareOffcanvas from '../../components/share-offcanvas'
import {getPosts, postComment} from '../../api/post/post'
import axios from "axios";
import {postCreatePost,getGetPosts,getGetPostByPostId,postCommentReply ,getLikePost } from '../../api/post/post'
import { useSelector } from 'react-redux'


//image
import user1 from '../../assets/images/user/1.jpg'
import user01 from '../../assets/images/user/01.jpg'
import user2 from '../../assets/images/user/02.jpg'
import user3 from '../../assets/images/user/03.jpg'
import user4 from '../../assets/images/user/04.jpg'
import user8 from '../../assets/images/user/08.jpg'
import user6 from '../../assets/images/user/06.jpg'
import img1 from '../../assets/images/small/07.png'
import img2 from '../../assets/images/small/08.png'
import img3 from '../../assets/images/small/09.png'
import img4 from '../../assets/images/small/10.png'
import img5 from '../../assets/images/small/11.png'
import img6 from '../../assets/images/small/12.png'
import img7 from '../../assets/images/small/13.png'
import img8 from '../../assets/images/small/14.png'
import p1 from '../../assets/images/page-img/p1.jpg'
import s1 from '../../assets/images/page-img/s1.jpg'
import s2 from '../../assets/images/page-img/s2.jpg'
import s3 from '../../assets/images/page-img/s3.jpg'
import s4 from '../../assets/images/page-img/s4.jpg'
import s5 from '../../assets/images/page-img/s5.jpg'
import p2 from '../../assets/images/page-img/p2.jpg'
import p3 from '../../assets/images/page-img/p3.jpg'
import p4 from '../../assets/images/page-img/p4.jpg'
import p5 from '../../assets/images/page-img/p5.jpg'
import img42 from '../../assets/images/page-img/42.png'
import icon1 from '../../assets/images/icon/01.png'
import icon2 from '../../assets/images/icon/02.png'
import icon3 from '../../assets/images/icon/03.png'
import icon4 from '../../assets/images/icon/04.png'
import icon5 from '../../assets/images/icon/05.png'
import icon6 from '../../assets/images/icon/06.png'
import icon7 from '../../assets/images/icon/07.png'
import img9 from '../../assets/images/small/img-1.jpg'
import img10 from '../../assets/images/small/img-2.jpg'
import loader from '../../assets/images/page-img/page-load-loader.gif'





const Index = () => {
    const login = useSelector(c=>c)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [iscomment,setIsComment] = useState(false);
    const [allPost,setAllPost] = useState([])
    const [Post_Id,setPost_Id]=useState(0)
    const [isliked,setIsliked] =useState(false)
    const [post,setPost] = useState({
        Text: "raza and ,mostafa = love",
        Visibility: 1,
        Location: "internet city",
        ImageUrls: "no problem",
        UserTagId: [
          2
        ]
      })
      const[commentorreply,setCommentorReply]= useState({
        Text: "string",
        Post_Id: 1,
        ParentComment_Id: 1
      })
      const [comment,setComment] = useState({
        Text: "testing",
        Post_Id: 2,
        ParentComment_Id: 1
      })
      const [replycomment,setReplyComment] = useState({
        Text: "string",
        Post_Id: 1,
        ParentComment_Id: 1
      })
    const hadnleChage = (e)=>{
       let  val = e.target.vlaue;
        setPost({
            ...post,
            [e.target.name]:val
        })
    }
    const handleSubmit = async(e,n)=>{
        e.preventDefault();
        console.log(n)
        const token = sessionStorage.getItem('Token');

        if(iscomment ==false){
            await postComment({comment,token}).then(res=>console.log(res.data)).then(alert('we create the first comment'))
        }else{
             await postCommentReply({replycomment,token}).then(res=>console.log(res.data)).then(alert('we create the first reply '))
    }}
    const handleReply =  ()=>{
        setIsComment(true)
        
    }
    const handleClick =async ()=>{
   const token = sessionStorage.getItem('Token')
    }
    // const getlikes = async(id)=>{
    //     setLikePost({...LikePost,Post_Id:id})
    //     const token = sessionStorage.getItem('Token')
    //     await getLikePost({LikePost,token}).then(res=>console.log(res.data['Result']))
    // }
    const getlikes = async(id)=>{
        setPost_Id(id)
     
        const token = sessionStorage.getItem('Token')
        
        setIsliked(!isliked)
     await getLikePost({Post_Id,token}).then(res=>res.data['Result']).catch(err => alert("there is no likes"))
     }

    const getPosts = async()=>{
        const token = sessionStorage.getItem('Token')
        const data = {pagesize:10,pageno:0};
        await getGetPosts({data,token}).then(res=>setAllPost(res.data['Result'].Posts))
    }
  


    
useEffect(()=>{
    getPosts()

},[isliked])
  
    return (
        <>
       
        <Container>
                <Row>
                    <Col lg={8} className="row m-0 p-0">
                        <Col sm={12} >
                            <Card id="post-modal-data" className="card-block card-stretch card-height">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Create Post</h4>
                                    </div>
                                </div>
                                <Card.Body >
                                    <div className="d-flex align-items-center">
                                        <div className="user-img">
                                            <img src={user1} alt="user1" className="avatar-60 rounded-circle"/>
                                        </div>
                                        <form className="post-text ms-3 w-100 "   onClick={handleShow}>
                                            <input type="text" className="form-control rounded" name="Text" placeholder="Write something here..." style={{border:"none"}} onChange={hadnleChage}/>
                                        </form>
                                    </div>
                                    <hr/>
                                    <ul className=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
                                        <li className="me-3 mb-md-0 mb-2">
                                            <Link to="#" className="btn btn-soft-primary">
                                                <img src={img1} alt="icon" className="img-fluid me-2"/> Photo/Video
                                            </Link>
                                        </li>
                                        <li className="me-3 mb-md-0 mb-2">
                                            <Link to="#" className="btn btn-soft-primary">
                                                <img src={img2} alt="icon" className="img-fluid me-2"/> Tag Friend
                                            </Link>
                                        </li>
                                        <li className="me-3">
                                            <Link to="#" className="btn btn-soft-primary">
                                                <img src={img3} alt="icon" className="img-fluid me-2"/> Feeling/Activity
                                            </Link>
                                        </li>
                                        <li>
                                            <button className=" btn btn-soft-primary">
                                                <div className="card-header-toolbar d-flex align-items-center">
                                                    <Dropdown>
                                                        <Dropdown.Toggle as='div'>
                                                            <i className="ri-more-fill h4"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item  onClick={handleShow}  href="#">Check in</Dropdown.Item>
                                                            <Dropdown.Item  onClick={handleShow}  href="#">Live Video</Dropdown.Item>
                                                            <Dropdown.Item  onClick={handleShow}  href="#">Gif</Dropdown.Item> 
                                                            <Dropdown.Item  onClick={handleShow}  href="#">Watch Party</Dropdown.Item> 
                                                            <Dropdown.Item  onClick={handleShow}  href="#">Play with Friend</Dropdown.Item> 
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </button>
                                        </li>
                                    </ul>
                                </Card.Body>
                                <Modal size="lg" className=" fade" id="post-modal" onHide={handleClose} show={show} >
                                    <Modal.Header  className="d-flex justify-content-between">
                                        <Modal.Title id="post-modalLabel">Create Post</Modal.Title>
                                        <button type="button" className="btn btn-secondary"  onClick={handleClose} ><i className="ri-close-fill"></i></button>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="d-flex align-items-center">
                                            <div className="user-img">
                                                <img src={user1} alt="user1" className="avatar-60 rounded-circle img-fluid"/>
                                            </div>
                                            <form className="post-text ms-3 w-100 "  data-bs-toggle="modal" data-bs-target="#post-modal">
                                            <input type="text" className="form-control rounded" placeholder="Write something here..." style={{border:"none"}} onChange={(e)=>setPost({
                                                ...post,
                                                description:e.target.value
                                            })}/>
                                        </form>
                                        </div>
                                        <hr/>
                                        <ul className="d-flex flex-wrap align-items-center list-inline m-0 p-0">
                                            <li className="col-md-6 mb-3">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                <img src={img1} alt="icon" className="img-fluid"/> Photo/Video</div>
                                            </li>
                                            <li className="col-md-6 mb-3">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                <img src={img2} alt="icon" className="img-fluid"/> Tag Friend</div>
                                            </li>
                                            <li className="col-md-6 mb-3">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                <img src={img3} alt="icon" className="img-fluid"/> Feeling/Activity</div>
                                            </li>
                                            <li className="col-md-6 mb-3">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                <img src={img4} alt="icon" className="img-fluid"/> Check in</div>
                                            </li>
                                            <li className="col-md-6 mb-3">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                <img src={img5} alt="icon" className="img-fluid"/> Live Video</div>
                                            </li>
                                            <li className="col-md-6 mb-3">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                <img src={img6} alt="icon" className="img-fluid"/> Gif</div>
                                            </li>
                                            <li className="col-md-6 mb-3">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                <img src={img7} alt="icon" className="img-fluid"/> Watch Party</div>
                                            </li>
                                            <li className="col-md-6 mb-3">
                                                <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link>
                                                <img src={img8} alt="icon" className="img-fluid"/> Play with Friends</div>
                                            </li>
                                        </ul>
                                        <hr/>
                                        <div className="other-option">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                <div className="user-img me-3">
                                                    <img src={user1} alt="user1" className="avatar-60 rounded-circle img-fluid"/>
                                                </div>
                                                <h6>Your Story</h6>
                                                </div>
                                                <div className="card-post-toolbar">
                                                    <Dropdown  >
                                                        <Dropdown.Toggle as={CustomToggle} role="button">
                                                        <span className="btn btn-primary">Friend</span>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className=" m-0 p-0">
                                                            <Dropdown.Item className=" p-3" to="#">
                                                                <div className="d-flex align-items-top">
                                                                <i className="ri-save-line h4"></i>
                                                                <div className="data ms-2">
                                                                    <h6>Public</h6>
                                                                    <p className="mb-0">Anyone on or off Facebook</p>
                                                                </div>
                                                                </div>
                                                            </Dropdown.Item>
                                                            <Dropdown.Item className="p-3" to="#">
                                                                <div className="d-flex align-items-top">
                                                                <i className="ri-close-circle-line h4"></i>
                                                                <div className="data ms-2">
                                                                    <h6>Friends</h6>
                                                                    <p className="mb-0">Your Friend on facebook</p>
                                                                </div>
                                                                </div>
                                                            </Dropdown.Item>        
                                                            <Dropdown.Item className=" p-3" to="#">
                                                                <div className="d-flex align-items-top">
                                                                <i className="ri-user-unfollow-line h4"></i>
                                                                <div className="data ms-2">
                                                                    <h6>Friends except</h6>
                                                                    <p className="mb-0">Don't show to some friends</p>
                                                                </div>
                                                                </div>
                                                            </Dropdown.Item>
                                                            <Dropdown.Item className=" p-3" to="#">
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
                                        <button type="submit"  className="btn btn-primary d-block w-100 mt-3" onClick={()=>handleClick()}>Post</button>
                                    </Modal.Body>
                                </Modal>
                            </Card>
                        </Col>
              
                        {allPost.map(i =>
                        <Col sm={12} key={i.Id}>
                   
                      
                            <Card className=" card-block card-stretch card-height">
                                <Card.Body>
                                    <div className="user-post-data">
                                        <div className="d-flex justify-content-between">
                                            
                                            <div className="me-3">
                                                <img className="rounded-circle img-fluid" src={i.User.ProfilePictureUrl} alt=""/>
                                            </div>
                                            
                                            <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                    
                                                   
                                                    <div>
                                                        <h5 className="mb-0 d-inline-block">{i.User.FullName}</h5>
                                                        <span className="mb-0 ps-1 d-inline-block">Added a post</span>
                                                        <p className="mb-0 text-primary">
                                                             {i.CreatedDate.split(":")[1]+":"+i.CreatedDate.split(":")[2].split("").slice(0,2).join("")    
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
                                            <p>{i.Text}</p>
                                        </div>
                                        <div className="user-post">
                                            <div className=" d-grid grid-rows-2 grid-flow-col gap-3">
                                                {i.Medias.map(val=>
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
                                                                    <a  onClick={()=>getlikes(i.Id)}>
                                                                    <i className="lar la-heart " style={{fontSize:"24px"}}></i>
                                                                    </a>
                                                                </Dropdown.Toggle>
                                                                {/* <Dropdown.Menu className=" py-2">
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Like</Tooltip>} className="ms-2 me-2" ><img src={icon1} className="img-fluid" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Love</Tooltip>} className="me-2" ><img src={icon2} className="img-fluid" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Happy</Tooltip>} className="me-2" ><img src={icon3} className="img-fluid" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>HaHa</Tooltip>} className="me-2" ><img src={icon4} className="img-fluid" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Think</Tooltip>} className="me-2" ><img src={icon5} className="img-fluid" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Sade</Tooltip>} className="me-2" ><img src={icon6} className="img-fluid" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Lovely</Tooltip>} className="me-2" ><img src={icon7} className="img-fluid" alt=""/></OverlayTrigger>
                                                                </Dropdown.Menu> */}
                                                            </Dropdown>
                                                        </div>
                                                        <div className="total-like-block ms-2 me-3">
                                                            <Dropdown>
                                                                <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                                {i.LikesCount}
                                                                </Dropdown.Toggle>
                                                                {/* <Dropdown.Menu>
                                                                    <Dropdown.Item  href="#">Max Emum</Dropdown.Item>
                                                                    <Dropdown.Item  href="#">Bill Yerds</Dropdown.Item>
                                                                    <Dropdown.Item  href="#">Hap E. Birthday</Dropdown.Item>
                                                                    <Dropdown.Item  href="#">Tara Misu</Dropdown.Item>
                                                                    <Dropdown.Item  href="#">Midge Itz</Dropdown.Item>
                                                                    <Dropdown.Item  href="#">Sal Vidge</Dropdown.Item>
                                                                    <Dropdown.Item  href="#">Other</Dropdown.Item>
                                                                </Dropdown.Menu> */}
                                                            </Dropdown>
                                                        </div>
                                                    </div>
                                                    <div className="total-comment-block">
                                                        <Dropdown>
                                                            <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                            {i.CommentsCount}  Commented
                                                            </Dropdown.Toggle>
                                                            
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                                <ShareOffcanvas sharecount={i.ShareCount} />
                                            </div>
                                        <hr/>
                                        <ul className="post-comments list-inline p-0 m-0">
                                            <li className="mb-2">
                                                <div className="d-flex">
                                                    
                                                    {i.Comments.map(val=>
                                                    <>
                                                    <div className="user-img" >
                                                    <img src={user01} alt="user1" className="avatar-35 rounded-circle img-fluid"/>
                                                </div>
                                                            <div className="comment-data-block ms-3">
                                                                <h6>Name</h6>
                                                                <p className="mb-0">{val.text}</p>
                                                                <div className="d-flex flex-wrap align-items-center comment-activity">
                                                                    <Link to="#">like</Link>
                                                                    <Link to="#"onClick={()=>handleReply()} >reply</Link>
                                                                    <Link to="#">translate</Link>
                                                                    <span> 5 min </span>
                                                                </div>
                                                            </div>
                                                            </>
                                                    )}

                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <div className="user-img">
                                                        <img src={user3} alt="user1" className="avatar-35 rounded-circle img-fluid"/>
                                                    </div>
                                                    <div className="comment-data-block ms-3">
                                                        <h6>Paul Molive</h6>
                                                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                                            <Link to="#">like</Link>
                                                            <Link to="#"onClick={()=>handleReply()} >reply</Link>
                                                            <Link to="#">translate</Link>
                                                            <span> 5 min </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <form className="comment-text d-flex align-items-center mt-3" onSubmit={handleSubmit} >
                                            <input type="text" className="form-control rounded" placeholder="Enter Your Comment" />
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
                    <Col lg={4}>
                    <Card>
                           
                            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                <button className="btn btn-soft-primary mb-2" style={{width:"200px"}}>Connect Account</button>
                                <button className="btn btn-soft-primary mb-2" style={{width:"200px"}}>Be a signal provider</button>
                             
                            </Card.Body>
                        </Card>
                      
                        <Card>
                            <div className="card-header d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Hot Topics</h4>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                    <Dropdown>
                                        <Dropdown.Toggle as={CustomToggle} id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                            <i className="ri-more-fill h4"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className=" dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                            <Dropdown.Item  href="#"><i className="ri-eye-fill me-2"></i>View</Dropdown.Item>
                                            <Dropdown.Item  href="#"><i className="ri-delete-bin-6-fill me-2"></i>Delete</Dropdown.Item>
                                            <Dropdown.Item  href="#"><i className="ri-pencil-fill me-2"></i>Edit</Dropdown.Item>
                                            <Dropdown.Item  href="#"><i className="ri-printer-fill me-2"></i>Print</Dropdown.Item>
                                            <Dropdown.Item  href="#"><i className="ri-file-download-fill me-2"></i>Download</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <Card.Body>
                                <ul className="media-story list-inline m-0 p-0">
                                    <li className="d-flex mb-4 align-items-center ">
                                        <img src={user8} alt="story1" className="rounded-circle img-fluid"/>
                                        <div className="stories-data ms-3">
                                            <h6>imTraderTradingContest</h6>
                                            <p className="mb-0"><span>438 views</span> </p>
                                            <p><span>340 Discusse</span><em style={{color:'red',marginLeft:'4px'}}>+3</em></p>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-4 align-items-center ">
                                        <img src={user2} alt="story1" className="rounded-circle img-fluid"/>
                                        <div className="stories-data ms-3">
                                            <h6>BeginnerTalk</h6>
                                            <p className="mb-0"><span>438 views</span> </p>
                                            <p><span>340 Discusse</span><em style={{color:'red',marginLeft:'4px'}}>+6</em></p>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-4 align-items-center ">
                                        <img src={user6} alt="story1" className="rounded-circle img-fluid"/>
                                        <div className="stories-data ms-3">
                                            <h6>FollowMe Report</h6>
                                            <p className="mb-0"><span>438 views</span> </p>
                                            <p><span>340 Discusse</span><em style={{color:'red',marginLeft:'4px'}}>+2</em></p>
                                        </div>
                                    </li>
                                 
                                
                                </ul>
                            </Card.Body>
                        </Card>
                     
                        <Card>
                            <div className="card-header d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Who to Follow</h4>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                    <Dropdown>
                                        <Dropdown.Toggle as={CustomToggle}>
                                            <i className="ri-more-fill h4"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu-right" aria-labelledby="dropdownMenuButton01">
                                            <Dropdown.Item  href="#"><i className="ri-eye-fill me-2"></i>View</Dropdown.Item>
                                            <Dropdown.Item  href="#"><i className="ri-delete-bin-6-fill me-2"></i>Delete</Dropdown.Item>
                                            <Dropdown.Item  href="#"><i className="ri-pencil-fill me-2"></i>Edit</Dropdown.Item>
                                            <Dropdown.Item  href="#"><i className="ri-printer-fill me-2"></i>Print</Dropdown.Item>
                                            <Dropdown.Item  href="#"><i className="ri-file-download-fill me-2"></i>Download</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <Card.Body>
                                <ul className="media-story list-inline m-0 p-0">
                                    <li className="d-flex mb-4 align-items-center justify-content-around ">
                                        <img src={user8} alt="story1" className="rounded-circle img-fluid"/>
                                        <div className="stories-data ">
                                            <h6>Nim Doe</h6>
                                            
                                        </div>
                                        <div>
                                        <button className="btn btn-outline-primary btn-sm">Follow</button>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-4 align-items-center justify-content-around ">
                                        <img src={user2} alt="story1" className="rounded-circle img-fluid"/>
                                        <div className="stories-data ">
                                            <h6>Paul Alex</h6>
                                        </div>
                                        <div>
                                        <button className="btn btn-outline-primary btn-sm">Follow</button>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-4 align-items-center justify-content-around ">
                                        <img src={user6} alt="story1" className="rounded-circle img-fluid"/>
                                        <div className="stories-data">
                                            <h6>Angel Mary</h6>
                                            
                                        </div>
                                        <div>
                                        <button className="btn btn-outline-primary btn-sm" >Follow</button>
                                        </div>
                                    </li>
                                 
                                
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <div className="col-sm-12 text-center">
                        <img src={loader} alt="loader" style={{height: "100px"}}/>
                    </div>
                </Row>
            </Container>                
        </>
    )
}

export default Index
