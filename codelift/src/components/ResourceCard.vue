<script setup lang="ts">
import type { PropType } from 'vue';
import { type IResource } from "@/types/Resource";

defineProps({
  resource: Object as PropType<IResource>
})

const formatDate = (date: Date = new Date()) =>  new Intl.DateTimeFormat('en-US').format(date);
</script>
<template>
  <div class="resource-card-container">
    <div class="title"> {{ resource?.title }}
      <div class="date">{{ formatDate(resource?.createdAt) }}</div>
    </div>
    <div class="info">
      <div class="difficulty">
        {{ resource?.difficulty }}
      </div>
    </div>
    <div class="description"> {{ resource?.description }}</div>
  </div>
</template>

<style lang="scss" scoped>
.resource-card-container {
  border: 1px solid $secondary-border-color;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 20px 0;

  .title {
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .date {
      font-size: 12px;
    }
  }

  .info {
    .difficulty {
      font-size: 12px;
      font-weight: 600;
      border: 1px solid $primary-border-color;
      border-radius: 5px;
      background: $background-color;
      display: inline;
      padding: 2px 5px;
      
    }
  }

  .description {
    color: $accent-text-color;
    margin-top: 10px;
  }
}
</style>