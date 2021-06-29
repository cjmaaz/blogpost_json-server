import { ref } from '@vue/reactivity'

const getTagList = (tag) => {
    const postList = ref([]);

    const getAllPost = async () => {
        try {
            //Adding wait to simulate a crowdy server
            await new Promise(resolve => {
                setTimeout(resolve, 2000)
            });

            const raw = await fetch('http://localhost:3000/posts');
            const data = await raw.json();
            data.forEach(post => {
                if (post.tags.includes(tag)) {
                    postList.value.push(post);
                }
            });
        } catch (err) {
            console.log(err.message);
        }
    }

    return { postList, getAllPost }
}

export default getTagList;