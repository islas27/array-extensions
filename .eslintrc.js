module.exports = {
    "extends": "standard",
    "plugins": [
        "standard"
    ],
    "rules": {
        // enable additional rules
        "no-extend-native": "off",
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
        "no-undef": "off"
    }
};
