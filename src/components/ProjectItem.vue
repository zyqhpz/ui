<template>
    <article>
        <h3>{{ title }}</h3>
        <img :src="image" alt="photo for the project">
        <p>{{ description }}</p>
        <h4>Tech used: </h4>
        <ul>
          <li v-for="tech in techStack" :key="tech">
            {{ tech }}
          </li>
        </ul>
        <!-- {{ JSON.stringify(project) }} -->
      </article>
</template>

<script>
export default {
    name: 'ProjectItem',
    props: {
        title: String,
        image: String,
        description: String,
        techStack: Array,
    }
}
</script>

<style>
h3 {
    margin-top: 0px;
}
img {
    width: 100%;
    max-width: 400px;
}
.project-item {
    border: 1px solid lightgrey;
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
    max-width: 600px;
}
</style>