import React from 'react'
import Image from '../assets/images/jalditech.svg'
import Notification from '../assets/images/notifications-icon.png'
import circle from '../assets/images/w_01.png'
import Whatsapp from '../assets/images/whatsapp.png'
import '../assets/styles/jalditech.css'
function Jalditech() {
  return (
    <div className='j-container'>
      <div>
      <img src={Image} alt="" className='j-image'/>
      </div>
      <div className="j-content">
      <h1 className='j-h1'>Never Waste Another Lead</h1>
      <div className="j-sec1">
        <img src={circle} alt="" className='j-sec1img'/>
        <h2 className='j-h2'>Enforced lead updates</h2>
        <p className='j-secp'>After every call, sales agents have to update the lead status before moving on to the next lead.</p>
      </div>
      <div className="j-sec1">
        <img src={Notification} alt="" className='j-sec1img'/>
        <h2 className='j-h2'>Mobile notifications for all your follow ups</h2>
        <p className='j-secp'>Easily add follow up reminders for your leads to ensure you don’t lose any deals.</p>
      </div>
      
      <div className="j-sec1">
        <img src={Whatsapp} alt="" className='j-sec1img'/>
        <h2 className='j-h2'>Conversation history for every lead</h2>
        <p className='j-secp'>Conversation history for every lead.</p>
      </div>
      </div>
    </div>
  )
}

export default Jalditech
