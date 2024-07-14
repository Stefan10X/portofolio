"use client";

import { Card } from "flowbite-react";

// eslint-disable-next-line react/prop-types
export default function DefaultCard({ logo, name }) {
  return (
    <Card className="card hover:bg-gray-100 h-36 w-30 xl:w-96 xl:h-56">
      <div className="flex flex-col items-center text-center">
        <div>{logo}</div>
        <p className="text-xl font-bold">{name}</p>
      </div>
    </Card>
  );
}
