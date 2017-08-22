<template>
  <div class="problem-list">
    <div class="title">{{title}}</div>
    <mu-list>
      <template v-for="item in list">
        <mu-list-item :key="item.zzid" :title="item.bt" titleClass="onerow">
          <span class="icon-ask" slot="left">问</span>
          <span slot="describe">{{item.hf}}</span>
          <mu-icon slot="right" value="chevron_right" />
        </mu-list-item>
        <mu-divider shallowInset :key="item.zzid" />
      </template>
    </mu-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { zzid: 1, bt: '123123123123123123123123123123123123123123', hf: '123123123123123123123123123123123123123123123123' },
        { zzid: 1, bt: '123', hf: '123123123123123123123' },
        { zzid: 1, bt: '123', hf: '123123123123123123123' }
      ]
    }
  },
  props: ['title']
}
</script>

<style lang="scss" scoped>
.problem-list {
  padding: 0 .5rem;
  margin-top: 10px;
}

.icon-ask {
  padding: 3px 3px 0px 3px;
  font-size: 12px;
  background-color: #ffaf32;
  border-radius: 2px;
  margin: auto;
}
</style>
