import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-screen flex-center">{children}</div>;
};

export default layout;
