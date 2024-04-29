import React, { useState } from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState(null);
  const handleClicked = () => {
    if (email) {
      alert(`Subscribed Successfully by ${email}`)
      setEmail('');
    } else {
      alert(" Invalid Email ")
    }
  }

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)} value={email} />
        <button disabled={!email} type="button" className="custom__button" onClick={handleClicked}>Subscribe</button>
      </div>
    </div>
  )
};

export default Newsletter;
