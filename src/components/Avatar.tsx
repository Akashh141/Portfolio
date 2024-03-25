"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";


export default function Avatar({
  image,
  className,
}: {
  image: ImageField;
  className?: string;
}) {
  const component = useRef(null);


  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".avatar",
        {
          opacity: 0,
          scale: 1.4,
        },
        {
          scale: 1,
          opacity: 1,
          
          ease: "power3.inOut",
        },
      );

      

  return (
    <div ref={component} className={clsx("relative h-full w-full", className)}>
      <div
        className="avatar aspect-square overflow-hidden rounded-3xl border-2 border-slate-700 opacity-0"
        style={{ perspective: "500px", perspectiveOrigin: "150% 150%" }}
      >
        <PrismicNextImage
          field={image}
          className="avatar-image h-full w-full object-fill"
          imgixParams={{ q: 90 }}
        />
        <div className="highlight absolute inset-0 hidden w-full scale-110 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 md:block"></div>
      </div>
    </div>
  );
}
