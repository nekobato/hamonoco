<template>
  <div class="maps">
    <div class="map-area">
      <img src="http://localhost:5000/resources/zaseki_1908.png" />
    </div>
    <div class="map-title">国会議事堂 衆議院</div>
    <input class="search-input" placeholder="Search" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ResetCSS from "@/components/ResetCSS.vue";

@Component({
  components: { ResetCSS }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.maps {
  position: relative;
}
.map-title {
  position: absolute;
  top: 16px;
  left: 24px;
  padding: 8px;
  font-size: 20px;
  background: hsla(0, 0, 100, 1);
  border: 1px solid rgba(0, 0, 0, 0.48);
  border-radius: 4px;
}
.search-input {
  position: absolute;
  top: 64px;
  left: 24px;
  padding: 8px;
  width: 300px;
  height: 40px;
  background: hsla(0, 0, 100, 1);
  border: 1px solid rgba(0, 0, 0, 0.48);
  border-radius: 4px;
  font-size: 16px;
}
</style>