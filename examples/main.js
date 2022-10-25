/*
 * @Descripttion:
 * @Author: kcz
 * @Date: 2021-05-02 16:04:02
 * @LastEditors: kcz
 * @LastEditTime: 2022-10-25 21:56:47
 */
// 引入@babel/polyfill处理兼容
import "@babel/polyfill";

import Vue from "vue";
import App from "./App.vue";
import router from "./router/";
// import Cmp from "./components/CustomComponent/index.vue";

import "../packages/utils/useComponents";
import { setFormDesignConfig, nodeSchema } from "../packages/mini";
import { KFormDesign } from "../packages/use";

const Cmp = {
  label: "cmp",
  render: function(h) {
    return h("div", "我是自定义组件");
  }
};
setFormDesignConfig({
  title: "测试自定义字段",
  list: [
    {
      type: "demo", // 表单类型
      label: "自定义组件", // 标题文字
      icon: "icon-gallery",
      component: Cmp,
      options: {
        defaultValue: undefined,
        multiple: false,
        disabled: false,
        width: "100%",
        clearable: true,
        placeholder: "请选择",
        showSearch: false,
        showLabel: true
      },
      model: "",
      key: "",
      rules: [
        {
          required: false,
          message: "必填项"
        }
      ]
    }
  ]
});

nodeSchema.setSchemaGroup([
  {
    title: "基础组件",
    list: ["input", "number", "select", "checkbox", "radio", "html"]
  },
  {
    title: "布局组件",
    list: ["divider", "card", "textarea", "tabs", "grid", "table"]
  }
]);

Vue.use(KFormDesign);
// KFormDesign.setFormBuildConfig({
//   dynamicData: {
//     test: [
//       { label: "test", value: "1" },
//       { label: "test1", value: "2" }
//     ]
//   }
// });
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
