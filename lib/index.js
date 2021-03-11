"use strict";

import ExhaustiveDeps from "./ExhaustiveDeps";

export const configs = {
  recommended: {
    plugins: ["maru"],
    rules: {
      "maru/exhaustive-deps": "warn",
    },
  },
};

export const rules = {
  "exhaustive-deps": ExhaustiveDeps,
};
