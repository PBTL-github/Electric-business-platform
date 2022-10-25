<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  & {
    padding: 20px;
    border: solid 0.5px #e6e6e6;
  }
}
</style>
