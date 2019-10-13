import { createServer } from "http";

import ApplicationServer from "./server";
import config from "./config";

const applicationServer = ApplicationServer.bootstrap();

const server = createServer(applicationServer);

server.listen(config.PORT);
server.on("listening", onListing);

function onListing() {
  console.log("listening on port: ", config.PORT);
}
