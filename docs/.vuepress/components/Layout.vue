<template>
  <div class="theme-container">
    <header class="navbar">
      <router-link to="/" class="home-link">
        <img class="logo" src="/logo.png" alt="Logo">
        <span class="site-name">My Website</span>
      </router-link>
      <div class="links">
        <nav class="nav-links">
          <div v-for="item in $site.themeConfig.nav" :key="item.link" class="nav-item">
            <router-link :to="item.link" class="nav-link">{{ item.text }}</router-link>
          </div>
        </nav>
      </div>
    </header>
    <div class="content-wrapper">
      <Content/>
    </div>
    <footer class="footer">
      <div class="footer-content">
        {{ $site.themeConfig.footer || 'Made with ❤️ using VuePress' }}
      </div>
    </footer>
  </div>
</template>

<style>
.theme-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  padding: 0.7rem 1.5rem;
  line-height: 2.2rem;
  position: relative;
  background-color: #fff;
  box-shadow: 0 1px 8px 0 rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
}

.home-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #2c3e50;
}

.logo {
  height: 2.2rem;
  margin-right: 0.8rem;
}

.site-name {
  font-size: 1.3rem;
  font-weight: 600;
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-item {
  margin-left: 1.5rem;
}

.nav-link {
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #3eaf7c;
}

.content-wrapper {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.footer {
  background-color: #f8f9fa;
  padding: 2rem;
  text-align: center;
  color: #666;
}

@media (max-width: 719px) {
  .navbar {
    padding: 0.7rem 1rem;
  }
  
  .nav-links {
    font-size: 0.9rem;
  }
  
  .nav-item {
    margin-left: 1rem;
  }
}
</style>
