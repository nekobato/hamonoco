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
        :style="{ left: location.x + 'px', top: location.y + 'px' }"
        draggable="true"
        @dragstart.native.stop="onDragOver"
        @dragend.native.stop="onDragEnd($event, index)"
        @dragenter.native.stop="onDragOver"
        @click.native.stop="onClickLocation(index)"
      />
    </div>
    <PulldownButton class="map-name">{{ map.title }}</PulldownButton>
    <SearchInput class="search-input" placeholder="Search" />
    <div class="edit-position-field-container">
      <EditLocationField
        v-show="editLocation.isVisible"
        :props="activeLocation"
        @update-location="onUpdateLocation"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PulldownButton from '@/components/Atoms/PulldownButton.vue';
import SearchInput from '@/components/Molecules/SearchInput.vue';
import Location from '@/components/Atoms/Location.vue';
import EditLocationField from '@/components/Organisms/EditLocationField.vue';
import { maps as mapsApi } from '@/apis';

export default Vue.extend({
  components: { PulldownButton, SearchInput, Location, EditLocationField },
  data: () => ({
    users: [],
    editLocation: {
      isVisible: false,
      active: 0,
      location: {},
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
    updateLocation() {},
  },
});
</script>

<style lang="scss" scoped>
.maps {
  position: relative;
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
  position: absolute;
  top: 16px;
  right: 16px;
  width: 320px;
  height: auto;
}
</style>
