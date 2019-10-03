<template>
  <div class="search-input">
    <TextInput class="text-input" :value="value" :placeholder="placeholder" />
    <Icon class="search-icon" icon="search" :size="24" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import TextInput from '@/components/Atoms/TextInput.vue';
import Icon from '@/components/Atoms/Icon.vue';
export default Vue.extend({
  components: { TextInput, Icon },
  props: ['value', 'placeholder'],
});
</script>
<style lang="scss" scoped>
.search-input {
  position: relative;
  width: 300px;
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
</style>
