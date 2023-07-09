<template>
    <button class="delete">
    <slot>Remove</slot>
    </button>
</template>

<style>
.delete {
  margin-right: 15px;
  padding: 2px;
  background-color: red;
  color: white;
  border-color: white;
  cursor: pointer;
}
</style>