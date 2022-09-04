import React from 'react'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Timeline from '../../components/timeline/TimeLine'
import Topbar from '../../components/topbar/Topbar'
import './Home.css'

export default function Home() {
  return (
    <>
      <Topbar />
      <main className="homeContainer">
        <Sidebar />
        <Timeline />
        <Rightbar />
      </main>
    </>
  )
}