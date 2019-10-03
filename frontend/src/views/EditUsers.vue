<template>
  <div class="edit-users">
    <div class="users-table-container">
      <Heading level="1">Edit Users</Heading>
      <div class="users-table">
        <EditUsersColumn
          class="row"
          v-for="(user, index) in users"
          :key="index"
          :user="user"
          :index="index"
          @update="updateUser"
        />
      </div>

      <div class="flex-row actions">
        <ActionButton class="save-button" type="positive" @click="addUser">Add</ActionButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Heading from '@/components/Atoms/Heading.vue';
import ActionButton from '@/components/Atoms/ActionButton.vue';
import EditUsersColumn from '@/components/Molecules/EditUsersColumn.vue';

export default Vue.extend({
  components: { Heading, ActionButton, EditUsersColumn },
  data: () => ({}),
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    updateUser(payload: any) {
      this.$store.commit('UpdateUser', payload);
    },
    addUser(): void {
      this.$store.commit('AddUser');
    },
  },
});
</script>

<style lang="scss" scoped>
.edit-users {
  position: relative;
  padding: 32px;
  text-align: center;
}
.users-table-container {
  width: 1000px;
}
.users-table {
  padding: 8px;
  width: 100%;
  background: hsla(0, 0, 100, 1);
  border: 1px solid rgba(0, 0, 0, 0.48);
  border-radius: 4px;
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
}

.flex-row {
  display: flex;
  padding-top: 16px;
  &:first-child {
    padding-top: 0;
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
