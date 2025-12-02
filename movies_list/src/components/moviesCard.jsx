import SeriesData from "../api/seriesData.json";
import { CardList } from "./cardList";

export const MoviesCard = () => {
  return (
    <ul className="grid grid-three--cols">
      {SeriesData.map((series) => (
        <CardList key={series.id} data={series} />
      ))}
    </ul>
  );
};
