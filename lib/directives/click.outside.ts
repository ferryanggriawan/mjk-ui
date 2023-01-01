import type { App } from "vue";

function registerEvent(el: any, binding: any): void {
  el.clickOutsideEvent = function (event: any) {
    const capture = el === event.target || el.contains(event.target);

    if (!capture) {
      binding.value(event, el);
    }
  };

  document.body.addEventListener("click", el.clickOutsideEvent);
}

function clickOutsideDirective(app: App) {
  app.directive("click-outside", {
    mounted(el, binding) {
      registerEvent(el, binding);
    },

    unmounted(el) {
      document.body.removeEventListener("click", el.clickOutsideEvent);
    },
  });
}

export default clickOutsideDirective;
