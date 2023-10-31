import React from 'react'
import '../assets/styles/Footer.css'
import {Link, NavLink} from 'react-router-dom'
import { BiLogoReddit,BiLogoLinkedin,BiLogoFacebookCircle,BiLogoYoutube,BiLogoInstagram,BiLogoTiktok } from 'react-icons/bi';

import {RiTwitterXFill} from 'react-icons/ri'

export default function Footer() {
  return (
    <div className='footer-container'>
      <div>
        <footer className='f-main'>
            <div >
                <div className='f-parts'>
                    <div>
                        <div>
                            <div style={{width:'100px'}}>
                                <img style={{ width:'100%'}} src=" https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png" alt="" />
                            </div>
                        </div>
                        <div>
                            <ul >
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Pricing</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Contact Us</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Templates</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>SMB</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Enterprise</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Nonprofits</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>App marketplace</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>24/7 support</li></Link>
                               
                            </ul>
                        </div>
                    </div>
                    <div>
                        
                            <ul>
                                <li style={{fontWeight:'700'}}>Features</li>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Docs</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Integrations</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Automations</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Files</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Dashboards</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Kanban</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Gantt</li></Link>
                            </ul>
                    </div>
                    <div>
                    <div>
                          
                            <ul>
                            <li style={{fontWeight:'700'}}>monday products</li>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}>
                                 <img src="" alt="" />
                                <li>Monday work management</li>
                                </Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Monday sales CRM </li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>My Monday dev</li></Link>
                            </ul>
                           
                           <br />

                            <ul>
                             <li style={{fontWeight:'700'}}>More about Monday.com</li>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}>
                                 <img src="" alt="" />
                                <li>WorkCanvas</li>
                                </Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}>
                                <li>WorkFhones</li>
                                </Link>
                                
                            </ul>
                    </div>
                    </div>
                    <div> 
                    <div>
                            <ul>
                                <li style={{fontWeight:'700'}}>Company</li>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Careers-We're hiring</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Monday-U</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Press</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Customer stories</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Become a partner</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Sustainability & ESG</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Affiliates</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Digital lift</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Investor Relations</li></Link>

                            </ul>
                        </div></div>
                    <div>
                    
                    </div>
                    <div> 
                            <div>
                            <ul>
                                <li style={{fontWeight:'700'}}> Resources</li>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Help center</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Community</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Blog</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>What's new</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Mondayspace</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>webinars</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>startup for startup</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>Global events</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>find the partner</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>app development</li></Link>
                                <Link className='f-links' to='/' style={{ textDecoration: 'none' }}><li>compare</li></Link>

                            </ul>
                            </div>
                        </div>
                   
                </div>

            </div>

        </footer>
        <hr />
        <div  className='f-last'>
            <div>
              <div>

              </div>
              <h5>
                English
              </h5>
            </div>
            <div>
                <div className='f-allicons'>
                    <BiLogoReddit className='f-icons' />
                    <BiLogoLinkedin  className='f-icons'/>
                    <BiLogoFacebookCircle className='f-icons' />
                    <BiLogoYoutube className='f-icons' />
                    <RiTwitterXFill className='f-icons'/>
                    <BiLogoInstagram className='f-icons'/>
                    <BiLogoTiktok className='f-icons'/>

                </div>
                <div>
                    <ul style={{display:'flex', fontSize:'15px'}}>
                        <Link className='f-links' to='/' style={{margin:'0px 5px'}}><li>Security</li></Link> |
                        <Link className='f-links' to='/' style={{margin:'0px 5px'}} ><li>Terms & conditions</li></Link>|
                        <Link className='f-links' to='/' style={{margin:'0px 5px'}}><li>Privacy policy</li></Link>|
                        <Link className='f-links' to='/' style={{margin:'0px 5px'}}><li>Cookie settings</li></Link> |
                        <Link className='f-links' to='/' style={{margin:'0px 5px'}}><li>Status</li></Link>&nbsp;&nbsp;&nbsp;
                        <li>All Rights Reserved © monday.com</li>
                        
                    </ul>
                </div>
            </div>
            <div>
                <img style={{width:'100px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPDG-Le4K6Lw81dxaIluNPTUk5-SNE7H8Ly1bo6weTAnIYLyI_8oqaMeMCN70Tg7HafoU&usqp=CAU" />
            </div>
        </div>
      </div>
    </div>
  )
}