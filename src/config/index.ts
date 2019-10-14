import BaseConfiguration from "common/BaseConfiguration";

import defaultConfiguration from "./default";

const environment = process.env.NODE_ENV || "development";
const environmentConfiguration = require(`./${environment}`);

export default {
  ...defaultConfiguration,
  ...environmentConfiguration
} as BaseConfiguration;
