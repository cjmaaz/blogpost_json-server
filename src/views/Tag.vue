<template>
  <div v-if="postList.length">
    <div class="post" v-for="post in postList" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
    </div>
    <TagCloud :posts="posts" />
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getTagPost from "@/composables/getTagPost.js";
import getPosts from "@/composables/getPosts.js";
import Spinner from "@/components/Spinner.vue";
import TagCloud from "@/components/TagCloud.vue";
import { useRoute } from "vue-router";

export default {
  props: { tag: String },
  components: { Spinner, TagCloud },
  setup() {
    const route = useRoute();
    const { postList, getAllPost } = getTagPost(route.params.tag);
    const { posts, load } = getPosts();
    load();
    getAllPost();
    return { postList, posts };
  },
};
</script>

<style lang="scss" scoped>
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;

  h3 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: #fff;
    margin-bottom: 10px;
    max-width: 400px;

    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background: #ff8800;
      position: absolute;
      z-index: -1;
      padding-right: 40px;
      left: -30px;
      transform: rotateZ(-1deg);
    }
  }
  p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
}
</style>