<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <button @click="add">+</button>
      <button @click="subtract">-</button>
    </div>
    <div>State: {{ counter }}</div>
    <div>Getter: {{ getCounter }}</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";

const counterModule = namespace("counter");

@Options({
  name: "Counter",
  props: {
    msg: String
  }
})
export default class Counter extends Vue {
  @Prop({ type: String })
  private msg!: string;

  @counterModule.State("_count")
  private counter!: number;

  @counterModule.Getter("count")
  private getCounter: any;

  @counterModule.Action
  private add: any;

  @counterModule.Action
  private subtract: any;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
