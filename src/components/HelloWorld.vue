<template>
  <div class="hello">
    <div class="checkbox-select" v-on-click-outside="closeDropdown">
      <div class="checkbox-select trigger" :class="{ isActive: dropdown }" @click="toggleDropdown" data-testid="displayDropdown">
        <slot v-if="!dropdown" name="label"></slot>
        <span v-show="dropdown" class="checkbox-select title" data-testid="titleOpenedDropdown">TITLE</span>
      </div>

      <div id="dropdown" class="checkbox-select dropdown" v-show="dropdown">
        <ul id="customScroll" class="checkbox-select items-wrapp">
          <li v-for="(item, index) in items" :key="index">
            <div class="checkbox-select">
              {{ item }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { mixin as onClickOutside } from 'vue-on-click-outside';

  export default {
    name: 'HelloWorld',
    mixins: [onClickOutside],
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        dropdown: false
      };
    },
    methods: {
      toggleDropdown() {
        this.dropdown = !this.dropdown;
      },
      closeDropdown() {
        if(this.dropdown) {
          this.dropdown = false;
        }
      }
    }
  };
</script>
