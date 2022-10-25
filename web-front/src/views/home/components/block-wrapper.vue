<template>
  <div class="block-wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.block-wrapper {
  & {
    font-size: 20px;
    border: solid 0.5px #e6e6e6;
  }
}
</style>
