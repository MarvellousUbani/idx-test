import React from 'react';
import {connect} from 'react-redux';


const ProfilePage = ({currentUser}) => {
    const {profilePictureURL, fullName, email} = currentUser.userAccountInfo;
    return (
        <div className="main-content">
            <div className="main-content-bar row j-between">
                <div className="title col">
                    <h3>Profile</h3>
                </div>
                <div className="logged-in-user col">
                    {fullName}<br/>
                    <small> {fullName}</small>
                    <img src={profilePictureURL} className="res-img" alt="prof-img"/>
                </div>
            </div>
                <div className="main-content-body row">
				<div className="profile-card col">
					<img src={profilePictureURL} className="res-img" alt="profile-img"/>
					<div className="row j-between">
						<div className="col">
							<span><small>Full name</small></span>
							<span> {fullName}</span>
							<span><small>Email</small></span>
							<span> {email}</span>
						</div>
						<div className="col">
							<a href="/">Edit Profile</a>
						</div>
					</div>
					<div className="row">
						<a href="/">Change Password</a>
					</div>
					<div className="row">
						<div className="col mr-1">
							<a href="/">Select App Language</a>
						</div>
						<div className="col">
							<select>
								<option>English</option>
								<option>French</option>
							</select>
						</div>	
					</div>
					<div className="row">
                        <div className="logout-sec">
                            <div className="col">
                            <a href="/logout">Logout</a>
                            </div>
                            <div className="col">
                               <input type="checkbox" name="logout" id="logut" />Logout on all devices
                            </div>
                        </div>
					</div>
				</div>
                

				<div className="recent-likes-col col">
					<h3>Recent Likes</h3>
					<ul>
						<li>Goody</li>
					</ul>
				</div>
		</div>
        </div>
)}


function mapStateToProps({user: {currentUser}}){
    console.log(currentUser)
    return{
      currentUser
    }
  }
  


export default connect(mapStateToProps)(ProfilePage)