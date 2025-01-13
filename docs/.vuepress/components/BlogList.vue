<template>
  <div class="blog-list">
    <!-- Search and Filter Section -->
    <div class="filters">
      <input 
        v-model="searchQuery" 
        type="text" 
        placeholder="搜索文章..."
        class="search-input"
      >
      <div class="tags">
        <span 
          v-for="tag in tags" 
          :key="tag"
          :class="['tag', { active: selectedTags.includes(tag) }]"
          @click="toggleTag(tag)"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- Blog Posts Grid -->
    <div class="posts">
      <div 
        v-for="post in filteredPosts" 
        :key="post.id"
        class="post-card"
      >
        <div class="post-cover" :style="{ backgroundImage: `url(${post.cover})` }"></div>
        <div class="post-content">
          <h2>{{ post.title }}</h2>
          <div class="post-meta">
            <span class="date">{{ post.date }}</span>
            <span 
              v-for="tag in post.tags" 
              :key="tag"
              class="tag"
            >
              {{ tag }}
            </span>
          </div>
          <p class="description">{{ post.description }}</p>
          <router-link :to="post.link" class="read-more">
            阅读更多
          </router-link>
        </div>
      </div>
    </div>

    <!-- No Results Message -->
    <div v-if="filteredPosts.length === 0" class="no-results">
      没有找到匹配的文章
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogList',
  data() {
    return {
      searchQuery: '',
      selectedTags: [],
      posts: [
        {
          id: 1,
          title: 'Vue.js 开发技巧',
          description: '分享Vue.js开发中的实用技巧和最佳实践',
          date: '2024-01-13',
          tags: ['Vue.js', '前端开发', '最佳实践'],
          cover: '/images/vue-tips.jpg',
          link: '/posts/vue-tips'
        },
        {
          id: 2,
          title: 'TypeScript 入门指南',
          description: 'TypeScript基础知识和进阶技巧',
          date: '2024-01-12',
          tags: ['TypeScript', '前端开发', '教程'],
          cover: '/images/typescript.jpg',
          link: '/posts/typescript-guide'
        },
        {
          id: 3,
          title: '前端性能优化',
          description: '网站性能优化策略和实践',
          date: '2024-01-11',
          tags: ['性能优化', '前端开发', '最佳实践'],
          cover: '/images/performance.jpg',
          link: '/posts/performance'
        }
      ]
    }
  },
  computed: {
    tags() {
      const allTags = this.posts.reduce((tags, post) => {
        return [...tags, ...post.tags]
      }, [])
      return [...new Set(allTags)]
    },
    filteredPosts() {
      return this.posts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            post.description.toLowerCase().includes(this.searchQuery.toLowerCase())
        const matchesTags = this.selectedTags.length === 0 || 
                          this.selectedTags.every(tag => post.tags.includes(tag))
        return matchesSearch && matchesTags
      })
    }
  },
  methods: {
    toggleTag(tag) {
      const index = this.selectedTags.indexOf(tag)
      if (index === -1) {
        this.selectedTags.push(tag)
      } else {
        this.selectedTags.splice(index, 1)
      }
    }
  }
}
</script>

<style scoped>
.blog-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.filters {
  margin-bottom: 2rem;
}

.search-input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.4rem 0.8rem;
  background-color: #f0f0f0;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.tag.active {
  background-color: #3eaf7c;
  color: white;
}

.posts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.post-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.post-card:hover {
  transform: translateY(-5px);
}

.post-cover {
  height: 200px;
  background-size: cover;
  background-position: center;
}

.post-content {
  padding: 1.5rem;
}

.post-meta {
  display: flex;
  gap: 1rem;
  margin: 0.5rem 0;
  color: #666;
}

.description {
  color: #666;
  margin: 1rem 0;
}

.read-more {
  display: inline-block;
  color: #3eaf7c;
  text-decoration: none;
}

.read-more:hover {
  text-decoration: underline;
}

.no-results {
  text-align: center;
  padding: 2rem;
  color: #666;
}

@media (max-width: 768px) {
  .posts {
    grid-template-columns: 1fr;
  }
}
</style>
