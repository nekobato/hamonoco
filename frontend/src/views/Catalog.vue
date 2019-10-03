<template>
  <div>
    <div class="row" v-for="component in components" :key="component">
      <span class="component-name">{{ component }}</span>
      <component class="component-item" :is="component" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import TextInput from '@/components/Atoms/TextInput.vue';
import Location from '@/components/Atoms/Location.vue';
import PulldownButton from '@/components/Atoms/PulldownButton.vue';
import Avator from '@/components/Atoms/Avator.vue';
import SearchInput from '@/components/Molecules/SearchInput.vue';
import EditLocationField from '@/components/Organisms/EditLocationField.vue';

const components = {
  TextInput,
  Location,
  SearchInput,
  Avator,
  PulldownButton,
  EditLocationField,
};

export default Vue.extend({
  components,
  data: () => ({
    components: Object.keys(components),
  }),
});
</script>
<style lang="scss" scoped>
.row {
  position: relative;
  width: 1000px;
  padding: 8px 0 8px 160px;
  min-height: 80px;
  text-align: left;
  border-bottom: 1px solid hsla(200, 20, 80, 1);
  .component-name {
    position: absolute;
    top: 0;
    left: 0;
    padding: 4px;
    background: hsla(240, 50, 50, 1);
    color: hsla(200, 0, 100, 1);
    font-weight: bold;
  }
}
</style>
