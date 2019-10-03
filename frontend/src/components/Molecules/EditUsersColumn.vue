<template>
  <div class="row">
    <div class="col image-column">
      <Avator :src="'https://dummyimage.com/48x48/000000/ffffff.png&text=Avator'" />
    </div>
    <div class="col name-column">
      <TextInput :value="user.name" placeholder="Name" @update="updateName" />
    </div>
    <div class="col nickname-column">
      <TextInput :value="user.nickname" placeholder="Nickname" @update="updateNickname" />
    </div>
    <div class="col location-column">
      <a href>Location</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Avator from '@/components/Atoms/Avator.vue';
import TextInput from '@/components/Atoms/TextInput.vue';

export default Vue.extend({
  components: { Avator, TextInput },
  props: ['index', 'user'],
  methods: {
    updateName(name: string) {
      this.$emit('update', { user: { ...this.user, name }, index: this.index });
    },
    updateNickname(nickname: string) {
      this.$emit('update', { user: { ...this.user, nickname }, index: this.index });
    },
  },
});
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  align-items: center;
  grid-template-columns: 120px 240px 240px 1fr;
  padding: 4px 0;
  &.header {
    background: hsla(0, 0, 80, 1);
  }
}
.col {
  padding: 0 4px;
}
</style>
