<template>
  <div id="app">
    <el-header>
      <Header />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <MenuNav />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuNav from "@/components/MenuNav.vue";
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    MenuNav,
    Header,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .el-header {
    padding: 0;
    position: sticky;
    width: 100%;
    top: 0;
    z-index: 999;
    background-color: #ffffff;
  }
  .el-container {
    z-index: 100;
    .el-aside {
      position: fixed;
      top: 60px;
      height: 980px;
      width: 150px !important;
      background-color: rgb(84, 92, 100);
    }
    .el-main {
      margin-left: 160px;
    }
  }
}
</style>
