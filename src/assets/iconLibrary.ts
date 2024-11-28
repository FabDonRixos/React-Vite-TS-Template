/// <reference types="vite-plugin-svgr/client" />
import { FC, SVGProps } from "react";
import Logo from "./icon/logo.svg?react";

export type TSvgIcon = FC<SVGProps<SVGSVGElement>>;

export const IconLogo: TSvgIcon = Logo;
