import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./templates/index.pug");
}

import "./scripts/skills";