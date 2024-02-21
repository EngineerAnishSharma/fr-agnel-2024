"use client";
import React, { useEffect, useState } from "react";
import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";
import "./inventory.css";
import toast, { Toaster } from "react-hot-toast";
import Product from "./Product";
import Shelf from "./Shelf";
import TestModal from "./TestModal";

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
        image: "https://freepngimg.com/thumb/mango/1-2-mango-png-thumb.png",
        quantity: 5,
      },
      {
        id: "2",
        image:
          "https://www.freepnglogos.com/uploads/potato-chips-png/lays-potato-chips-buy-lays-lays-potato-chips-product-12.png",
        name: "lays",
        expiryDate: "10-11-2024",
        weight: "2",
        quantity: 3,
      },
      {
        id: "3",
        name: "banana",
        expiryDate: "11-30-2024",
        weight: "2",
        image: "https://clipart-library.com/image_gallery2/Banana.png",
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
        expiryDate: "09-30-2024",
        image:
          "https://www.freeiconspng.com/thumbs/coca-cola-png/bottle-coca-cola-png-transparent-2.png",
        name: "Coca Cola",
        quantity: 10,
        weight: "1",
      },
    ],
  },
  {
    shelfName: "shelfTwo",
    shelfId: "2",
    products: [
      {
        id: "5",
        name: "Orange",
        expiryDate: "12-31-2024",
        weight: "1",
        image: "https://clipart-library.com/img/990750.png",
        quantity: 10,
      },
    ],
  },
];

const Page = () => {
  const [shelfs, setShelfs] = useState<ShelfType[]>(data);
  const [isShellModalOpen, setIsShellModalOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const [showInventory, setShowInventory] = useState(true);
  const [newShelf, setNewShelf] = useState<ShelfType>({
    shelfName: "",
    shelfId: "",
    products: [],
  });
  //MODAL
  const openShellModal = () => {
    setIsShellModalOpen(true);
  };

  const closeShellModal = () => {
    setIsShellModalOpen(false);
  };
  const openProductModal = () => {
    setIsProductModalOpen(true);
  };

  const closeProductModal = () => {
    setIsProductModalOpen(false);
  };

  const handleShellConfirm = () => {
    // Handle confirm logic here
    console.log("Confirmed!");
    closeShellModal();
  };

  const handleShellCancel = () => {
    // Handle cancel logic here
    console.log("Cancelled!");
    closeShellModal();
  };

  const handleProductConfirm = () => {
    // Handle confirm logic here
    console.log("Confirmed!");
    closeProductModal();
  };

  const handleProductCancel = () => {
    // Handle cancel logic here
    console.log("Cancelled!");
    closeProductModal();
  };
  //MODAL ENDS
  //SEHLF BACKGROUND
  const shelfbackground = {
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
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
      <div className="flex justify-center items-center">
        <button
          className="m-2 relative rounded px-5 py-2.5 overflow-hidden group bg-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
          onClick={() => setShowInventory(!showInventory)}
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          {!showInventory ? "Show Inventory" : "Hide Inventory "}
        </button>

        <div>
          <button
            data-modal-target="popup-modal"
            data-modal-toggle="popup-modal"
            className="m-2   rounded px-5 py-2.5 overflow-hidden group bg-zinc-500 hover:bg-gradient-to-r hover:from-zinc-500 hover:to-zinc-400 text-white hover:ring-2 hover:ring-offset-2 hover:zinc-green-400 transition-all ease-out duration-300"
            onClick={openShellModal}
          >
            <span className=" right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            Add Shelf
          </button>
          <div className="">
            <div
              id="popup-modal"
              tabIndex={-1}
              className={`${
                isShellModalOpen ? "fixed" : "hidden"
              } overflow-hidden overflow-x-hidden top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0  h-screen bg-gray-800 bg-opacity-50`}
            >
              <div className="h-screen flex justify-center items-center p-4 w-full ">
                <div className=" bg-white rounded-lg  backdrop-blur shadow dark:bg-gray-700">
                  <button
                    type="button"
                    className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="popup-modal"
                    onClick={closeShellModal}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <div className="p-4  justify-center items-center md:p-5 text-center">
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Add this Shelf:
                    </h3>
                    <div className="flex py-4 justify-center items-center">
                      <input
                        type="text"
                        className="bg-[#f2f4f6] placeholder:text-zinc-500 px-4 h-10 rounded-sm border border-zinc-200"
                        value={newShelf.shelfName}
                        placeholder="Enter shelf name"
                        onChange={(e) =>
                          setNewShelf({
                            ...newShelf,
                            shelfName: e.target.value,
                          })
                        }
                      />
                    </div>

                    <button
                      data-modal-hide="popup-modal"
                      type="button"
                      className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                      onClick={handleAddShelf}
                    >
                      Yes, I'm sure
                    </button>
                    <button
                      data-modal-hide="popup-modal"
                      type="button"
                      className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      onClick={handleShellCancel}
                    >
                      No, cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* <button
        data-modal-target="popup-modal"
        data-modal-toggle="popup-modal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={openModal}
      >
Add Product 
      </button> */}
          <button
            data-modal-target="popup-modal"
            data-modal-toggle="popup-modal"
            className="m-2   rounded px-5 py-2.5 overflow-hidden group bg-zinc-500 hover:bg-gradient-to-r hover:from-zinc-500 hover:to-zinc-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-zinc-400 transition-all ease-out duration-300"
            onClick={openProductModal}
          >
            <span className=" right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            Add Product
          </button>
          <div className="">
            <div
              id="popup-modal"
              tabIndex={-1}
              className={`${
                isProductModalOpen ? "fixed" : "hidden"
              } overflow-hidden overflow-x-hidden top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0  h-screen bg-gray-800 bg-opacity-50`}
            >
              <div className="h-screen flex justify-center items-center p-4 w-full ">
                <div className=" bg-white rounded-lg  backdrop-blur shadow dark:bg-gray-700">
                  <button
                    type="button"
                    className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="popup-modal"
                    onClick={closeProductModal}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <div className="p-4  justify-center items-center md:p-5 text-center">
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Add this Product?
                    </h3>
                    <div className="flex max-w-4xl mx-auto flex-col gap-4 py-4 justify-center items-center">
                      <input
                        type="text"
                        value={newProduct.name}
                        onChange={(e) =>
                          setNewProduct({ ...newProduct, name: e.target.value })
                        }
                        className="bg-[#f2f4f6] w-full placeholder:text-zinc-500 px-4 h-10 rounded-sm border border-zinc-200"
                        placeholder="Enter product name"
                      />
                      <input
                        type="text"
                        placeholder="Enter expiry date"
                        value={newProduct.expiryDate}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            expiryDate: e.target.value,
                          })
                        }
                        className="bg-[#f2f4f6] w-full placeholder:text-zinc-500 px-4 h-10 rounded-sm border border-zinc-200"
                      />
                      <input
                        type="text"
                        placeholder="Enter weight"
                        value={newProduct.weight}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            weight: e.target.value,
                          })
                        }
                        className="bg-[#f2f4f6] w-full placeholder:text-zinc-500 px-4 h-10 rounded-sm border border-zinc-200"
                      />
                      <input
                        accept="image/*"
                        className="target py-1 m-2 bg-[#f2f4f6] w-full placeholder:text-zinc-500 px-4 h-10 rounded-sm border border-zinc-200"
                        placeholder="Enter image url"
                        type="file"
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            image: e.target.value,
                          })
                        }
                      />
                      <input
                        type="text"
                        className="bg-[#f2f4f6] w-full placeholder:text-zinc-500 px-4 h-10 rounded-sm border border-zinc-200"
                        placeholder="Enter quantity"
                        value={newProduct.quantity}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            quantity: parseInt(e.target.value),
                          })
                        }
                      />
                    </div>

                    <button
                      data-modal-hide="popup-modal"
                      type="button"
                      className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                      onClick={handleAddProduct}
                    >
                      Submit
                    </button>
                    <button
                      data-modal-hide="popup-modal"
                      type="button"
                      className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      onClick={handleProductCancel}
                    >
                      No, cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DragDropContext onDragEnd={handleDragAndDrop}>
        <div className="wrapper ">
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <h1 className="font-bold p-2 rounded-sm bg-inherit text-xl">
                    Inventory
                  </h1>
                </div>
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
