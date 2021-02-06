import React, {useState, useEffect} from 'react'
import './style.css'
import Card from '../UI/Card';
import blogPostImages from '../../blogPostImages/memories-from.jpg'
import data from '../../data/blog.json'

export default function BlogPost(props) {
    useEffect(() =>{
        const postId = props.match.params.postId;
    })

    return (
        <div className='blogPostComponent'>
            <Card>
                <div className="blogHeader">
                    <span className="blogCategory">Featured</span>
                    <h1 className="postTitle">Beautiful is always beautiful</h1>
                    <span className="postedBy">posted on july 21, 2016 bySora Blogging tips</span>
                </div>
                <div className="postImageContainer">
                    <img src={blogPostImages} alt="image" />
                </div>
                <div className="postContent">
                    <h3>Post Title</h3>
                    <p>lorem ipsim</p>
                </div>
            </Card>
        </div>

    )
}
