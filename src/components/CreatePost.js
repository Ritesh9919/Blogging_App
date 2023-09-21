
import {db} from '../firebaseInit';
import { collection, addDoc, doc, setDoc, getDocs } from "firebase/firestore";
import{useFormInput} from '../hooks';

function CreatePost() {
    const title = useFormInput('');
    const subTitle = useFormInput('');
    const content = useFormInput('');

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("title", title);
        console.log("subtitle", subTitle);
        console.log("content", content);

        const docRef = doc(collection(db, 'blogging-app'));
        await setDoc(docRef, {
            title:title.value,
            subTitle:subTitle.value,
            content:content.value,
            createdAt:new Date()
        })
    }

    return (
        <div className="create-post">
            <h1 className='form-heading'>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label>Title</label>
                    <input {...title} />
                </div>
                <div className="form-field">
                    <label>SubTitle</label>
                    <input {...subTitle} />
                </div>
                <div className="form-field">
                    <label>Content</label>
                    <textarea {...content} rows='10' cols='20'></textarea>
                </div>
                <button className="submit-btn">Create Post</button>
            </form>
        </div>
    )
}

export default CreatePost;