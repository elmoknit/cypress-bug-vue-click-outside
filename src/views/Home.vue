<template>
  <div class="home">
    <HelloWorld :items="items">
      <span slot="label" class="checkbox-select title right">
        Click to display
      </span>
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      items: ["foo", "bar", "baz"]
    };
  }
};
</script>
