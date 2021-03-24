<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <app-header
    :title="copy.title"
    :subtitle="copy.subtitle"
    :introduction="copy.introduction"
    />
    <div class="filter-wrapper">
      <div class="input-group">
        <span>Search for terms in project description: </span>
        <input type="text" v-model="search"/>
        <span @click="clearSearch" class="clear">Clear Search</span>
      </div>
      <div class="input-group">
        <span>Filter by tech stack: </span>
        <select v-model="filter.techStack">
          <option value="Vue.JS">Vue.JS</option>
          <option value="Php">PHP</option>
          <option value="Node.JS">Node.JS</option>
        </select>
        <span @click="clearFilter" class="clear">Clear Filter</span>
      </div>
    </div>
    <div v-if="showResultStatement">
      <p>{{ filteredProjects.length }} project{{ filteredProjects.length > 1 ? "s" : ""}} that:</p>
      <ul>
        <li v-if="filter.techStack"> used {{ filter.techStack }} </li>
        <li v-if="search.length > 0"> has a descriptiion containing '{{ search }}'</li>
      </ul>
    </div>
    <div class="project-wrapper">
      <h2>My Past Projects: </h2>
      <project-item
      v-for="project in filteredProjects"
      :key="project.title"
      :title="project.title"
      :image="project.image"
      :description="project.description"
      :techStack="project.techStack"
      />
    </div>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader.vue';
  import ProjectItem from "./components/ProjectItem.vue";
  import {projects, copy} from "./js/state.js";

  export default {
    name: 'PortfolioApp',
    components: {
      ProjectItem,
        AppHeader
    },
      data: () => ({
        projects,
        copy,
        filter: {
          techStack: null
        },
        search: "",
      }),
      computed: {
          showResultStatement() {
          return (this.search.length > 0 || this.filter.techStack);
          },
        filteredProjects() {
          let result = [...this.projects];
          if (this.filter.techStack) {
            result = this.projects.filter(project => project.techStack.includes(this.filter.techStack));
          }
          if (this.search.length > 0) {
            result = this.projects.filter(project => project.description.toLowerCase().includes(this.search.toLowerCase()));
          }
          return result;
        }
      },
      methods: {
        clearFilter() {
          this.filter.techStack = null;
        },
        clearSearch() {
          this.search = "";
        }
      }

    // created() {
    //   setTimeout(() => {
    //     this.copy = {
    //       title: "GONE"
    //     };
    //   }, 2000)
    // } // after 2 sec, dia tukar
  };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  background-color: white;
  padding: 20px;
  margin: 3vh auto;
  max-width: 800px;
}

body {
  background-color:skyblue;
}
.input-group {
  margin: 10px 0;
}
.input-group > * {
  margin-right: 10px;
}
.project-wrapper {
  margin-top: 50px;
}
.clear {
  cursor: pointer;
}
</style>
