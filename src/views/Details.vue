<template>
  <div class="post" v-if="post.id">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from "@/composables/getPost.js";
import Spinner from "@/components/Spinner.vue";
import { useRoute } from "vue-router";

export default {
  props: {
    id: String,
  },
  components: {
    Spinner,
  },
  setup(props) {
    const route = useRoute();
    const { post, load } = getPost(route.params.id);
    load();

    return { post };
  },
};
</script>

<style lang='scss' scoped>
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