<template>
    <button class="completed">
    <slot>Completed</slot>
    </button>
</template>


<style scoped>
.completed {
  margin-left: 15px;
  padding: 2px;
  background-color: orange;
  color: white;
  border-color: white;
  cursor: pointer;
}
</style>