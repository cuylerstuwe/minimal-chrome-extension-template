import "../modules/startedLog";
import messageTypesMap from "../modules/messageTypes";
import backgroundListenerModules from "../modules/backgroundListenerModules";

const shouldDebug = true;

const _noop = async () => {};
const _switch = async (pathName, branchesObj, argsObj) => await ((branchesObj[pathName] || branchesObj.default || _noop)(argsObj));

const listenerModuleBranches = [...backgroundListenerModules, {default: _noop}].reduce((acc, module) => ({...acc, ...module}), {});

const listener = async (request, sender, sendResponse) => {
    return await _switch(request.type, listenerModuleBranches, request);
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    listener(request, sender, sendResponse).then((result) => {
        sendResponse(result);
    });
    return true;
});