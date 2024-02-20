"use client";
import React, { useEffect, useState } from "react";
import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";
import "./inventory.css";
import toast, { Toaster } from "react-hot-toast";
import Product from "./Product";
import Shelf from "./Shelf";

export type ShelfType = {
  shelfName: string;
  shelfId: string;
  products: ProductType[];
};

export type ProductType = {
  id: string;
  name: string;
  expiryDate: string;
  image: string;
  quantity: number;
  weight: string;
};

const data: ShelfType[] = [
  {
    shelfName: "inventory",
    shelfId: "inventory",
    products: [
      {
        id: "1",
        name: "mango",
        expiryDate: "10-11-2024",
        weight: "5",
        image: "image",
        quantity: 5,
      },
      {
        id: "2",
        name: "apple",
        expiryDate: "12-31-2024",
        weight: "3",
        image: "image",
        quantity: 3,
      },
      {
        id: "3",
        name: "banana",
        expiryDate: "11-30-2024",
        weight: "2",
        image: "image",
        quantity: 2,
      },
    ],
  },
  {
    shelfName: "shelfOne",
    shelfId: "1",
    products: [
      {
        id: "4",
        name: "parle G",
        expiryDate: "09-30-2024",
        weight: "4",
        image: "image",
        quantity: 4,
      },
    ],
  },
  {
    shelfName: "shelfTwo",
    shelfId: "2",
    products: [
      {
        id: "5",
        name: "Apple",
        expiryDate: "12-31-2024",
        weight: "1",
        image: "image",
        quantity: 10,
      },
      {
        id: "6",
        name: "Banana",
        expiryDate: "12-31-2024",
        weight: "2",
        image: "image",
        quantity: 8,
      },
      {
        id: "7",
        name: "Orange",
        expiryDate: "12-31-2024",
        weight: "3",
        image: "image",
        quantity: 6,
      },
    ],
  },
];

const Page = () => {
  const [shelfs, setShelfs] = useState<ShelfType[]>(data);
  const [showInventory, setShowInventory] = useState(true);
  const [newShelf, setNewShelf] = useState<ShelfType>({
    shelfName: "",
    shelfId: "",
    products: [],
  });
  const [newProduct, setNewProduct] = useState<ProductType>({
    id: "",
    name: "",
    expiryDate: "",
    image: "",
    quantity: 0,
    weight: "",
  });

  const handleDragAndDrop = (result: any) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId) return;

    const productSourceGroupIndex = shelfs.findIndex(
      (shelf) => shelf.shelfId === source.droppableId
    );
    const productDestinationGroupIndex = shelfs.findIndex(
      (shelf) => shelf.shelfId === destination.droppableId
    );

    const newSourceItems = [...shelfs[productSourceGroupIndex].products];
    const newDestinationItems = [
      ...shelfs[productDestinationGroupIndex].products,
    ];

    const [draggedItem] = newSourceItems.splice(source.index, 1);
    newDestinationItems.splice(destination.index, 0, draggedItem);

    const newShelfs = [...shelfs];
    newShelfs[productSourceGroupIndex] = {
      ...shelfs[productSourceGroupIndex],
      products: newSourceItems,
    };
    newShelfs[productDestinationGroupIndex] = {
      ...shelfs[productDestinationGroupIndex],
      products: newDestinationItems,
    };
    setShelfs(newShelfs);
  };

  useEffect(() => {
    console.log(shelfs);
  }, [shelfs]);

  const handleAddShelf = () => {
    if (newShelf.shelfName === "") return;
    const lastShelfId =
      shelfs.length > 0 ? parseInt(shelfs[shelfs.length - 1].shelfId) : -1;
    const newShelfId = (lastShelfId + 1).toString();
    const updatedShelfs = [
      ...shelfs,
      { ...newShelf, shelfId: newShelfId, products: [] },
    ];
    setShelfs(updatedShelfs);
    setNewShelf({ shelfName: "", shelfId: "", products: [] });
  };

  const handleAddProduct = () => {
    if (
      newProduct.name === "" ||
      newProduct.expiryDate === "" ||
      newProduct.weight === "" ||
      newProduct.image === "" ||
      newProduct.quantity === 0
    ) {
      if (newProduct.name === "") {
        toast.error("Product name is empty");
      }
      if (newProduct.expiryDate === "") {
        toast.error("Expiry date is empty");
      }
      if (newProduct.weight === "") {
        toast.error("Weight is empty");
      }
      if (newProduct.image === "") {
        toast.error("Image is empty");
      }
      if (newProduct.quantity === 0) {
        toast.error("Quantity is empty");
      }
      return;
    }

    const lastProductId = Math.max(
      ...shelfs.flatMap((shelf) =>
        shelf.products.map((product) => parseInt(product.id))
      )
    );
    const newProductId = (lastProductId + 1).toString();

    const updatedInventory = shelfs.find(
      (shelf) => shelf.shelfName === "inventory"
    );
    if (updatedInventory) {
      const updatedProducts = [
        ...updatedInventory.products,
        { ...newProduct, id: newProductId },
      ];
      const updatedShelfs = shelfs.map((shelf) => {
        if (shelf.shelfName === "inventory") {
          return { ...shelf, products: updatedProducts };
        }
        return shelf;
      });
      setShelfs(updatedShelfs);
      setNewProduct({
        id: "",
        name: "",
        expiryDate: "",
        image: "",
        quantity: 0,
        weight: "",
      });
    }
  };

  useEffect(() => {
    console.log(newProduct);
  }, [newProduct]);

  return (
    <>
      <button onClick={() => setShowInventory(!showInventory)}>
        Show Inventory
      </button>
      <input
        type="text"
        value={newShelf.shelfName}
        placeholder="Enter shelf name"
        onChange={(e) =>
          setNewShelf({ ...newShelf, shelfName: e.target.value })
        }
      />
      <button onClick={handleAddShelf}>Add Shelf</button>

      <br />
      <br />
      <br />

      <input
        type="text"
        placeholder="Enter product name"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />

      <input
        type="text"
        placeholder="Enter expiry date"
        value={newProduct.expiryDate}
        onChange={(e) =>
          setNewProduct({ ...newProduct, expiryDate: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Enter weight"
        value={newProduct.weight}
        onChange={(e) =>
          setNewProduct({ ...newProduct, weight: e.target.value })
        }
      />

      <input
        className="target"
        accept="image/*"
        placeholder="Enter image url"
        type="file"
        onChange={(e) =>
          setNewProduct({ ...newProduct, image: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Enter quantity"
        value={newProduct.quantity}
        onChange={(e) =>
          setNewProduct({ ...newProduct, quantity: parseInt(e.target.value) })
        }
      />

      <button onClick={handleAddProduct}>Add Product</button>

      <DragDropContext onDragEnd={handleDragAndDrop}>
        <div className="wrapper">
          <div className="shelfsContainer">
            {shelfs
              .filter((shelf: ShelfType) => shelf.shelfName !== "inventory")
              .map((shelf) => (
                <Shelf
                  key={shelf.shelfId}
                  shelfId={shelf.shelfId}
                  shelfName={shelf.shelfName}
                  products={shelf.products}
                />
              ))}
          </div>

          <Droppable droppableId="inventory">
            {(provided) => (
              <div
                className={`inventory ${showInventory ? "visible" : "hidden"}`}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {shelfs
                  .find((shelf: ShelfType) => shelf.shelfName === "inventory")
                  ?.products.map((product: ProductType, index: number) => (
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
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </>
  );
};

export default Page;
