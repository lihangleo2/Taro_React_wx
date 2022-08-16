import { MobXProviderContext } from "mobx-react";
import React from "react";

export default () => {
  return React.useContext(MobXProviderContext);
};
