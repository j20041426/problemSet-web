<template>
  <div>
    <mu-appbar title="客服首页">
      <mu-icon-button icon="close" slot="left" />
      <mu-icon-menu icon="more_vert" slot="right">
        <mu-menu-item title="设置" to="/setting" />
      </mu-icon-menu>
    </mu-appbar>
    <div class="banner">
      <img src="static/image/1.jpg">
    </div>
    <div class="category">
      <div>
        <mu-icon-button to="/category/cpsy">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-qiye"></use>
          </svg>
        </mu-icon-button>
        <span>产品使用</span>
      </div>
      <div>
        <mu-icon-button to="/category/shfw">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yuangong"></use>
          </svg>
        </mu-icon-button>
        <span>售后服务</span>
      </div>
      <div>
        <mu-icon-button to="/category/cxzs">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wendang"></use>
          </svg>
        </mu-icon-button>
        <span>车险知识</span>
      </div>
      <div>
        <mu-icon-button to="/category/qtwt">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-huibao"></use>
          </svg>
        </mu-icon-button>
        <span>其他问题</span>
      </div>
    </div>
    <mu-divider />
    <problem-list title="常见问题"></problem-list>
    <problem-list title="最新问题"></problem-list>
    <mu-float-button icon="headset" class="service" to="/service" />
  </div>
</template>

<script>
import problemList from '@/components/problemList'

export default {
  data() {
    return {
      cjlist: [
        { zzid: 1, bt: '123123123123123123123123123123123123123123', hf: '123123123123123123123123123123123123123123123123' },
        { zzid: 1, bt: '123', hf: '123123123123123123123' },
        { zzid: 1, bt: '123', hf: '123123123123123123123' }
      ]
    }
  },
  mounted() {

  },
  components: { 'problem-list': problemList }
}
</script>

<style lang="scss" scoped>
.icon {
  width: 1.2rem;
  height: 1.2rem;
  fill: currentColor;
  overflow: hidden;
}

.banner img {
  width: 100%;
}

.category {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 13px;
    }
  }
}

.service {
  position: fixed;
  right: 10px;
  bottom: 10px;
}
</style>
