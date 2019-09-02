import { getProblem } from '../../api/hiddenDanger/problem.js'
import { formatTime } from '../../utils/util.js'
Component({

  properties: {

  },

  data: {
    problemList: [],
    shaixuan: '筛选',
    wentiList: ['全部', '所有', '未完成', '未完成', '未完成', '一解决'],
    options: [{
      value: 'bj',
      label: '北京市',
    }, {
      value: 'zj',
      label: '浙江省',
    }, {
      value: 'gd',
      label: '广东省',
      disabled: true,
    }, {
      value: 'hn',
      label: '测试开发的一个部门',
    }, {
      value: 'cq',
      label: '重庆市',
    }, {
      value: 'sc',
      label: '四川省',
    }]
  },

  created() {
    this.getProblemData()
  },

  methods: {
    proDetail(e) {
      wx.navigateTo({
        url: '/pages/prodetail/prodetail?id=' + e.currentTarget.id,
      })
    },
    getProblemData() {
      getProblem().then(res => {
        var result = res.result
        console.log(result)
        this.setData({
          problemList: result.items
        })
      })
    },
    setValue(values, key, mode) {
      this.setData({
        [`value${key}`]: values.value,
        shaixuan: values.label
      })
    },
    sec(e) {
      const { index } = e.currentTarget.dataset
      this.setValue(e.detail, index)
      console.log(`onConfirm${index}`, e.detail)
    }
    // seclet() {
    //   const that = this
    //   wx.showActionSheet({
    //     itemList: that.data.wentiList,//显示的列表项
    //     success: function (res) {//res.tapIndex点击的列表项
    //       console.log(that.data.wentiList[res.tapIndex])
    //       that.setData({
    //         secletval: that.data.wentiList[res.tapIndex]
    //       })
    //     },
    //     fail: function (res) { },
    //     complete: function (res) { }
    //   })
    // }
  }
})
