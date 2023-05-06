"use client";
import { Raleway, Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const montserrat400 = Montserrat({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
});
const montserrat500 = Montserrat({
  weight: "500",
  subsets: ["latin"],
  style: "normal",
});

const montserrat600 = Montserrat({
  weight: "600",
  subsets: ["latin"],
  style: "normal",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: "700",
  style: "normal",
});

export { montserrat, montserrat400, montserrat500, montserrat600, raleway };
