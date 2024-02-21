import { Draggable } from "react-beautiful-dnd";

const Product = ({
  id,
  name,
  image,
  index,
}: any) => {
  return (
    <>
      <Draggable draggableId={id} index={index}>
        {(provided) => (
          <div
            className="card"
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
            style={{
              width: "200px",
              height: "200px",
            }}
          >
            <img src={image} alt={name} className="your-img-classes" />
          </div>
        )}
      </Draggable>
    </>
  );
};

export default Product;
