import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import apple from '../assets/apple.png'
import { db } from "../firebase"
import { collection, getDocs } from 'firebase/firestore'
import NavBar from './NavBar'

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
        <NavBar />

        <div className='single-container'>
        <div className="single-content">
          <h1>{detail.title}</h1>
          <div className="apple-img">
          <img src={apple} alt="apple logo from flaticon.com" />
          </div>
          

          <p>{detail.content}</p>
        </div>
       
      </div>
    </>
  )
}

export default SingleBlog