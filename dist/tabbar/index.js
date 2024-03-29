"use strict";
var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent")),
  _classNames2 = _interopRequireDefault(require("../helpers/classNames")),
  _checkIPhoneX = require("../helpers/checkIPhoneX");

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}

function _defineProperty(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}(0, _baseComponent.default)({
  relations: {
    "../tabbar-item/index": {
      type: "child",
      observer: function() {
        this.debounce(this.updated)
      }
    }
  },
  properties: {
    prefixCls: {
      type: String,
      value: "wux-tabbar"
    },
    defaultCurrent: {
      type: String,
      value: ""
    },
    current: {
      type: String,
      value: "",
      observer: function(e) {
        this.data.controlled && this.updated(e)
      }
    },
    controlled: {
      type: Boolean,
      value: !1
    },
    theme: {
      type: String,
      value: "balanced"
    },
    position: {
      type: String,
      value: ""
    },
    safeArea: {
      type: Boolean,
      value: !1
    }
  },
  data: {
    tabbarStyle: "",
    activeKey: "",
    keys: []
  },
  computed: {
    classes: ["prefixCls, position", function(e, t) {
      return {
        wrap: (0, _classNames2.default)(e, _defineProperty({}, "".concat(e, "--").concat(t), t))
      }
    }]
  },
  methods: {
    updated: function(e) {
      var t = 0 < arguments.length && void 0 !== e ? e : this.data.activeKey;
      this.data.activeKey !== t && this.setData({
        activeKey: t
      }), this.changeCurrent(t)
    },
    changeCurrent: function(i) {
      var r = this,
        o = this.getRelationNodes("../tabbar-item/index");
      0 < o.length && o.forEach(function(e, t) {
        var a = e.data.key || String(t),
          n = a === i;
        e.changeCurrent(n, a, r.data.theme, o.length)
      }), this.data.keys.length !== o.length && this.setData({
        keys: o.map(function(e) {
          return e.data
        })
      })
    },
    emitEvent: function(e) {
      this.triggerEvent("change", {
        key: e,
        keys: this.data.keys
      })
    },
    setActiveKey: function(e) {
      this.data.controlled || this.updated(e), this.emitEvent(e)
    },
    applyIPhoneXShim: function(e) {
      var t = 0 < arguments.length && void 0 !== e ? e : this.data.position;
      (0, _checkIPhoneX.checkIPhoneX)() && ["bottom", "top"].includes(t) && this.setData({
        tabbarStyle: "".concat(t, ": ").concat(_checkIPhoneX.safeAreaInset[t], "px")
      })
    }
  },
  ready: function() {
    var e = this.data,
      t = e.defaultCurrent,
      a = e.current,
      n = e.controlled ? a : t;
    this.updated(n), this.applyIPhoneXShim()
  }
});