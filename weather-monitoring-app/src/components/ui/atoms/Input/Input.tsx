"use client";
import { BaseInput } from "./extend/BaseInput";
import { IProps } from "./types/IProps"
import classNames from "classnames"

function Input(props: IProps) {

    const { label, disable, radius, className, name, errors, isInvalid, description, labelPlacement, endContent, type } = props
    const inputStyle = classNames(className, {
        'error': isInvalid,
    })
    return (
        <BaseInput
            type={type}
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
            className={inputStyle}
            isInvalid={isInvalid}
            color={isInvalid ? "danger" : "primary"}
            description={description}
            autoComplete="off"
            endContent={endContent}
        />
    )
}

export default Input