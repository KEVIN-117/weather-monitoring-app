"use client";

import { Card, CardBody, Divider } from "@nextui-org/react";
import type { IProps } from "./types/IProps"


import { Title } from "../title/Title";
import { SelectInput } from "../selectInput/SelectInput";

export function ContainerBarChars(props: IProps) {
  const { children } = props;
  return (
    <Card className="bg-default-100/50 dark:bg-default-100/50 shadow-none set-border" >
      <div className="flex items-center justify-between p-3">
        <Title classname="flex-1" size="small" content="Heart rate"></Title>
        <SelectInput />
      </div>
      <Divider />
      <CardBody>
        <div className="flex items-center  ">
          {children}
        </div>
      </CardBody>
    </Card>
  );
}

