import Series from "../../models/Series";

class SeriesService {
    constructor() {
        this.series = [];
        this.createMockSeries();
    }

    createMockSeries() {
        const seriesData = [
            {
                name: "series 1",
                actors: ["Actor 1", "Actor 2", "Actor 3"],
                originalRelease: "1994 - 2004"
            },
            {
                name: "series 2",
                actors: ["Actor 1", "Actor 2", "Actor 3"],
                originalRelease: "1991 - 2004"
            },
            {
                name: "series 3",
                actors: ["Actor 1", "Actor 2", "Actor 3"],
                originalRelease: "2002 - 2004"
            }
        ];

        seriesData.forEach((data) => {
            this.series.push(new Series({
                actors: data.actors,
                episodes: [],
                name: data.name,
                originalRelease: data.originalRelease
            }));
        });

        console.log(this.series);
    }

    getFullList() {
        return this.series;
    }
}

export default SeriesService;
