// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BatteryIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 13"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".35"}
        d={
          "M2.667.5h19.666c1.197 0 2.167.97 2.167 2.167v7.666c0 1.197-.97 2.167-2.167 2.167H2.667A2.167 2.167 0 01.5 10.333V2.667C.5 1.47 1.47.5 2.667.5z"
        }
        stroke={"currentColor"}
      ></path>

      <path
        opacity={".4"}
        d={"M25.65 5v4a2.17 2.17 0 000-4"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M2.3 3.667c0-.737.597-1.334 1.333-1.334h17.534c.736 0 1.333.597 1.333 1.334V9.33c0 .736-.597 1.333-1.333 1.333H3.633A1.333 1.333 0 012.3 9.33V3.667z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BatteryIcon;
/* prettier-ignore-end */
