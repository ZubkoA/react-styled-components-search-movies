import { useState } from "react";
import { BoxStyles } from "../../ui/Box";
import { Button } from "../../ui/Button";

const Box = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <BoxStyles>
      <Button onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </Button>
      {isOpen && children}
    </BoxStyles>
  );
};
export default Box;
