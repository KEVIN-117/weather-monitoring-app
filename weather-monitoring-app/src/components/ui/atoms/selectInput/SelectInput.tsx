import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { IProps } from "./types/IProps";
import { Data } from "./data";
import { FaClock } from "react-icons/fa";

export function SelectInput(props: IProps) {
  const {
    className,
    label,
    placeholder,
    isInvalid,
    name,
    value,
    onChange,
    disabled,
    required,
    color,
    variant,
    labelPlacement,
    radius,
    description,
  } = props;
  return (
    <Select
      className={`w-[20%] ${className}`}
      defaultSelectedKeys={Data[0].label}
      label={label}
      placeholder={placeholder}
      startContent={<FaClock />}
      //errors= {errors}
      isInvalid={isInvalid}
      name={name}
      value={value}
      onChange={onChange}
     // onBlur={onBlur}
      //onFocus={onFocus}
      disabled={disabled}
      required={required}
      color={color}
      variant={variant}
    //  otherVariant={otherVariant}
      labelPlacement={labelPlacement}
      radius={radius}
      //disable={disable}
      description={description}
      
    >
      {Data.map((data) => (
        <SelectItem key={data.key}>{data.label}</SelectItem>
      ))}
    </Select>
  );
}
