// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LeftActionableIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M15.248 6.351a1.2 1.2 0 010 1.698L11.299 12l3.95 3.951a1.2 1.2 0 11-1.696 1.697l-4.8-4.8a1.2 1.2 0 010-1.697l4.8-4.8a1.2 1.2 0 011.697 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LeftActionableIcon;
/* prettier-ignore-end */
