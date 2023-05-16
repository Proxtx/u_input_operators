import { input } from "../../public/meta.js";
import config from "@proxtx/config";

export const evaluate = async (value) => {
  return await eval(`(async () => {
    return await input.resolveArgument(
      config.pwd,
      value.value1
    ) ${await input.resolveArgument(config.pwd, value.operator)}
    await input.resolveArgument(config.pwd, value.value2)})()`);
};
