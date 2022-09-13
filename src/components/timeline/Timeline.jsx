import React, { useState } from 'react'
import { useEffect } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './TimeLine.css'
// import { Posts } from '../../dummyData'
import axios from 'axios'

export default function Timeline() {
const [posts, setPosts] = useState([])

// useEffectでDOMにマウント時に一回だけ実行
useEffect(() => {

  const fetchPosts = async () => {
    // プロキシ設定してるのでhttp~は省略
    const response = await axios.get('/posts/timeline/630880f8e055fa5923ca4094')
    console.log(response);
    setPosts(response.data) // 中身を取り出す
  }

  fetchPosts()

}, [])

  return (
    <section className='timeline'>
      <div className="timelineWrapper">
        <Share />

        {posts.map(post => (
          <Post post = {post} key = {post.id}/>
        ))}
      </div>
    </section>
  )
}
