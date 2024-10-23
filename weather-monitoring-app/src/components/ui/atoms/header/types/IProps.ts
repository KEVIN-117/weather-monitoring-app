import React from "react";

export interface IProps extends React.ComponentProps<"div"> {
  size: "small" | "large" | "middle"
  title: string;
  description: string;
}
