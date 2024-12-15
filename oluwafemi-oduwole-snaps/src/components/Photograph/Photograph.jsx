import "./Photograph.scss";
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
const VITE_PORT = import.meta.env.VITE_PORT;

const Photograph = ({ photo }) => {
  console.log(`${VITE_BASE_URL}${VITE_PORT}/${photo.photo}`);

  return (
    <div className="photograph">
      <div className="photograph__image-container">
        <img
          className="photograph__image"
          src={`${VITE_BASE_URL}${VITE_PORT}/${photo.photo}`}
          alt="Photo Description"
        />

        {/* {console.log(`${VITE_BASE_URL}${VITE_PORT}/${photo.photo}`)} */}
        <p className="photograph__photographer">{photo.photographer}</p>
      </div>
      <div className="photograph__tag-list">
        {photo.tags.map((tag, index) => (
          <p key={index} className="photograph__tag">
            <span className="photograph__tag-text">{tag}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Photograph;
