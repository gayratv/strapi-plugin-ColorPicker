import React from "react";
import { Label, Padded } from "@buffetjs/core";
import StrapiToggle from "./StrapiToggle";

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default ({ onChange, name, value }) => {
  console.log("Toogle props value : ", value);

  return (
    <Padded top bottom left right size="md">
      <Label htmlFor={name}>{capitalize(name)}</Label>

      <StrapiToggle onChange={onChange} name={name} value={value} />
    </Padded>
  );
};
