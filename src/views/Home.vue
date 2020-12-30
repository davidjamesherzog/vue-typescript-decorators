<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Counter msg="Counter" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Counter from "@/components/Counter.vue";

@Options({
  name: "Home",
  components: {
    HelloWorld,
    Counter
  }
})
export default class Home extends Vue {}
</script>
