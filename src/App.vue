<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,400&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
html {
  background-color: #ff723f;
  background-image: linear-gradient(180deg, #ff723f 13%, #fff300 68%);
}
#nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #08aeea;
  background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);
  color: white;
  height: 3rem;
}
#nav a {
  font-size: 1.2rem;
  margin-left: 3rem;
  text-decoration: none;
  color: #424242;
}
.logo {
  display: flex;
  justify-content: center;
  margin-top: 1.2rem;
}
</style>
