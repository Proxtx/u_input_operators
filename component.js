export class Component {
  constructor(options) {
    this.document = options.shadowDom;
    this.arg1 = this.document.getElementById("arg1");
    this.arg2 = this.document.getElementById("arg2");
    this.arg3 = this.document.getElementById("arg3");
    this.initPromise = this.init();
  }

  async init() {
    await uiBuilder.ready(this.arg1);
    await uiBuilder.ready(this.arg2);
    await uiBuilder.ready(this.arg3);
    await this.arg1.component.inputDefinition({
      type: "number",
      name: "Value 1",
      placeholder: "Value 1",
    });

    await this.arg2.component.inputDefinition({
      type: "number",
      name: "Value 2",
      placeholder: "Value 2",
    });

    await this.arg3.component.inputDefinition({
      type: "select",
      name: "Operation",
      options: [
        "-",
        "+",
        "<",
        ">",
        "/",
        "*",
        "**",
        "%",
        "&&",
        "||",
        "==",
        "===",
        "!=",
        "!==",
      ],
    });
  }

  setConfig(config) {
    this.config = config;
  }

  async setValue(value) {
    await this.initPromise;
    await this.arg1.component.setValue(value.value1);
    await this.arg2.component.setValue(value.value2);
    await this.arg3.component.setValue(value.operation);
  }

  async getValue() {
    return {
      evaluate: true,
      value1: await this.arg1.component.getValue(),
      value2: await this.arg2.component.getValue(),
      operator: await this.arg3.component.getValue(),
      type: "operators",
    };
  }
}
