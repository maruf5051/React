import SeriesData from "../api/seriesData.json";
import { CardList } from "./cardList";

export const MoviesCard = () => {
  return (
    <ul>
      {SeriesData.map((series) => (
        <CardList key={series.id} data={series} />
      ))}
    </ul>
  );
};
