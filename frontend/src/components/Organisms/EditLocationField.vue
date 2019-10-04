<template>
  <div class="edit-position-field">
    <Heading level="2">Position Properties</Heading>
    <div class="flex-row">
      <NumberInput class="position type-x" placeholder="x" :value="props.x" @update="updateX" />
      <NumberInput class="position type-y" placeholder="y" :value="props.y" @update="updateY" />
    </div>
    <div class="flex-row">
      <TextInput placeholder="Name" :value="props.name" @update="updateName" />
    </div>
    <div class="flex-row">
      <PulldownButton placeholder="User" @click.native="onClickUser">{{ userName }}</PulldownButton>
    </div>
    <div class="flex-row actions">
      <ActionButton type="negative">Cancel</ActionButton>
      <ActionButton class="save-button" type="positive">Save</ActionButton>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Heading from '@/components/Atoms/Heading.vue';
import TextInput from '@/components/Atoms/TextInput.vue';
import NumberInput from '@/components/Atoms/NumberInput.vue';
import ActionButton from '@/components/Atoms/ActionButton.vue';
import PulldownButton from '@/components/Atoms/PulldownButton.vue';
import Icon from '@/components/Atoms/Icon.vue';
export default Vue.extend({
  components: { Heading, NumberInput, TextInput, ActionButton, PulldownButton },
  props: ['props'],
  computed: {
    userName() {
      return this.$store.state.users[this.props.userId]
        ? this.$store.state.users[this.props.userId].name
        : 'User';
    },
  },
  methods: {
    updateX(x: number) {
      this.$emit('update-location', { x });
    },
    updateY(y: number) {
      this.$emit('update-location', { y });
    },
    updateName(name: string) {
      this.$emit('update-location', { name });
    },
    updateUser(name: string) {
      this.$emit('update-location', { name });
    },
    onClickUser() {
      this.$emit('click-user');
    },
  },
});
</script>
<style lang="scss" scoped>
@import '@/styles/colors.scss';

.edit-position-field {
  padding: 16px;
  background: $white;
  border: 1px solid #ccc;
}
.flex-row {
  display: flex;
  padding-top: 16px;
  &:first-child {
    padding-top: 0;
  }
}
.position {
  width: 100%;
  &.type-x {
    margin-right: 16px;
  }
}
.actions {
  padding-top: 32px;
}
.save-button {
  margin-left: 8px;
  flex-grow: 1;
}
</style>
