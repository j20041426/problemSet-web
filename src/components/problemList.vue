<template>
  <div class="problem-list">
    <div class="title">{{title}}</div>
    <mu-list>
      <template v-for="item in list">
        <mu-list-item :key="item.zzid" :title="item.bt" titleClass="onerow" :to="`/detail/${item.zzid}`">
          <ask slot="left" />
          <span slot="describe">{{item.hf}}</span>
          <mu-icon slot="right" value="chevron_right" />
        </mu-list-item>
        <mu-divider shallowInset :key="item.zzid" />
      </template>
    </mu-list>
  </div>
</template>

<script>
import api from '@/apis'
import ask from '@/components/ask'
export default {
  data() {
    return {
      list: []
    }
  },
  props: ['title', 'type'],
  mounted() {
    api.getProblemByStatus({ type: this.type }).then(response => {
      if (response.status == 200) {
        this.list = response.data;
      }
    })
  },
  components: { ask }
}
</script>

<style lang="scss" scoped>
.problem-list {
  padding: 0 .5rem;
  margin-top: 10px;
}
</style>
