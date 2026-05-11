import Button from "./Button";

const Card = (props) => {
  return (
    <>
      <div
        style={{
          padding: "20px",
          margin: "5px",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          width: "fit-content",
        }}
      >
        <div>
          <div>
            <h2 class="text-white text-2xl font-bold pb-2">{props.title}</h2>
            <p class="text-gray-300 py-1">{props.description}</p>
          </div>

          <div>
            <Button text="Details..." />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
