<template>
  <div class="page">
    <h1>Latest Posts</h1>
    <div class="recentPosts">
      <v-card
        v-for="article of articles"
        :key="article.title"
        class="article"
        elevation="3"
        shaped
        :to="{ name: 'blog-slug', params: { slug: article.slug } }"
      >
        <v-card-title>
          {{ article.title }}
        </v-card-title>
        <v-card-text>
          <p>{{ article.description }}</p>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('blog', params.slug)
      .only(['title', 'description', 'slug'])
      .sortBy('createdAt', 'asc')
      .limit(3)
      .fetch()

    return { articles }
  },
}
</script>

<style lang="scss">
.page {
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 30px;
    text-align: center;
  }
  .recentPosts {
    margin: 0 auto;
    max-width: 800px;
    width: min(600px, 100%);
    overflow-y: hidden;
    padding: 1rem;
  }
  .article {
    margin-bottom: 15px;
  }
}
</style>
