<template>
    <div>
        <mu-appbar title="客服首页">
            <mu-icon-button icon="close" slot="left" />
            <mu-icon-menu icon="more_vert" slot="right">
                <mu-menu-item title="设置" />
            </mu-icon-menu>
        </mu-appbar>
        <div class="banner">
            <img src="static/image/1.jpg">
        </div>
        <div class="category">
            <div>
                <mu-icon-button v-link="{path:'category',params:{typeid:1}}">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-qiye"></use>
                    </svg>
                </mu-icon-button>
                <span>产品使用</span>
            </div>
            <div>
                <mu-icon-button v-link="{path:'category',params:{typeid:1}}">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-yuangong"></use>
                    </svg>
                </mu-icon-button>
                <span>售后服务</span>
            </div>
            <div>
                <mu-icon-button v-link="{path:'category',params:{typeid:1}}">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-wendang"></use>
                    </svg>
                </mu-icon-button>
                <span>车险知识</span>
            </div>
            <div>
                <mu-icon-button v-link="{path:'category',params:{typeid:1}}">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-huibao"></use>
                    </svg>
                </mu-icon-button>
                <span>其他问题</span>
            </div>
        </div>
        <div class="problem-list">
            <div class="title">常见问题</div>
            <mu-list>
                <mu-list-item v-for="item in list" :title="item.title" :key="item">
                    <span class="icon-ask" slot="left">问</span>
                    <mu-icon slot="right" value="right"/>
                </mu-list-item>
            </mu-list>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {zzid: 1, title: '123'},
                {zzid: 1, title: '123'},
                {zzid: 1, title: '123'}
            ]
        }
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
}

.category>div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.category>div>span {
    font-size: 13px;
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
</style>
