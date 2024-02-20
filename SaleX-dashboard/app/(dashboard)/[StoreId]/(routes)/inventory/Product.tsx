import { Draggable } from "react-beautiful-dnd";

const Product = ({
  id,
  name,
  image,
  expiryDate,
  weight,
  quantity,
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
          >
            {id}
            {name}
            {expiryDate}
            {weight}
            {image}
            {quantity}
          </div>
        )}
      </Draggable>
    </>
  );
};

export default Product;
