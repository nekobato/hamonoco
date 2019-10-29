<template>
  <div class="maps">
    <div class="map-area">
      <img src="/img/18.png" />
    </div>
    <Locations
      :locations="locations"
      @clickLocations="onClickMap"
      @clickLocation="onClickLocation"
    />
    <PulldownButton class="map-name">国会議事堂 衆議院</PulldownButton>
    <SearchInput class="search-input" placeholder="Search" />
    <div class="location-detail" v-show="targetLocation.isVisible">
      <div class="edit-position-field">
        <Heading level="2">{{ targetLocation.user.name }}</Heading>
        <div class="flex-row">
          <span>X: {{ targetLocation.location.x }}</span>
          <span>Y: {{ targetLocation.location.y }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PulldownButton from '@/components/Atoms/PulldownButton.vue';
import Locations from '@/components/Molecules/Locations.vue';
import SearchInput from '@/components/Molecules/SearchInput.vue';
import Heading from '@/components/Atoms/Heading.vue';

export default Vue.extend({
  components: { PulldownButton, SearchInput, Locations, Heading },
  data: () => ({
    targetLocation: {
      isVisible: false,
      user: {
        name: '',
      },
      location: {
        x: 0,
        y: 0,
      },
    },
  }),
  computed: {
    locations(): any {
      return this.$store.state.locations;
    },
  },
  methods: {
    onClickLocation(index: number) {
      this.targetLocation = {
        isVisible: true,
        user: {
          name: '未設定',
        },
        location: {
          x: this.locations[index].x,
          y: this.locations[index].y,
        },
      };
    },
    onClickMap() {
      this.targetLocation.isVisible = false;
    },
  },
});
</script>

<style scoped>
.maps {
  position: relative;
}
.map-name {
  position: absolute;
  top: 16px;
  left: 24px;
  width: 320px;
}
.search-input {
  position: absolute;
  top: 64px;
  left: 24px;
}
.location-detail {
  position: fixed;
  top: 16px;
  right: 16px;
  padding: 16px;
  width: 320px;
  height: auto;
  background: #fff;
  border: 1px solid #666;
  border-radius: 8px;
}
</style>
