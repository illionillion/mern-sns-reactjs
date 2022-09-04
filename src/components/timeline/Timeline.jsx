import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './TimeLine.css'

export default function Timeline() {
  return (
    <section className='timeline'>
      <div className="timelineWrapper">
        <Share />
        <Post />
      </div>
    </section>
  )
}
