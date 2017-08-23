<template>
  <div class="wrapper">
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
    </div>
    <div id="scroller">
      <div v-show="currType === 'cpsy'">
        <problem-type :type="currType" :scroller="scroller"></problem-type>
      </div>
      <div v-show="currType === 'shfw'">
        <problem-type :type="currType" :scroller="scroller"></problem-type>
      </div>
      <div v-show="currType === 'cxzs'">
        <problem-type :type="currType" :scroller="scroller"></problem-type>
      </div>
      <div v-show="currType === 'qtwt'">
        <problem-type :type="currType" :scroller="scroller"></problem-type>
      </div>
    </div>
  </div>
</template>

<script>
import problemType from '@/components/problemType'
export default {
  data() {
    return {
      currType: '',
      scroller: null
    }
  },
  methods: {
    handleTabChange(val) {
      document.getElementById('scroller').scrollTop = 0
      this.currType = val
    }
  },
  mounted() {
    this.currType = this.$route.params.typeName
    this.scroller = document.getElementById('scroller')
  },
  components: { 'problem-type': problemType }
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  padding: 105px 0 0;
  box-sizing: border-box;
}

.wrapper>div:nth-child(1) {
  margin-top: -105px;
}

.wrapper>div:nth-child(2) {
  height: 100%;
  overflow: auto;
}

.icon-ask {
  padding: 3px 3px 0px 3px;
  font-size: 12px;
  background-color: #ffaf32;
  border-radius: 2px;
  margin: auto;
}
</style>
