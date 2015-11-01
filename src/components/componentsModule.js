import angular from "angular";

import seriesModule from "./series/seriesModule";

let componentsModule = angular.module("app.components", [
    seriesModule
]);

export default componentsModule.name;
