import { projectFirestore } from "../firebase/config";

const addPost = (post) => {
    const add = async () => {
        try {
            const res = await projectFirestore.collection('posts').add(post);
        } catch (err) {
            console.log(err.message);
        }
    }
    return add;
}
export default addPost;