const baseUrl = "none";

const api = {
    series: baseUrl + "/series"
};

export default angular.module("app.config", [])
    .constant("API", api)
    .name;
