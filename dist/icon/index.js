"use strict";
Component({
  externalClasses: ["wux-class"],
  properties: {
    type: {
      type: String,
      value: ""
    },
    size: {
      type: [String, Number],
      value: 32,
      observer: "updated"
    },
    color: {
      type: String,
      value: ""
    },
    hidden: {
      type: Boolean,
      value: !1
    }
  },
  data: {
    fontSize: ""
  },
  methods: {
    updated: function(t) {
      var e = 0 < arguments.length && void 0 !== t ? t : this.data.size,
        a = e;
      "number" == typeof e ? a = "".concat(e, "rpx") : "string" == typeof e && (isNaN(Number(e)) || (a = "".concat(e, "rpx"))), this.data.fontSize !== a && this.setData({
        fontSize: a
      })
    }
  },
  attached: function() {
    this.updated()
  }
});