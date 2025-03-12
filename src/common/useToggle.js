import { useState } from "react";

export default function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const toggle = (val) => {
    if (typeof value != "boolean") {
      setValue(!val);
    } else {
      setValue(val);
    }
  };

  return [value, toggle];
}
