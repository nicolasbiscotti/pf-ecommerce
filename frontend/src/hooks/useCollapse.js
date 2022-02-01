import { useState } from "react";

export const useCollapse = () => {
  const [collapse, setCollapse] = useState(false);
  const handleCollapse = () => {
    setCollapse(!collapse);
  };
  return { handleCollapse, collapse, setCollapse };
};
