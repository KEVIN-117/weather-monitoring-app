"use client";

import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import type{IProps} from "./types/IProps"
import { Title } from "../../title/Title";




export function ContainerBarChars(props: IProps) {
    const { children } = props;
      return (
        <Card className="bg-default-100/50 dark:bg-default-100/50 shadow-none set-border" >
          <CardHeader className="flex gap-3">
            <div className="flex flex-row items-center justify-between space-x-9">
              <Title size="small" content="Heart rate"></Title>
              <p className="text-small text-default-500">Aqui va el boton</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="flex items-center  ">
              {children}
              <p className="text-small text-default-500">Aqui va el boton</p>
            </div>
          </CardBody>
        </Card>
      );
  }

