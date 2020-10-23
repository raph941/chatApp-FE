const { default: store } = require("./store");
const { Action } = require("history");

export const LoggerMiddleWare = store => next => action => {
    console.log('ACTION LOGGED: ', action);
    next(action);
}