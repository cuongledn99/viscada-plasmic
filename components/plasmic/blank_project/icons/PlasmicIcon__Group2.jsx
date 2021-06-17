// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 4"}
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
        d={
          "M3.12 1.707L1.708.293A1 1 0 10.293 1.707L1.707 3.12a.995.995 0 00.707.293 1 1 0 00.707-1.707z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
