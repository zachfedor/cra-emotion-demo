module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "react-app",
    "react-app/jest",
    "prettier",
  ],
  // Applies to both TypeScript and JavaScript files
  rules: {
    "import/group-exports": "error",
    "import/no-default-export": "error",
    "import/prefer-default-export": "off",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        controlComponents: ["Input"],
        labelComponents: ["Label"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
  },
};
