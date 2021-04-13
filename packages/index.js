import button from "./button.vue";

const components = {
  button,
};

function install(Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key]);
  });
}

export default install;
