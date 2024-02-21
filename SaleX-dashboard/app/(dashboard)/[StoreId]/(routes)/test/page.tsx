"use client";
import { detectEmptySpaces } from "@/lib/imageSpaceChecker";
import React from "react";

const Page = () => {
  const [image, setImage] = React.useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleClick = async () => {
    if (image) {
      const result = await detectEmptySpaces(image);
    }
  };

  return (
    <div>
      <input
        className="target"
        accept="image/*"
        type="file"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Page;
