import Mock from 'mockjs'
export default {
  bootstrap() {
    Mock.mock(/getProblemByStatus/, options => {
      return new Array(3).fill({ zzid: '1', bt: '呵呵呵呵呵呵呵呵呵', hf: '嘿嘿嘿嘿嘿嘿嘿嘿' })
    })

    Mock.mock(/getProblemByCategory/, options => {
      return new Array(10).fill({ zzid: '1', bt: '我是问题我是问题' })
    })

    Mock.mock(/getProblemDetail/, options => {
      return {
        problem: '我是问题我是问题',
        answer: '我是答案我是答案我是答案我是答案我是答案我是答案我是答案我是答案',
        type: '产品使用',
        zzid: 1
      }
    })

  }
}
