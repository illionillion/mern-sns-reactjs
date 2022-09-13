import { MoreVert } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import './Post.css'
// import { Users } from '../../dummyData';
import imageRequire from '../../imageRequire';
import axios from 'axios';

/**
 * １投稿のカード
 * @param {object} param0 post
 * @returns {JSX.Element}
 */
export default function Post({post}) {
    // 引数のPOSTを取得

    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false) // いいねしたかどうかのフラグ
    const [user, setUser] = useState([])

    // useEffectでDOMにマウント時に一回だけ実行
    useEffect(() => {

    const fetchUser = async () => {
        // プロキシ設定してるのでhttp~は省略
        const response = await axios.get(`/users/${post.userId}`)
        console.log(response);
        setUser(response.data) // 中身を取り出す
    }

    fetchUser()

    }, [])

    const handleLike = () => {
        // isLikedがtrueならすでに押されているので-1、その逆は+1
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    // console.log(user);

    return (
        <article className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={imageRequire(user.profilePicture || 'assets/person/noAvatar.png')} alt="投稿アイコン" className='postProfileImg' />
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    {post.photo ? (<img src={imageRequire(post.photo)} alt="投稿画像" className='postImg' />) : ("")}
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={imageRequire("assets/heart.png")} alt="いいねアイコン" className='likeIcon' onClick={() => handleLike()}/>
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
