import "./netflix.css";

export const CardList = (props) => {
  const { img_url, name, rating, description, genre, cast, watch_url } =
    props.data;

  const watch_now_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color: "var(--test)",
    borderRadius: "0.5rem",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const rating_style = rating >= 8.5 ? "supper-hit" : "average";
  return (
    <li className="card">
      <div>
        <img src={img_url} alt={name} height="40%" width="40%" />
      </div>
      <div className="card-content">
        <h2>Name: {name}</h2>
        <h3>
          Rating:
          <span className={`rating ${rating_style}`}>{rating}</span>
        </h3>
        <p>Summery: {description}</p>
        <p>Genre: {genre.join(",")}</p>
        <p>Cast: {cast.join(",")}</p>
        <a href={watch_url}>
          <button style={watch_now_style}>Watch Now</button>
        </a>
      </div>
    </li>
  );
};
