<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from "@/components/SinglePost.vue";
import { onMounted } from "@vue/runtime-core";
export default {
  props: {
    posts: Array,
  },
  components: {
    SinglePost,
  },
  setup(props) {
    onMounted(() => {
      //console.log("Component Mounted");
    });
  },
};
</script>

<style lang="scss" scoped>
</style>