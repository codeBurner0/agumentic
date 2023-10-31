import React, { useState } from 'react'
import '../assets/styles/Trello.css'
import Timg1 from '../assets/images/timg1.png'
import Timg2 from '../assets/images/timg2.png'
import Timg3 from '../assets/images/timg3.png'
function Trello() {
    const [image, setImage] = useState(Timg1)
    return (
        <div className='t-container'>
            <div className='t-sec'>
                <h1 className='t-sec-h1'>A productivity powerhouse</h1>
                <p className='t-sec-p'>Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done. Learn more in our <span className='t-sec-span'>guide for getting started</span>.</p>
            </div>
            <div className="tgrid">
                <div>
                    <div className="t-sec2" onClick={() => setImage(Timg1)}>
                        <h4 className='tsec2-h4'>Boards</h4>
                        <p>Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”</p>
                    </div>
                    <div className="t-sec2" onClick={() => setImage(Timg2)}>
                        <h4 className='tsec2-h4'>Cards</h4>
                        <p>Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.</p>
                    </div>
                    <div className="t-sec2" onClick={() => setImage(Timg3)}>
                        <h4 className='tsec2-h4'>Lists</h4>
                        <p>The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.</p>
                    </div>
                </div>
                <div className="t-sec3">
                    <img src={image} alt="" className='t-sec3-img' />
                </div>
            </div>
            <div className="t-black">
                <h2 className='t-black-h2'>Deliver your best work with monday.com</h2>
                <p className='t-black-p'>No credit card needed   ✦   Unlimited time on Free plan</p>
                <button className="f-button">
                    <span> Get Started </span>
                </button>
            </div>
        </div>
    )
}

export default Trello
