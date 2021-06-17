// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconOutlinesparklesIcon(props) {
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
          "M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm8 0a1 1 0 01.949.684l2.135 6.404 5.267 1.976a1 1 0 010 1.872l-5.267 1.976-2.135 6.404a1 1 0 01-1.898 0l-2.135-6.404-5.267-1.976a1 1 0 010-1.872l5.267-1.976 2.135-6.404A1 1 0 0113 2zm0 4.162l-1.337 4.011a1 1 0 01-.598.62L7.848 12l3.217 1.207a1 1 0 01.598.62L13 17.837l1.337-4.01a1 1 0 01.598-.62L18.152 12l-3.217-1.207a1 1 0 01-.598-.62L13 6.163zM6 16a1 1 0 011 1v1h1a1 1 0 110 2H7v1a1 1 0 11-2 0v-1H4a1 1 0 110-2h1v-1a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconOutlinesparklesIcon;
/* prettier-ignore-end */
