import { MoreVert } from '@mui/icons-material'
import React from 'react'
import './Post.css'

export default function Post() {
  return (
    <article className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src='./assets/person/1.jpeg' alt="投稿アイコン" className='postProfileImg' />
                    <span className="postUsername">illion</span>
                    <span className="postDate">5分前</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">SNS作ってる</span>
                <img src="./assets/post/1.jpeg" alt="投稿画像" className='postImg' />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="./assets/heart.png" alt="いいねアイコン" className='likeIcon' />
                    <span className="postLikeCounter">5人がいいねをしました</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">4:コメント</span>
                </div>
            </div>
        </div>
    </article>
  )
}
