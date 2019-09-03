// pages/component-tongji/com-tongji.js
import { getOrganizationUnits } from '../../api/hiddenDanger/organizationUnits.js'
var date = require('../../utils/util.js')
var format = date.formatTime
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    lang: 'zh_CN',
    timelabel: null,
    timeinit:[],
    bmlabel: '请选择部门 ',
    organizationList:[],
    renwuList: [
      { title: "一个测试任务", isdone: false, time: "每天一次", user: "ssw" },
      { title: "一个测试任务", isdone: false, time: "每天一次", user: "ssw" },
      { title: "一个测试任务", isdone: false, time: "每天一次", user: "ssw" },
      { title: "一个测试任务", isdone: false, time: "每天一次", user: "ssw" },
      { title: "一个测试任务", isdone: false, time: "每天一次", user: "ssw" },
      { title: "一个测试任务", isdone: false, time: "每天一次", user: "ssw" }
    ],
    bumenList: ['测试', '开发', '测试开发', '开发测试', '测试测试', '测试开发测试开发测试开发测试'],
   
  },
  attached: function () {
    const that=this
    var today = format(new Date())
    that.setData({
      timelabel:today
    })
   //获取部门信息
    getOrganizationUnits().then(res => {
      var result = res.result.items
      var list=[]
      result.forEach(item=>{
        var li = {}
        li.value=item.code
        li.label=item.displayName
        list.push(li)
      })
      that.setData({
        organizationList:list
      })
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onClick() {
      this.setData({ visible: true })
    },
    setValue(values, key, mode) {
      this.setData({
        [`value${key}`]: values.value,
        [`displayValue${key}`]: values.label
      })
    },
    switchBm(e) {
      const { index } = e.currentTarget.dataset
      var values = e.detail
      this.setData({
        bmlval: values.value,
        bmlabel: values.label
      })
    },
    switchTime(e) {
      const { index, mode } = e.currentTarget.dataset
      var values = e.detail
      this.setData({
        timelval: values.value,
        timelabel: values.label
      })
    },
  }
})
