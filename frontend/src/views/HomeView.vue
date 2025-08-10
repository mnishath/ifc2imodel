<template>
  <div class="home-view">
    <h1>Welcome to the IFC to iModel Application</h1>
    <p>Please log in to begin.</p>
    <a href="http://localhost:3001/api/auth/login">
        <button>Login with Bentley IMS</button>
    </a>
  </div>
</template>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}
</style>