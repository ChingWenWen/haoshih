import styles from "./TypeCardBlue.module.scss";
const TypeCardBlue = ({ item }) => {
  const { imgLink, title, text } = item;
  return (
    <>
      <div
        className={`d-flex justify-content-center p-5 mt-5 font-special ${styles.cardSize}`}
      >
        <div className="col-6">
          <img
            className="rounded-5 h-100 w-100 object-fit-cover"
            src={imgLink}
            alt={title}
          />
        </div>
        <div
          className={`rounded-5 col-6 d-flex flex-column  p-5 ${styles.cardBg}`}
        >
          <h1 className="mb-5 fs-1">{title}</h1>
          <p className={`fs-3 lh-base ${styles.cardText}`}>{text}</p>
        </div>
      </div>
    </>
  );
};
export default TypeCardBlue;
