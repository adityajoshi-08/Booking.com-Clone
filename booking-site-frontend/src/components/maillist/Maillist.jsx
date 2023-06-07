import React from 'react'
import "./Maillist.css"

export default function Maillist() {
  return (
    <div className='mail'>
        <h1 className="mailTitle">
            Save time, save <span className='genius'>money</span>!
        </h1>

        <span className="mailDescription">
            Sign up and we'll send the best deals to you!
        </span>

        <div className="mainInputContainer">
            <input type="email" placeholder='Your email...'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
