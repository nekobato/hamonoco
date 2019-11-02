<template>
  <div class="maps">
    <div class="map-container">
      <img src="/img/18.png" />
    </div>
    <div class="locations" @click="addLocation">
      <Location
        class="location"
        v-for="(location, index) in locations"
        :key="index"
        :location="location"
        draggable="true"
        @dragstart.native.stop="onDragOver"
        @dragend.native.stop="onDragEnd($event, index)"
        @dragenter.native.stop="onDragOver"
        @click.native.stop="onClickLocation(index)"
      />
    </div>
    <PulldownButton class="map-name">{{ map.title }}</PulldownButton>
    <SearchInput class="search-input" placeholder="Search" @click.native="onClickSearch" />
    <div class="edit-position-field-container">
      <EditLocationField
        v-show="editLocation.isVisible"
        :x="activeLocation.x"
        :y="activeLocation.y"
        :name="''"
        :userId="activeLocation.userId"
        @update-location="onUpdateLocation"
        @click-user="onClickUserPullldown"
      />
    </div>
    <div class="user-search-container" v-show="userSearch.isVisible">
      <UserSearchInput @select-user="onSelectUser" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PulldownButton from '@/components/Atoms/PulldownButton.vue';
import SearchInput from '@/components/Molecules/SearchInput.vue';
import Location from '@/components/Atoms/Location.vue';
import EditLocationField from '@/components/Organisms/EditLocationField.vue';
import UserSearchInput from '@/components/Molecules/UserSearchInput.vue';
// import { maps as mapsApi } from '@/apis';

export default Vue.extend({
  components: { PulldownButton, SearchInput, Location, EditLocationField, UserSearchInput },
  data: () => ({
    users: [],
    editLocation: {
      isVisible: false,
      active: 0,
      location: {},
    },
    userSearch: {
      isVisible: false,
    },
  }),
  computed: {
    map() {
      return this.$store.state.maps[this.$store.state.status.activeMapIndex];
    },
    locations(): any {
      return this.$store.state.locations;
    },
    activeLocation(): any {
      return this.editLocation.isVisible ? this.locations[this.editLocation.active] : {};
    },
  },
  methods: {
    addLocation(e: MouseEvent) {
      this.$store.commit('AddLocation', { x: e.offsetX - 8, y: e.offsetY - 8 });
      this.editLocation.active = this.locations.length - 1;
      this.editLocation.isVisible = true;
    },
    onUpdateLocation(payload: any) {
      let location = this.locations[this.editLocation.active];
      location = Object.assign(location, payload);
    },
    onDragStart(e: DragEvent) {
      (e.target as HTMLElement).style.opacity = '0.4';
    },
    onDragOver(e: DragEvent) {
      console.log('over', e);
    },
    onDragEnd(e: DragEvent, index: number) {
      this.$store.commit('UpdateLocation', {
        index: index,
        newProps: {
          x: this.locations[index].x + e.offsetX - 8,
          y: this.locations[index].y + e.offsetY - 8,
        },
      });
      console.log('end', e);
    },
    onClickLocation(index: number) {
      this.editLocation.active = index;
      this.editLocation.isVisible = true;
    },
    onClickUserPullldown() {
      this.userSearch.isVisible = true;
    },
    onSelectUser(userIndex: number) {
      this.userSearch.isVisible = false;

      this.$store.commit('UpdateLocation', {
        index: this.editLocation.active,
        newProps: {
          userId: userIndex,
        },
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.maps {
  position: relative;
  width: 3000px;
  height: 3000px;
  text-align: left;
}
.map-container {
  min-height: 100%;
  min-width: 100%;
  opacity: 0.6;
}
.map-name {
  position: absolute;
  top: 16px;
  left: 24px;
  width: 230px;
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
  min-height: 100%;
  min-width: 100%;
}
.location {
  position: absolute;
}
.edit-position-field-container {
  position: fixed;
  top: 16px;
  right: 16px;
  width: 320px;
  height: auto;
}
.user-search-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 480px;
  height: 48px;
}
</style>
