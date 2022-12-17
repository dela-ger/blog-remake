import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import apple from '../assets/apple.png'
import { db } from "../firebase"
import { collection, getDocs } from 'firebase/firestore'
import NavBar from './NavBar'
import Footer from './Footer'
import "../css/style.css"

function SingleBlog() {
    const [posts, setPosts] = useState([])
    const {postAuthor} = useParams()

    const fetchNews = () => {
        const postsRef = collection(db, 'posts')
        getDocs(postsRef).then((snapshot) => {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({id: doc.id, ...doc.data()})
        })
        setPosts(results);
      })
      } 
  
      useEffect(() => {
        fetchNews()
      },[])

      const detail = posts.find((post) => post.author === postAuthor)

      if(posts.length === 0) {
        return null
      }

  return (
    <>
    <div className="nav">
        <NavBar />
    </div>
        
        <div className='single-container'>
            <div className="single-title">
                <h1>{detail.title}</h1>
            </div>
            <div className="single-apple-img">
                <img src={apple} alt="apple logo from flaticon.com" />
            </div>
            <div className="single-content">
                <p>{detail.content}</p>
            </div>
        </div>

        <Footer />
    
    </>
  )
}

export default SingleBlog