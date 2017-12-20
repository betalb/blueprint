/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

const baseConfig = require("./webpack.config.base");

module.exports = {
    baseConfig,

    COMMON_EXTERNALS: {
        "@blueprintjs/core": {
            "commonjs": "@blueprintjs/core",
            "commonjs2": "@blueprintjs/core",
            "amd": "@blueprintjs/core",
            "root": ["Blueprint", "Core"],
        },
        "@blueprintjs/datetime": {
            "commonjs": "@blueprintjs/datetime",
            "commonjs2": "@blueprintjs/datetime",
            "amd": "@blueprintjs/datetime",
            "root": ["Blueprint", "Datetime"],
        },
        "@blueprintjs/labs": {
            "commonjs": "@blueprintjs/labs",
            "commonjs2": "@blueprintjs/labs",
            "amd": "@blueprintjs/labs",
            "root": ["Blueprint", "Labs"],
        },
        "@blueprintjs/table": {
            "commonjs": "@blueprintjs/table",
            "commonjs2": "@blueprintjs/table",
            "amd": "@blueprintjs/table",
            "root": ["Blueprint", "Table"],
        },
        "classnames": {
            "commonjs": "classnames",
            "commonjs2": "classnames",
            "amd": "classnames",
            "root": "classNames",
        },
        "jquery": {
            "commonjs": "jquery",
            "commonjs2": "jquery",
            "amd": "jquery",
            "root": "$",
        },
        "moment": "moment",
        "moment-timezone": "moment",
        "react": {
            "commonjs": "react",
            "commonjs2": "react",
            "amd": "react",
            "root": "React",
        },
        "react-addons-css-transition-group": {
            "commonjs": "react-addons-css-transition-group",
            "commonjs2": "react-addons-css-transition-group",
            "amd": "react-addons-css-transition-group",
            "root": ["React", "addons", "CSSTransitionGroup"],
        },
        "react-day-picker": {
            "commonjs": "react-day-picker",
            "commonjs2": "react-day-picker",
            "amd": "react-day-picker",
            "root": "DayPicker",
        },
        "react-dom": {
            "commonjs": "react-dom",
            "commonjs2": "react-dom",
            "amd": "react-dom",
            "root": "ReactDOM",
        },
        "tether": {
            "commonjs": "tether",
            "commonjs2": "tether",
            "amd": "tether",
            "root": "Tether",
        },
    },
};
