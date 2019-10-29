<template>
  <div
    class="location"
    :class="{ editable: editable }"
    :style="{ left: location.x + 'px', top: location.y + 'px' }"
  />
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: ['status', 'location'],
  computed: {
    editable() {
      return status === 'editable';
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
});
</script>
<style lang="scss" scoped>
@import '@/styles/colors.scss';

.location {
  position: absolute;
  width: 16px;
  height: 16px;
  background: $white;
  border: 1px solid hsla(200, 80, 30, 1);
  border-radius: 8px;
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 10px;
    height: 10px;
    background: hsla(200, 80, 30, 1);
    border-radius: 5px;
  }
  &.editable {
    cursor: grab;
  }
}
</style>
