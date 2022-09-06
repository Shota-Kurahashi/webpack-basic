import "../stylesheets/main.scss";
import "./reactApp.jsx";
import add from "./add.ts";
import Vue from "vue";
import VueApp from "./VueApp.vue";

console.log(add(3, 9));

new Vue({
  el: "#vue-root",
  render: (h) => h(VueApp),
});
