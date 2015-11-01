import angular from "angular";

import SeriesService from "./SeriesService";

const seriesModule = angular.module("seriesModule", [])
    .service("seriesService", SeriesService);

export default seriesModule.name;
