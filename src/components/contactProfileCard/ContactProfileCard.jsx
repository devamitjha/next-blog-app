import React from 'react'

const ContactProfileCard = () => {
  return (
    <StickyBox offsetTop={20} offsetBottom={20} className="personal-container"> 
        <div className="profile-card">
        <div className="avatar-container">
            <img src={ProfilePic} alt="profile"/>
        </div>
        <div className="bio">
            <h3>Amit Jha 👋</h3>
            <p>A Passionate <span>Full Stack Developer</span> 🖥️ & <span>UI/UX Designer </span>having <span>10 years</span> of Experiences over 24+ Country Worldwide.</p>
        </div>
        <div className="btn-group">
            <div className="btn filled bookacall">
                <div className="icon-set">
                <i className="fa fa-phone"/>
                </div>
                <span>Book A Call</span>
            </div>
            <div className="btn outline copyemail">
                <div className="icon-set">
                <i className="fa fa-clone"/>
                </div>
                <span>Copy Email</span>                  
            </div>
        </div>
        <div className="social-section">
            <span className="icon-set">
            <i className="fa fa-facebook"/>
            </span>
            <span className="icon-set">
            <i className="fa fa-github"/>
            </span>
            <span className="icon-set">
            <i className="fa fa-youtube-play"/>
            </span>
            <span className="icon-set">
            <i className="fa fa-linkedin"/>
            </span>
        </div>
        </div>
    </StickyBox>
  )
}

export default ContactProfileCard
