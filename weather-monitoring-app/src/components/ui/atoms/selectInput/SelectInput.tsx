import React, { useState, useEffect } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { IProps } from "./types/IProps";
import { Data } from "./data";
import { FaClock } from "react-icons/fa";
import { GiAlarmClock } from "react-icons/gi";
import { FcAlarmClock } from "react-icons/fc";

export function SelectInput(props: IProps) {
  const {
    className,
    defaultSelectedKeys,
    label,
    placeholder,
    startContent,
    errors,
    isInvalid,
    name,
    value,
    onChange,
    onBlur,
    onFocus,
    disabled,
    required,
    color,
    variant,
    otherVariant,
    labelPlacement,
    radius,
    disable,
    description,
  } = props;
  return (
    <Select
      className={`max-w-xs ${className}`}
      defaultSelectedKeys={defaultSelectedKeys}
      label={label}
      placeholder={placeholder}
      startContent={<FaClock />}
      errors= {errors}
      isInvalid={isInvalid}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      disabled={disabled}
      required={required}
      color={color}
      variant={variant}
      otherVariant={otherVariant}
      labelPlacement={labelPlacement}
      radius={radius}
      disable={disable}
      description={description}

    >
      {Data.map((data) => (
        <SelectItem key={data.key}>{data.label}</SelectItem>
      ))}
    </Select>
  );
}
