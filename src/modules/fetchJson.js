import messageTypes from "./messageTypes";

export default {
    [messageTypes.FETCH_JSON]: async ({url, method}) => {
        const response = await fetch(url, {method: method || "GET"});
        const json = await response.json();
        return json;
    }
};