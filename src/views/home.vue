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
        <mu-icon-button to="/category/1">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-qiye"></use>
          </svg>
        </mu-icon-button>
        <span>产品使用</span>
      </div>
      <div>
        <mu-icon-button to="/category/2">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yuangong"></use>
          </svg>
        </mu-icon-button>
        <span>售后服务</span>
      </div>
      <div>
        <mu-icon-button to="/category/3">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wendang"></use>
          </svg>
        </mu-icon-button>
        <span>车险知识</span>
      </div>
      <div>
        <mu-icon-button to="/category/4">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-huibao"></use>
          </svg>
        </mu-icon-button>
        <span>其他问题</span>
      </div>
    </div>
    <mu-divider />
    <div class="problem-list">
      <div class="title">常见问题</div>
      <mu-list>
        <template v-for="item in cjlist">
          <mu-list-item :key="item.zzid" :title="item.bt" titleClass="onerow">
            <span class="icon-ask" slot="left">问</span>
            <span slot="describe">{{item.hf}}</span>
            <mu-icon slot="right" value="chevron_right" />
          </mu-list-item>
          <mu-divider shallowInset :key="item.zzid" />
        </template>
      </mu-list>
    </div>
    <div class="problem-list">
      <div class="title">最新问题</div>
      <mu-list>
        <template v-for="item in zxlist">
          <mu-list-item :key="item.zzid" :title="item.bt" titleClass="onerow">
            <span class="icon-ask" slot="left">问</span>
            <span slot="describe">{{item.hf}}</span>
            <mu-icon slot="right" value="chevron_right" />
          </mu-list-item>
          <mu-divider shallowInset :key="item.zzid" />
        </template>
      </mu-list>
    </div>
    <mu-float-button icon="headset" class="service" to="/service" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cjlist: [
        { zzid: 1, bt: '123123123123123123123123123123123123123123', hf: '123123123123123123123123123123123123123123123123' },
        { zzid: 1, bt: '123', hf: '123123123123123123123' },
        { zzid: 1, bt: '123', hf: '123123123123123123123' }
      ],
      zxlist: [
        { zzid: 1, bt: '123123123123123123123123123123123123123123', hf: '123123123123123123123123123123123123123123123123' },
        { zzid: 1, bt: '123', hf: '123123123123123123123' },
        { zzid: 1, bt: '123', hf: '123123123123123123123' }
      ],
    }
  },
  mounted() {

  }
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

.service {
  position: fixed;
  right: 10px;
  bottom: 10px;
}
</style>
