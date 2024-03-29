"use strict";
var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent")),
  _classNames = _interopRequireDefault(require("../helpers/classNames")),
  _utils = require("../popup-select/utils");

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}

function _objectSpread(t) {
  for (var e = 1; e < arguments.length; e++)
    if (e % 2) {
      var n = null != arguments[e] ? arguments[e] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(e) {
        _defineProperty(t, e, n[e])
      })
    } else Object.defineProperties(t, Object.getOwnPropertyDescriptors(arguments[e]));
  return t
}

function _defineProperty(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
var defaults = {
  prefixCls: "wux-select",
  value: "",
  options: [],
  multiple: !1,
  max: -1,
  toolbar: {
    title: "请选择",
    cancelText: "取消",
    confirmText: "确定"
  },
  onChange: function() {},
  onConfirm: function() {},
  onCancel: function() {}
};

function runCallbacks(e, t, n) {
  var i = t.value,
    o = n.data,
    r = o.options,
    l = o.multiple,
    s = (0, _utils.getSelectIndex)(r, i, l);
  "function" == typeof n.fns[e] && n.fns[e].call(n, i, s, r)
}(0, _baseComponent.default)({
  useFunc: !0,
  data: defaults,
  methods: {
    open: function(e) {
      var t = 0 < arguments.length && void 0 !== e ? e : {},
        n = this.$$mergeOptionsAndBindMethods(Object.assign({}, defaults, t, {
          max: parseInt(t.max)
        }));
      this.$$setData(_objectSpread({
        visible: !0
      }, n))
    },
    close: function(e) {
      this.select = this.select || this.selectComponent("#wux-popup-select"), this.select && this.select.close(e)
    },
    onConfirm: function(e) {
      return runCallbacks("onConfirm", e.detail, this)
    },
    onCancel: function(e) {
      return runCallbacks("onCancel", e.detail, this)
    },
    onValueChange: function(e) {
      return runCallbacks("onChange", e.detail, this)
    },
    onVisibleChange: function(e) {
      this.$$setData({
        visible: e.detail.visible
      })
    }
  }
});