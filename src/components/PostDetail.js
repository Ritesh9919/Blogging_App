import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {db} from '../firebaseInit';
import {collection, doc, getDoc} from 'firebase/firestore';

function PostDetail () {
    const [post, setPost] = useState({});
    const {postId} = useParams();

    useEffect(()=> {
        async function getPost() {
          const docRef =  doc(db, 'blogging-app', postId);
          const docSnap = await getDoc(docRef);
          const data = docSnap.data();
          setPost(data);
        }
        getPost();
    })
    return (
        <div className="">
         <h1 className="post-heading">Post</h1>
         <h3 className="post-title">{post.title}</h3>
         <div className="posts-details">
        
            <p>{post.content}</p>
        </div>
        </div>
    )
}

export default PostDetail;