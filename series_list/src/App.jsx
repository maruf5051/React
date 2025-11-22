import { ShowCard } from "./components/showCard";
import "./components/netflix.css";

export const App = () => {
  return (
    <section className="container">
      <h1 className="card-heading">List Of Best Netflix Series</h1>
      <ShowCard />;
    </section>
  );
};
