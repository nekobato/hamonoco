<template>
  <div class="maps">
    <div class="map-area">
      <img src="/img/18.png" />
    </div>
    <PulldownButton class="map-name">国会議事堂 衆議院</PulldownButton>
    <SearchInput class="search-input" placeholder="Search" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PulldownButton from '@/components/Atoms/PulldownButton.vue';
import SearchInput from '@/components/Molecules/SearchInput.vue';

export default Vue.extend({
  components: { PulldownButton, SearchInput },
});
</script>

<style lang="scss" scoped>
.maps {
  position: relative;
}
.map-name {
  position: absolute;
  top: 16px;
  left: 24px;
}
.search-input {
  position: absolute;
  top: 64px;
  left: 24px;
}
</style>
