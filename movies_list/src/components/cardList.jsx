export const CardList = (props) => {
  const { img_url, name, description, rating } = props.data;
  return (
    <li>
      <div>
        <img src={img_url} alt={name} height="200px" width="400px" />
      </div>
      <div>
        <h2>Name: {name}</h2>
        <h3>Rating: {rating}</h3>
        <p>Description: {description}</p>
      </div>
    </li>
  );
};
