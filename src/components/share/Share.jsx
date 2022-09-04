import React from 'react'
import './Share.css'
import { Analytics, Face, Gif, Image } from '@mui/icons-material'

export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="./assets/person/1.jpeg" alt="" />
                <input type="text" className="shareInput" placeholder='今何してん？'/>
            </div>
            <hr className="shareHr" />
            <div className="shareButtons">
                <div className="shareOptions">
                    <div className="shareOption">
                        <Image className='shareIcon'/>
                        <span className="shareOptionText">写真</span>
                    </div>
                    <div className="shareOption">
                        <Gif className='shareIcon'/>
                        <span className="shareOptionText">Gif</span>
                    </div>
                    <div className="shareOption">
                        <Face className='shareIcon'/>
                        <span className="shareOptionText">気持ち</span>
                    </div>
                    <div className="shareOption">
                        <Analytics className='shareIcon'/>
                        <span className="shareOptionText">投票</span>
                    </div>
                </div>
                <input type="button" value="投稿" className="shareButton" />
            </div>
        </div>
    </div>
  )
}
