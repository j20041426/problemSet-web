<template>
  <div>
    <mu-appbar title="问题详情">
      <mu-icon-button icon="chevron_left" slot="left" to="/" />
    </mu-appbar>
    <div class="content">
      <mu-divider/>
      <div class="problem">
        <div>
          <div>
            <ask/>
          </div>
          <div style="margin-left:5px;">{{detail.problem}}</div>
        </div>
        <div>
          <shield :first="detail.type" :second="detail.zzid"></shield>
        </div>
      </div>
      <mu-divider/>
      <div class="answer">
        <div>
          <ans/>
        </div>
        <div style="margin-left:5px;">{{detail.answer}}</div>
      </div>
      <mu-divider/>
    </div>
    <div class="more">
      <problem-list title="你可能还想知道" type="xgwt"></problem-list>
    </div>
  </div>
</template>

<script>
import api from '@/apis'
import shield from '@/components/shield'
import ask from '@/components/ask'
import ans from '@/components/ans'
import problemList from '@/components/problemList'
export default {
  data() {
    return {
      detail: {
        problem: '',
        answer: '',
        type: '',
        zzid: ''
      }
    }
  },
  mounted() {
    api.getProblemDetail().then(response => {
      if (response.status == 200) {
        for (let i in this.detail) {
          this.detail[i] = response.data[i] || ''
        }
      }
    })
  },
  components: {
    shield,
    ask,
    ans,
    'problem-list': problemList
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 10px;
  .problem {
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
  }
  .answer {
    padding: 10px 15px;
    display: flex;
  }
}

.problem>div:first-child {
  font-size: 16px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 5px;
}

.more {
  margin-top: 20px;
}
</style>
