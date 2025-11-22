import SeriesData from "../api/seriesData.json";
import { CardList } from "./cardList";

export const ShowCard = () => {
  return (
    <ul>
      {SeriesData.map((element) => (
        <CardList key={element.id} data={element} />
      ))}
    </ul>
  );
};
