import { business } from "@/types/business";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BusinessCard({image, name, address} : business) {
  return (
    <div className="border w-[400px]">
      <Image src={image} alt="image" width={400} height={50} />
      <div className="p-4">
        <h1>{name}</h1>
        <p>{address}</p>
      </div>
      
      <Link className="flex justify-end pr-4" href="/">
        Order now
      </Link>
    </div>
  );
}
