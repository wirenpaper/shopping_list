import React from "react";

// Define the props interface
interface ItemProps {
  text: string;
}

// Functional component definition
const Item: React.FC<ItemProps> = ({ text }) => {
  return (
    <div className="flex w-48 justify-between">
      <p>{text}</p>
      <button className="text-red-600 font-bold size-4">x</button>
    </div>
  );
};

export default Item;
