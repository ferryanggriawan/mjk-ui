import type { App } from "vue";
import clickOutsideDirective from "./click.outside";

export function register(app: App): void {
  clickOutsideDirective(app);
}

const MjkDirective = {
  register,
};

export default MjkDirective;
