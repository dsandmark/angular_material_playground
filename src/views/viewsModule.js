import angular from "angular";

import homeModule from "./home/homeModule";

let viewsModule = angular.module("app.views", [
    homeModule
]);

export default viewsModule.name;
