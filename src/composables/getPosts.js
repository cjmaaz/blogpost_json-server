import { ref } from "@vue/reactivity";
import { projectFirestore } from "../firebase/config";

const getPosts = () => {
    const posts = ref([]);

    const load = async () => {
        try {

            const res = await projectFirestore.collection('posts').get();
            posts.value = res.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            })
        } catch (err) {
            console.log(err.message);
        }
    };

    return { posts, load }
}

export default getPosts;