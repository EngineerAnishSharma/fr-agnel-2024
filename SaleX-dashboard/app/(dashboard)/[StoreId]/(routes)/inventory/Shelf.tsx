import { Droppable } from "react-beautiful-dnd";
import Product from "./Product";
import { ProductType, ShelfType } from "./page";

const Shelf = ({ shelfId, shelfName, products }: ShelfType) => {
  return (
    <Droppable droppableId={shelfId} key={shelfId}>
      {(provided) => (
        <div
          className="shelf outline-dashed outline-2 m-2 "
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div className="font-bold p-2 rounded-sm bg-inherit text-xl">
            {shelfName}
          </div>
          <div className="inline-flex">
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
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Shelf;
