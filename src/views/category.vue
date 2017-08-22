<template>
  <div>
    <mu-appbar title="问题分类">
      <mu-icon-button icon="chevron_left" slot="left" to="/" />
    </mu-appbar>
    <mu-tabs :value="currType" @change="handleTabChange">
      <mu-tab value="cpsy" title="产品使用" />
      <mu-tab value="shfw" title="售后服务" />
      <mu-tab value="cxzs" title="车险知识" />
      <mu-tab value="qtwt" title="其他问题" />
    </mu-tabs>
    <div v-if="currType === 'cpsy'">
      <mu-list>
        <template v-for="item in lists.cpsy">
          <mu-list-item :key="item.zzid" :title="item.bt" titleClass="onerow">
            <span class="icon-ask" slot="left">问</span>
            <mu-icon slot="right" value="chevron_right" />
          </mu-list-item>
          <mu-divider shallowInset :key="item.zzid" />
        </template>
        <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
      </mu-list>
    </div>
    <div v-if="currType === 'shfw'"></div>
    <div v-if="currType === 'cxzs'"></div>
    <div v-if="currType === 'qtwt'"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currType: '',
      lists: {
        'cpsy': [{ 'zzid': '123', 'bt': '123123123123' }]
      },
      loading: false,
      scroller: null
    }
  },
  methods: {
    handleTabChange(val) {
      this.currType = val
    },
    loadMore(){

    }
  },
  mounted() {
    this.currType = this.$route.params.typeName;
    this.scroller = this.$el;
  }
}
</script>

<style lang="scss" scoped>
.icon-ask {
  padding: 3px 3px 0px 3px;
  font-size: 12px;
  background-color: #ffaf32;
  border-radius: 2px;
  margin: auto;
}
</style>
