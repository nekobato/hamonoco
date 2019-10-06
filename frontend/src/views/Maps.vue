<template>
  <div class="maps">
    <div class="map-area">
      <img src="/img/18.png" />
    </div>
    <div class="locations-container">
      <Location
        class="location"
        v-for="(location, index) in locations"
        :key="index"
        :style="{ left: location.x + 'px', top: location.y + 'px' }"
        @click.native.stop="onClickLocation(index)"
      />
    </div>
    <PulldownButton class="map-name">{{ map.title }}</PulldownButton>
    <SearchInput class="search-input" placeholder="Search" />
    <div class="user-info-container" v-show="userInfo.isVisible">
      <div class="user-info">
        <span>{{ userInfo.data.name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PulldownButton from '@/components/Atoms/PulldownButton.vue';
import Location from '@/components/Atoms/Location.vue';
import SearchInput from '@/components/Molecules/SearchInput.vue';

export default Vue.extend({
  components: { PulldownButton, SearchInput, Location },
  data() {
    return {
      userInfo: {
        isVisible: false,
        locationIndex: 0,
        data: {
          name: '',
        },
      },
    };
  },
  computed: {
    map() {
      return this.$store.state.maps[0];
    },
    locations() {
      return this.$store.state.locations;
    },
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    onClickLocation(index: number) {
      this.userInfo.isVisible = true;
    },
  },
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
  width: 320px;
}
.search-input {
  position: absolute;
  top: 64px;
  left: 24px;
}
.locations {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.location {
  position: absolute;
}
.user-info-container {
  position: fixed;
  right: 16px;
  bottom: 16px;
  width: 320px;
  height: 240px;
  .user-info {
    background: #fff;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.48);
    border-radius: 4px;
  }
}
</style>
