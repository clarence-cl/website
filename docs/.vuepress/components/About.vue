<template>
  <div class="about">
    <!-- Profile Section -->
    <div class="profile">
      <div class="profile-image">
        <img src="/images/avatar.jpg" alt="Profile Picture" />
      </div>
      <div class="profile-content">
        <h1>About Me</h1>
        <p class="bio">
          I'm a passionate full-stack developer with over 5 years of experience in web development.
          I love creating elegant solutions to complex problems and sharing knowledge with the community.
        </p>
      </div>
    </div>

    <!-- Skills Section -->
    <div class="skills">
      <h2>Skills</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h3>Frontend</h3>
          <ul>
            <li>Vue.js</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>HTML5/CSS3</li>
            <li>Webpack</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Python</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>DevOps</h3>
          <ul>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>AWS</li>
            <li>CI/CD</li>
            <li>Linux</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Experience Section -->
    <div class="experience">
      <h2>Work Experience</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-date">2022 - Present</div>
          <div class="timeline-content">
            <h3>Senior Full Stack Developer</h3>
            <p class="company">Tech Solutions Inc.</p>
            <p>Leading development of enterprise web applications using Vue.js and Node.js</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">2020 - 2022</div>
          <div class="timeline-content">
            <h3>Full Stack Developer</h3>
            <p class="company">Digital Innovations Ltd</p>
            <p>Developed and maintained multiple client projects using React and Python</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">2018 - 2020</div>
          <div class="timeline-content">
            <h3>Frontend Developer</h3>
            <p class="company">WebCraft Studios</p>
            <p>Created responsive and interactive user interfaces for web applications</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.profile {
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 4rem;
}

.profile-image img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.profile-content h1 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.bio {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #34495e;
}

.skills, .experience {
  margin-bottom: 4rem;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.skill-category h3 {
  margin-bottom: 1rem;
  color: #2c3e50;
  text-align: center;
}

.skill-category ul {
  list-style: none;
  padding: 0;
}

.skill-category li {
  padding: 0.5rem 0;
  text-align: center;
  color: #34495e;
}

.timeline {
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: #e0e0e0;
}

.timeline-item {
  display: flex;
  justify-content: center;
  padding: 2rem 0;
}

.timeline-date {
  width: 150px;
  text-align: right;
  padding-right: 2rem;
  font-weight: bold;
  color: #764ba2;
}

.timeline-content {
  width: 50%;
  padding-left: 2rem;
  position: relative;
}

.timeline-content::before {
  content: '';
  position: absolute;
  left: -6px;
  top: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #764ba2;
}

.timeline-content h3 {
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.company {
  color: #666;
  margin-bottom: 0.5rem;
  font-style: italic;
}

@media (max-width: 768px) {
  .profile {
    flex-direction: column;
    text-align: center;
  }

  .timeline::before {
    left: 0;
  }

  .timeline-item {
    flex-direction: column;
  }

  .timeline-date {
    width: 100%;
    text-align: left;
    padding-left: 2rem;
  }

  .timeline-content {
    width: 100%;
    padding-left: 2rem;
  }

  .timeline-content::before {
    left: -6px;
  }
}
</style>
