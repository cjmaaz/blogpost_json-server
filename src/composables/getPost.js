import { ref } from '@vue/reactivity';
import { projectFirestore } from '../firebase/config';

const getPost = (id) => {
    const post = ref([]);

    const load = async () => {
        try {

            let res = await projectFirestore.collection('/posts').doc(id).get();
            post.value = { ...res.data(), id: res.id };
        } catch (err) {
            console.log(err.message);
        }
    }
    return { post, load };
}

export default getPost;