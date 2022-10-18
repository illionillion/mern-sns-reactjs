import React, { useContext } from 'react'
import './Share.css'
import { Analytics, Face, Gif, Image } from '@mui/icons-material'
import imageRequire from '../../imageRequire'
import { AuthContext } from '../../state/AuthContext'
import { useRef } from 'react'
import axios from 'axios'

export default function Share() {

    const desc = useRef()
    const { user } = useContext(AuthContext)
    const handleSubmit = async e => {
        e.preventDefault()
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        }
        console.log(newPost);

        try {
            // 投稿送信
            await axios.post("/posts", newPost)
            // ページ更新
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='share'>
            <form className="shareWrapper" onSubmit={handleSubmit}>
                <div className="shareTop">
                    <img src={imageRequire(user.profilePicture || "assets/person/noAvatar.png")} alt="" className='shareProfileImg' />
                    <input type="text" className="shareInput" placeholder='今何してん？' ref={desc}/>
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
                    <input type="submit" value="投稿" className="shareButton" />
                </div>
            </form>
        </div>
    )
}
