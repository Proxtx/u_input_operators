import { resolveInput } from "../../public/api.js";
import config from "@proxtx/config";

export const evaluate = async (value) => {
  return await eval(`(async () => {
    return await resolveInput(
      config.pwd,
      value.value1
    ) ${await resolveInput(config.pwd, value.operator)}
    await resolveInput(config.pwd, value.value2)})()`);
};
