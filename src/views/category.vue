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
  </div>
</template>

<script>
export default {
  date(){
    return {
    currType: 'cpsy'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
