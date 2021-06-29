<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="posts.length">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import getPosts from "@/composables/getPosts.js";
import Spinner from "@/components/Spinner.vue";
import TagCloud from "@/components/TagCloud.vue";

export default {
  name: "Home",
  components: { PostList, Spinner, TagCloud },
  setup() {
    const { posts, load } = getPosts();
    load();
    return { posts };
  },
};
</script>
<style lang="scss" scoped>
.home {
  max-width: 1080px;
  margin: 0 auto;
  padding: 10px;
}
</style>