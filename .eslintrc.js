"use strict";

module.exports = {
  extends: ["@adfinis-sygroup/eslint-config/ember-addon"],
  rules: {
    "ember/no-new-mixins": "warn",
    "ember/no-mixins": "warn",
  },
  globals: {
    globalThis: "readonly",
  },
};
