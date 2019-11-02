<template>
  <div class="search-input-container">
    <div class="search-input">
      <TextInput
        class="text-input"
        :value="inputValue"
        :placeholder="placeholder"
        @update="search"
        @focus.native="onFocus"
        @blur.native="onBlur"
      />
      <Icon class="search-icon" icon="search" :size="24" />
    </div>
    <div class="results-container" v-show="focus">
      <div
        class="result"
        v-for="(result, index) in results"
        :key="index"
        @mouseover="selectUser(result.name)"
      >
        <span>{{ result.name }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import TextInput from '@/components/Atoms/TextInput.vue';
import Icon from '@/components/Atoms/Icon.vue';
import Fuse from 'fuse.js';

let fuse: any;

export default Vue.extend({
  components: { TextInput, Icon },
  props: ['placeholder'],
  data() {
    return {
      value: '',
      results: [],
      focus: false,
    };
  },
  computed: {
    inputValue: {
      get(): string {
        return this.value;
      },
      set(value: string): void {
        this.$data.value = value;
      },
    },
  },
  methods: {
    search(value: string) {
      this.results = fuse.search(value);
    },
    onFocus() {
      this.focus = true;
    },
    onBlur() {
      this.focus = false;
    },
    selectUser(userName: string) {
      const userIndex = this.$store.state.users.findIndex((user: any) => {
        return user.name === userName;
      });
      if (userIndex) {
        this.value = userName;
        this.$emit('select-user', userIndex);
      }
    },
  },
  mounted() {
    const users = this.$store.state.users;
    fuse = new Fuse(users, { keys: ['name'] });
  },
});
</script>
<style lang="scss" scoped>
.search-input-container {
  position: relative;
  width: 300px;
}
.search-input {
  position: relative;
}
.text-input {
  width: 100%;
}
.search-icon {
  position: absolute;
  right: 16px;
  top: 0;
  bottom: 0;
  margin: auto;
}
.results-container {
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  max-height: 320px;
  overflow-y: scroll;
  .result {
    width: 100%;
    height: 40px;
    background: #fff;
    line-height: 40px;
    padding-left: 8px;
    cursor: pointer;
    &:hover {
      background: #ddd;
    }
  }
}
</style>
