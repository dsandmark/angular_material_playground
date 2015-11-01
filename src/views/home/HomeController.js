class HomeController {
    constructor(seriesService) {
        this.series = seriesService.getFullList();
    }
}

export default HomeController;
