import BaseConfiguration from "../common/BaseConfiguration";

const config: BaseConfiguration = {
  PORT: parseInt(process.env.PORT as string, 10) || 3000,
};

export default config;
