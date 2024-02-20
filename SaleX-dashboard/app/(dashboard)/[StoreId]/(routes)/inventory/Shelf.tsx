import { Droppable } from "react-beautiful-dnd";
import Product from "./Product";
import { ProductType, ShelfType } from "./page";

const Shelf = ({ shelfId, shelfName, products }: ShelfType) => {
  return (
    <Droppable droppableId={shelfId} key={shelfId}>
      {(provided) => (
        <div
          className="shelf"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div>{shelfName}</div>
          {products.map((product: ProductType, index: number) => (
            <Product
              key={product.id}
              id={product.id}
              image={product.image}
              quantity={product.quantity}
              name={product.name}
              expiryDate={product.expiryDate}
              weight={product.weight}
              index={index}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Shelf;
