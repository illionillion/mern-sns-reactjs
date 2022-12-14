import React from 'react'
import imageRequire from '../../imageRequire'
import './Online.css'

/**
 * オンラインの人
 * @param {*} param0 user
 * @returns {JSX.Element}
 */
export default function Online({user}) {
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
            <img src={imageRequire(user.profilePicture)} alt={`${user.username}のアイコン`} className='rightbarProfileImg' />
            <span className="rightbarOnline">{/* ピンクのやつなので空 */}</span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
        </li>
    )
}
