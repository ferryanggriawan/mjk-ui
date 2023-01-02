import type { App } from "vue";

export const prefix = "M";

function register(app: App): void {
  const requireComponent = import.meta.glob("./components/**/*.vue", { eager: true });

  for (let path in requireComponent) {
    const module: any = requireComponent[path];
    const name: string = getName(module, path, prefix);

    app.component(name, module.default);
  }
}

const ComponentsImport = {
  register,
};

export default ComponentsImport;

function getName(module: any, path: string, prefix: string) {
  const name: string = module?.default?.name;

  if (name == undefined) {
    return path;
  }

  return `${prefix}${name}`;
}
