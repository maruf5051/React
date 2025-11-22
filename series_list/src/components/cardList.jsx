export const CardList = (props) => {
  const { img_url, name, rating, description, genre, cast, watch_url } =
    props.data;
  return (
    <li>
      <div>
        <img src={img_url} alt={name} height="40%" width="40%" />
      </div>
      <h2>Name: {name}</h2>
      <p>Rating: {rating}</p>
      <p>Summery: {description}</p>
      <p>Genre: {genre}</p>
      <p>Cast: {cast}</p>
      <a href={watch_url}>
        <button>Watch Now</button>
      </a>
    </li>
  );
};
