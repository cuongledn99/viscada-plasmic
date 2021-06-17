// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconOutlinelightningBoltIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 27"}
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
          "M14.937 2.305c.445.16.743.582.743 1.055v6.72h6.72a1.12 1.12 0 01.867 1.83l-10.08 12.32a1.12 1.12 0 01-1.987-.71V16.8H4.48a1.12 1.12 0 01-.867-1.83l10.08-12.32a1.12 1.12 0 011.244-.345zM6.843 14.56h5.477a1.12 1.12 0 011.12 1.12v4.702l6.597-8.062H14.56a1.12 1.12 0 01-1.12-1.12V6.498L6.843 14.56z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconOutlinelightningBoltIcon;
/* prettier-ignore-end */
