import React from 'react'
import Post from "./Post";
// import { useCollection } from "react-firebase-hooks/firestore";
// import firebase from "../firebase";

// const db = firebase.firestore();
function Posts({ posts }) {
    // const [realtimePosts, loading, error] = useCollection(
    //     db.collection("posts").orderBy("timestamp", "desc")
    // )

    return (
        <div>
            {/* {realtimePosts ? 
                realtimePosts?.docs.map((post) => (
                    <Post
                    // key 
                    name="Jb Regore"
                    message="Tangina mo"
                    email="jb@gmail.com"
                    timestamp="12-12-12"
                    image="https://firebasestorage.googleapis.com/v0/b/midterm-redux.appspot.com/o/274213862_253831063584385_2282428805788619329_n.jpg?alt=media&token=d4d442a6-8d7f-4abf-88d3-1bc9b34ea282"
                    postImage="https://firebasestorage.googleapis.com/v0/b/facebook-ec154.appspot.com/o/posts%2FhkUFqcLsKFxm0aILtHoA?alt=media&token=b8147086-ac21-4013-9281-1ba3a16aef64"
                />
                )) : (
                    posts.map(post => {
                        <Post
                    // key 
                    name="Jb Regore"
                    message="Tangina mo"
                    email="jb@gmail.com"
                    timestamp="12-12-12"
                    image="https://firebasestorage.googleapis.com/v0/b/midterm-redux.appspot.com/o/274213862_253831063584385_2282428805788619329_n.jpg?alt=media&token=d4d442a6-8d7f-4abf-88d3-1bc9b34ea282"
                    postImage="https://firebasestorage.googleapis.com/v0/b/facebook-ec154.appspot.com/o/posts%2FhkUFqcLsKFxm0aILtHoA?alt=media&token=b8147086-ac21-4013-9281-1ba3a16aef64"
                    })
                )} 
            */}
            {posts.map(post => (
                <Post
                    key={post.id}
                    name={post.name}
                    message={post.message}
                    email={post.email}
                    timestamp={post.timestamp}
                    image={post.image}
                    postImage={post.postImage}
                />
            ))}

        </div>
    )
}

export default Posts