import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import uniqid from "uniqid"
import arrowRight from "../assets/arrow-right-solid.svg"
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import NavBar from './NavBar'
import Footer from './Footer'
import "../css/style.css"

function Home() {
    const [posts, setPosts] = useState([])

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
      }, [])

      function getPosts() {
    
        return posts.map(post => {
          return (
            <div key={uniqid()} className="blog-card">
              <div className="image-featured">
                
               </div>
               <div className="title-block">
                <div className="title">
                  <h3>{post.title}</h3>
                 </div>
                 <div className="date-btn">
                   <span id="date">
                     December,2022
                   </span>
                   <Link to={`/blog/${post.id}`}>
                     <button className='more-btn'><img id='arrow-right' src={arrowRight} alt="arrow right" /></button>
                   </Link>
                 </div>
               </div>
              
             </div>
          )
        })
    
      }

  return (
    <>
        <NavBar />

        <section className='hero'>
        <div className="hero-content">
          <h1> Get some of your hot tech stories here...</h1>
          {/* {posts.map(post => <button id='hero-btn'><Link to={`/blog/${post[0].id}`}>Read more</Link></button>)} */}
          <button id='hero-btn'><Link to='/'>Read more</Link></button>
        </div>
      </section>

<hr />
<h2 id='featured-heading'>Featured blogs</h2>
      <section className="featured-blogs">        
        {getPosts()}
      </section>

<hr />

      <section className='newsletter'>
        <div className="description news-box">
          <h1>Stay in the know</h1>
          <p>Join Kob's blog Newsletter to stay up-to-date
            on what's happening with people in the community
          </p>
          <img src="" alt="" />
        </div>

        <div className="news-sign-up news-box">
          <h2>Join Our Newsletter</h2>

          <form action="/home" method="post">
            <div className="form-box">
              <label htmlFor="email">Email</label>
              <input type="email" name='email' id='email' className='form-input' placeholder='kobby@gmail.com'/>

              <label htmlFor="first-name">First name</label>
              <input type="text" name='first-name' id='first-name' className='form-input' placeholder='Kobby'/>
            
              <label htmlFor="last-name">Last name</label>
              <input type="text" name="last-name" id="last-name" className='form-input' placeholder='Bobby'/>

              <input type="button" value="Submit" className='form-input' id='submit-btn'/>
            </div>

          </form>
        </div>

      </section>

      <Footer />
    </>
  )
}

export default Home