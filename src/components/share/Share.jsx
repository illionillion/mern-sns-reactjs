import React, { useContext } from 'react'
import './Share.css'
import { Analytics, Face, Gif, Image } from '@mui/icons-material'
import imageRequire from '../../imageRequire'
import { AuthContext } from '../../state/AuthContext'

export default function Share() {

    const { user } = useContext(AuthContext)

    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={imageRequire(user.profilePicture || "assets/person/noAvatar.png")} alt="" className='shareProfileImg' />
                    <input type="text" className="shareInput" placeholder='今何してん？'/>
                </div>
                <hr className="shareHr" />
                <div className="shareButtons">
                    <div className="shareOptions">
                        <div className="shareOption">
                            {/* MUI、htmlColorで色変えれる */}
                            <Image className='shareIcon' htmlColor='blue'/>
                            <span className="shareOptionText">写真</span>
                        </div>
                        <div className="shareOption">
                            <Gif className='shareIcon' htmlColor='hotpink'/>
                            <span className="shareOptionText">Gif</span>
                        </div>
                        <div className="shareOption">
                            <Face className='shareIcon' htmlColor='green'/>
                            <span className="shareOptionText">気持ち</span>
                        </div>
                        <div className="shareOption">
                            <Analytics className='shareIcon' htmlColor='red'/>
                            <span className="shareOptionText">投票</span>
                        </div>
                    </div>
                    <input type="button" value="投稿" className="shareButton" />
                </div>
            </div>
        </div>
    )
}
