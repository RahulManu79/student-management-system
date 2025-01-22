const basicInfo = require("./basicInfo");
const components = require("./components");
const tags = require("./tags");

import { auth } from "./Auth/index";
import student from "./Student";
import {admin} from "./Admin/index";

const docs = {
  ...basicInfo,
  ...components,
  ...tags,
  paths: {
    ...auth,
    ...admin,
    ...student
  },
}

export default docs