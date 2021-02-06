import React from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPostImages from '../../blogPostImages/ima.png';

export default function Sidebar() {
    return (

        <div className="sidebarContainer">
            <Card style={{marginBottom: '20px', padding: '20px', boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>About Us</span>
                    <div className="profileImageContainer">
                        <img src={blogPostImages} alt="avatar" />
                    </div>
                    <div className="cardBody" >
                        <p className="personalBio">I'm Nhat Khoa. I'm a web developer junior specialization in Front end development :))</p>
                    </div>
                </div>
            </Card>
            <Card style={{marginBottom: '20px', padding: '20px', boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card>
            <Card style={{marginBottom: '20px', padding: '20px', boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>Recent post</span>
                </div>
                <div className="recentPosts">
                    <div className="recentPost">
                        <h3 className="recentPostTitle">Post title</h3>
                        <span>July 21, 2021</span>
                    </div>
                </div>
                <div className="recentPosts">
                    <div className="recentPost">
                        <h3 className="recentPostTitle">Post title</h3>
                        <span>July 21, 2021</span>
                    </div>
                </div>
            </Card>
        </div>      
    )
}
