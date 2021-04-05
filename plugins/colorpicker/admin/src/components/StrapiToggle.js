/**
 *
 * Toggle
 * Credits: https://github.com/strapi/buffet/blob/master/packages/buffetjs-core/src/components/Toggle/index.js
 *
 */

import React from "react";

import { Toggle as StyledToggle, ToggleWrapper } from "@buffetjs/styles";
import { Label } from "@buffetjs/core";

function Toggle({ disabled, id, className, name, onChange, value }) {
  return (
    <ToggleWrapper className={className}>
      <Label htmlFor={id || name}>
        <StyledToggle
          disabled={disabled}
          checked={value}
          id={id || name}
          name={id || name}
          onChange={(e) => {
            onChange({ target: { name, value: e.target.checked } });
          }}
        />
        <span>FALSE</span>
        <span>TRUE</span>
      </Label>
    </ToggleWrapper>
  );
}

export default Toggle;
