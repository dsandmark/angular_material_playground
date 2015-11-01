import {homeRouteInfo} from "./views/home/homeModule";

function Routes($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
        .state("home", homeRouteInfo);

    $urlRouterProvider.otherwise("/");
}

export default Routes;
