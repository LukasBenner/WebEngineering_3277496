<template>
  <article>
    <nuxt-content class="mt-4 prose max-w-none" :document="article" />
  </article>
</template>

<script>
export default {
  layout: 'blog',
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()
    return { article }
  },
  mounted: function () {
    this.$store.dispatch('blog/setTableOfContents', { toc: this.article.toc })
  },
}
</script>

<style>
article {
  display: block;
  margin: 0 auto;
  padding: 50px 30px;
  max-width: 800px;
}

</style>
