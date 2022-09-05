import { MoreVert } from '@mui/icons-material'
import React, { useState } from 'react'
import './Post.css'
import { Users } from '../../dummyData';

/**
 * １投稿のカード
 * @param {object} param0 post
 * @returns {JSX.Element}
 */
export default function Post({post}) {
    // 引数のPOSTを取得


    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false) // いいねしたかどうかのフラグ

    const handleLike = () => {
        // isLikedがtrueならすでに押されているので-1、その逆は+1
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    const user = Users.filter(user => user.id === post.id)[0] // filterでIDが同じものを取ってくる
    // console.log(user);

    return (
        <article className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={user.profilePicture} alt="投稿アイコン" className='postProfileImg' />
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img src={post.photo} alt="投稿画像" className='postImg' />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="./assets/heart.png" alt="いいねアイコン" className='likeIcon' onClick={() => handleLike()}/>
                        <span className="postLikeCounter">{like}人がいいねをしました</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment}:コメント</span>
                    </div>
                </div>
            </div>
        </article>
    )
}
