const EXTENSION_NAME = "";
const EXTENSION_DESCRIPTION = "";
const EXTENSION_VERSION = "";

const fs = require("fs");

const packageJsonText = fs.readFileSync("../package.json");
const packageJson = JSON.parse(packageJsonText);

const manifest = {

    "manifest_version": 2,
    "name": EXTENSION_NAME || packageJson.name,
    "description": EXTENSION_DESCRIPTION || packageJson.description,
    "version": EXTENSION_VERSION || packageJson.version,

    "browser_action": {
        "default_icon": {
            "16": "icons/icon16.png",
            "32": "icons/icon32.png",
            "48": "icons/icon48.png",
            "64": "icons/icon64.png"
        },
        "default_title": EXTENSION_NAME || packageJson.name,
        "default_popup": "popup.html"
    },

    "background": {
        "page": "background.html"
    }

};

fs.writeFileSync("../dist/manifest.json", JSON.stringify(manifest));