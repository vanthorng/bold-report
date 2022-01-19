<template>
  <div id="app">
     <img alt="Vue logo" src="./assets/logo.png">  
    <ul>
      <li><a href="/report-viewer" target="_self" rel="noopener">Report Viewer</a></li>
      <li><a href="/report-designer" target="_self" rel="noopener">Report Designer</a></li>  
      <li><a href="https://help.boldreports.com/embedded-reporting/javascript-reporting/report-viewer/faq/add-web-report-viewer-to-a-vue-application/" target="_blank" rel="noopener">Getting Started</a></li>        
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App' 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
