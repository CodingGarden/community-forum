<template>
  <div class="list-group">
    <a
      v-for="category in categories"
      :key="category.id"
      class="list-group-item list-group-item-action flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{category.title}}</h5>
        <!-- <small>3 days ago</small> -->
      </div>
      <p class="mb-1">{{category.description}}</p>
      <!-- <small>Donec id elit non mi porta.</small> -->
    </a>
  </div>
</template>

<script>
export default {
  props: ['categories'],
};
</script>
