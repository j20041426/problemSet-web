<template>
  <div class="shield">
    <div>{{first}}</div>
    <div>{{second}}</div>
  </div>
</template>

<script>
export default {
  props: ['first', 'second']
}
</script>

<style lang="scss" scoped>
.shield {
  font-size: 10px;
  display: flex;
}

.shield>div {
  padding: 2px 5px;
}

.shield>div:first-child {
  background-color: #66B3FF;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.shield>div:last-child {
  background-color: #4F4F4F;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  color: #fff;
}
</style>
