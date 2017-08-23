<template>
  <div class="list-warpper">
    <mu-list>
      <template v-for="item in list">
        <mu-list-item :key="item.zzid" :title="item.bt" titleClass="onerow" :to="`/detail/${item.zzid}`">
          <ask slot="left" />
          <mu-icon slot="right" value="chevron_right" />
        </mu-list-item>
        <mu-divider shallowInset :key="item.zzid" />
      </template>
      <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" />
    </mu-list>
  </div>
</template>

<script>
import api from '@/apis'
import ask from '@/components/ask'
export default {
  data() {
    return {
      loading: false,
      list: []
    }
  },
  methods: {
    loadMore() {
      this.loading = true
      api.getProblemByCategory({ category: this.currType }).then(response => {
        if (response.status == 200) {
          this.list = this.list.concat(response.data)
        }
        this.loading = false
      })
    }
  },
  props: ['type', 'scroller'],
  mounted() {
    this.scroller = this.scroller
    this.loadMore()
  },
  components: { ask }
}
</script>

<style lang="scss" scoped>
.list-warpper {
  margin-bottom: 20px;
}
</style>
