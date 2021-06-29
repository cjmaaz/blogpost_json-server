<template>
  <header>
    <h1>The Blog Post</h1>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Create' }">Add Post</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1080px;
  margin: 0 auto;
  padding: 10px;

  h1 {
    color: #dfdfdf;
    font-size: 48px;
  }
  a {
    color: #bbb;
    text-decoration: none;
    margin-left: 20px;

    &.router-link-active {
      color: #444;
      font-weight: bold;
    }
  }
}
</style>