import { Bookmark, Home, MessageRounded, Notifications, Person, Search, Settings } from '@mui/icons-material'
import React, { useContext } from 'react'
import './Sidebar.css'
import { Users } from '../../dummyData'
import Friend from '../friend/Friend'
import { Link, } from 'react-router-dom'
import { AuthContext } from '../../state/AuthContext'

export default function Sidebar() {
  const { user } = useContext(AuthContext)
  return (
    <nav className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className='sidebarIcon' />
            <Link to="/" style={{textDecoration:"none", color:"#000", width:"100%"}}>
              <span className="sidebarListItemText">ホーム</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Search className='sidebarIcon' />
            <span className="sidebarListItemText">検索</span>
          </li>
          <li className="sidebarListItem">
            <Notifications className='sidebarIcon' />
            <span className="sidebarListItemText">通知</span>
          </li>
          <li className="sidebarListItem">
            <MessageRounded className='sidebarIcon' />
            <span className="sidebarListItemText">メッセージ</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className='sidebarIcon' />
            <span className="sidebarListItemText">ブックマーク</span>
          </li>
          <li className="sidebarListItem">
            <Person className='sidebarIcon' />
            <Link to={`/profile/${user.username}`} style={{textDecoration:"none", color:"#000", width:"100%"}}>
              <span className="sidebarListItemText">プロフィール</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Settings className='sidebarIcon' />
            <span className="sidebarListItemText">設定</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map(user=> (
            <Friend user = {user} key={user.id}/>
          ))}
        </ul>
      </div>
    </nav>
  )
}
