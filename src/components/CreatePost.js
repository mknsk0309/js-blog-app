import React from 'react'
import './CreatePost.css'

const CreatePost = () => {
  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h2>記事を投稿する</h2>
        <div className="inputPost">
          <div>タイトル</div>
          <input type="text" placeholder="タイトルを入力" />
        </div>
        <div className="inputPost">
          <div>投稿内容</div>
          <textarea placeholder="投稿内容を入力"></textarea>
        </div>
        <button className="postButton">投稿</button>
      </div>
    </div>
  )
}

export default CreatePost
