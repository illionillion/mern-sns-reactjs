import React from 'react'

/**
 * フレンド
 * @param {object} param0 ユーザー
 * @returns {JSX.Element}
 */
export default function Friend({user}) {
  return (
    <li className="sidebarFriend">
        <img 
            src={user.profilePicture} 
            alt={user.username + "フレンドアイコン"} 
            className='sidebarFriendImg'
        />
        <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}
