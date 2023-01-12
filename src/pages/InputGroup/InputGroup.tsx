import React from "react";

import { InputGroupContainer, Labels } from "./style";

export const InputGroup = (props: any) => {
  const { PlaceholderText, inputName, textAreaName } = props;

  return (
    <InputGroupContainer>
      <input placeholder={PlaceholderText} name={inputName} />
      <textarea name={textAreaName} />
    </InputGroupContainer>
  );
};
