<template>
  <div class="home">
    <!-- Hero Section -->
    <div class="hero">
      <h1>Welcome to My Website</h1>
      <p class="description">Full-stack developer passionate about web technologies</p>
      <div class="action-buttons">
        <a href="/about/" class="primary-btn">About Me</a>
        <a href="/projects/" class="secondary-btn">View Projects</a>
      </div>
    </div>

    <!-- Features Section -->
    <div class="features">
      <h2>What I Do</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="icon">🚀</div>
          <h3>Frontend Development</h3>
          <p>Building beautiful and responsive user interfaces with Vue.js and React</p>
        </div>
        <div class="feature-card">
          <div class="icon">⚡</div>
          <h3>Backend Development</h3>
          <p>Creating robust server-side applications with Node.js and Python</p>
        </div>
        <div class="feature-card">
          <div class="icon">🛠️</div>
          <h3>DevOps</h3>
          <p>Setting up CI/CD pipelines and managing cloud infrastructure</p>
        </div>
        <div class="feature-card">
          <div class="icon">📱</div>
          <h3>Mobile Development</h3>
          <p>Developing cross-platform mobile applications</p>
        </div>
      </div>
    </div>

    <!-- Latest Posts Section -->
    <div class="latest-posts">
      <h2>Latest Blog Posts</h2>
      <div class="post-grid">
        <div v-for="post in latestPosts" :key="post.title" class="post-card">
          <h3>{{ post.title }}</h3>
          <p>{{ post.description }}</p>
          <a :href="post.link" class="read-more">Read More →</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      latestPosts: [
        {
          title: 'Getting Started with Vue.js',
          description: 'Learn the basics of Vue.js and start building your first application',
          link: '/posts/vue-getting-started'
        },
        {
          title: 'Modern JavaScript Features',
          description: 'Explore the latest features in JavaScript and how to use them',
          link: '/posts/modern-javascript'
        },
        {
          title: 'Web Development Best Practices',
          description: 'Essential best practices for modern web development',
          link: '/posts/web-dev-best-practices'
        }
      ]
    }
  }
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 1rem;
  margin-bottom: 4rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.primary-btn, .secondary-btn {
  padding: 0.8rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.2s;
}

.primary-btn {
  background: white;
  color: #764ba2;
}

.secondary-btn {
  background: transparent;
  border: 2px solid white;
  color: white;
}

.primary-btn:hover, .secondary-btn:hover {
  transform: translateY(-2px);
}

.features, .latest-posts {
  margin-bottom: 4rem;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.post-card {
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.post-card h3 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.read-more {
  display: inline-block;
  margin-top: 1rem;
  color: #764ba2;
  text-decoration: none;
  font-weight: bold;
}

.read-more:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .description {
    font-size: 1.2rem;
  }
  
  .action-buttons {
    flex-direction: column;
  }
  
  .feature-grid, .post-grid {
    grid-template-columns: 1fr;
  }
}
</style>
