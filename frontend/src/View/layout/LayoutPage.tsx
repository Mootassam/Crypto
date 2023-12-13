import React from "react";
import Header from "./Header";
import TabBottomNavigator from "./TabBottomNavigator";

function LayoutPage(props) {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
      <TabBottomNavigator />
    </div>
  );
}

export default LayoutPage;
