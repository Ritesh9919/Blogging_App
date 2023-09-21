import { useState, useEffect } from "react";
import { db } from '../firebaseInit';
import { collection, addDoc, doc, setDoc, getDocs } from "firebase/firestore";
import { Link } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const blogSnapshot = await getDocs(collection(db, 'blogging-app'));
            const blogs = blogSnapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });

            setPosts(blogs);

        }
        fetchPosts();
    }, [posts]);

    return (
        <div className="home">
            <h1 className="posts-heading">Tech Blogs</h1>
            <p style={{textAlign:'center', fontStyle:'italic',color:'gray'}}>Ritesh</p>
            {posts.map((post, index) => {
                return (
                    <div id="posts-details" key={`post-${index}`}>
                        <Link to={`/post/${post.id}`}>
                            <h3 className="posts-title">{post.title}</h3>
                        </Link>
                        <p>{post.subTitle}</p>
                        

                    </div>
                )
            })}

        </div>
    )
}

export default Home;