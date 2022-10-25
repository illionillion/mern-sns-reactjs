import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './TimeLine.css'
import axios from 'axios'
import { AuthContext } from '../../state/AuthContext'

export default function Timeline({username}) {
const [posts, setPosts] = useState([])
const { user } = useContext(AuthContext)

// useEffectでDOMにマウント時に一回だけ実行
useEffect(() => {

  const fetchPosts = async () => {
    // プロキシ設定してるのでhttp~は省略
    const response = username ?
        await axios.get(`/posts/profile/${username}`) // プロフィールの場合
      : await axios.get(`/posts/timeline/${user._id}`) // ホームの場合
    //  console.log(response);
    setPosts(response.data.sort((post1, post2) => {
      return new Date(post2.createdAt) - new Date(post1.createdAt) // 並び替え
    })) // 中身を取り出す
  }

  fetchPosts()

}, [username])

  return (
    <section className='timeline'>
      <div className="timelineWrapper">
        <Share />

        {posts.map(post => (
          <Post post = {post} key = {post._id}/>
        ))}
      </div>
    </section>
  )
}
