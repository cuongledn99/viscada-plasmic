// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MobileSignalIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 10"}
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
          "M17 0h-1c-.552 0-1 .42-1 .938v8.124c0 .518.448.938 1 .938h1c.552 0 1-.42 1-.938V.938C18 .42 17.552 0 17 0zm-6 2h1c.552 0 1 .43 1 .96v6.08c0 .53-.448.96-1 .96h-1c-.552 0-1-.43-1-.96V2.96c0-.53.448-.96 1-.96zM7 4H6a1 1 0 00-1 1v4a1 1 0 001 1h1a1 1 0 001-1V5a1 1 0 00-1-1zM2 6H1a1 1 0 00-1 1v2a1 1 0 001 1h1a1 1 0 001-1V7a1 1 0 00-1-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MobileSignalIcon;
/* prettier-ignore-end */
