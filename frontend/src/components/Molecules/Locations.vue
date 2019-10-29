<template>
  <div class="locations" @click="onclickLocations">
    <Location
      v-for="(location, index) in locations"
      :key="index"
      :location="location"
      @click.native.stop="onClickLocation(index)"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Location from '@/components/Atoms/Location.vue';

export default Vue.extend({
  components: {
    Location,
  },
  props: ['locations'],
  methods: {
    onclickLocations() {
      this.$emit('clickLocations');
    },
    onClickLocation(index: number) {
      this.$emit('clickLocation', index);
    },
  },
});
</script>
<style lang="postcss" scoped>
.locations {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
</style>
