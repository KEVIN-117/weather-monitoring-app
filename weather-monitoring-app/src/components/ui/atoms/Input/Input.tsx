"use client";
import { Input as BaseInput } from "@nextui-org/react"
import { IProps } from "./types/IProps"
import classNames from "classnames"

function Input(props: IProps) {

    const { label, disable, radius, className, name, errors, isInvalid, description, labelPlacement } = props
    const inputStyle = classNames(className, {
        'error': isInvalid,
    })
    return (
        <BaseInput
            name={name}
            errorMessage={
                errors?.map((error, index) => (
                    <span className="text-red-500" key={index}>{error}</span>
                ))
            }
            variant="bordered"
            label={label}
            labelPlacement={labelPlacement ? labelPlacement : "outside"}
            radius={radius}
            isDisabled={disable}
            className={`${inputStyle}`}
            isInvalid={isInvalid}
            color={isInvalid ? "danger" : "primary"}
            description={description}
            autoComplete="off"
        />
    )
}

export default Input