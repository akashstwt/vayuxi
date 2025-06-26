"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import domeImg from "../../../public/sell.png";

const unitToMM: Record<string, number> = {
  mm: 1,
  cm: 10,
  m: 1000,
};

const areaUnitFactor: Record<string, number> = {
  "mm²": 1,
  "cm²": 1 / 100,
  "m²": 1 / 1_000_000,
};

const DomeAreaCalculator = () => {
  const [quantity, setQuantity] = useState(1);
  const [circumference, setCircumference] = useState(0);
  const [height, setHeight] = useState(0);

  const [circUnit, setCircUnit] = useState("mm");
  const [heightUnit, setHeightUnit] = useState("mm");
  const [areaUnit, setAreaUnit] = useState("mm²");

  const [area, setArea] = useState(0);

  useEffect(() => {
    const c = circumference * unitToMM[circUnit];
    const h = height * unitToMM[heightUnit];

    const d = c / Math.PI;

    const lambda = h < d / 3 ? 1.27 : 1.75;

    const areaMM = (Math.PI * d * d * lambda * quantity) / 4;

    const convertedArea = areaMM * areaUnitFactor[areaUnit];

    setArea(convertedArea);
  }, [circumference, height, quantity, circUnit, heightUnit, areaUnit]);

  return (
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 container px-4 sm:px-6 lg:px-8">
        {/* Left: Image */}
        <div className="bg-blue-900/20 rounded-xl p-4 flex justify-center items-center">
          <Image
            src={""}
            alt="Dome Diagram"
            width={400}
            height={300}
            className="rounded-xl"
          />
        </div>

        {/* Right: Inputs */}
        <div className="bg-blue-900/20 rounded-xl p-6 space-y-6">
          <div className="grid grid-cols-3 gap-4 items-center">
            <label className="text-gray-300 font-medium col-span-1">Quantity:</label>
            <input
              type="number"
              className="col-span-2 p-2 rounded bg-[#0f1d2a] text-white border border-blue-800 focus:outline-none"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
            />

            <label className="text-gray-300 font-medium col-span-1">Circumference:</label>
            <input
              type="number"
              className="p-2 rounded bg-[#0f1d2a] text-white border border-blue-800"
              value={circumference}
              onChange={(e) => setCircumference(parseFloat(e.target.value) || 0)}
            />
            <select
              className="p-2 rounded bg-[#0f1d2a] text-white border border-blue-800"
              value={circUnit}
              onChange={(e) => setCircUnit(e.target.value)}
            >
              <option value="mm">mm</option>
              <option value="cm">cm</option>
              <option value="m">m</option>
            </select>

            <label className="text-gray-300 font-medium col-span-1">Height:</label>
            <input
              type="number"
              className="p-2 rounded bg-[#0f1d2a] text-white border border-blue-800"
              value={height}
              onChange={(e) => setHeight(parseFloat(e.target.value) || 0)}
            />
            <select
              className="p-2 rounded bg-[#0f1d2a] text-white border border-blue-800"
              value={heightUnit}
              onChange={(e) => setHeightUnit(e.target.value)}
            >
              <option value="mm">mm</option>
              <option value="cm">cm</option>
              <option value="m">m</option>
            </select>
          </div>

          {/* Output */}
          <div className="bg-[#0f1d2a] p-4 rounded-xl shadow border border-blue-800">
            <div className="flex justify-between items-center">
              <h3 className="text-white text-lg font-semibold">Total Dome Area:</h3>
              <select
                className="p-2 rounded border bg-[#0f1d2a] border-blue-800"
                value={areaUnit}
                onChange={(e) => setAreaUnit(e.target.value)}
              >
                <option value="mm²">mm²</option>
                <option value="cm²">cm²</option>
                <option value="m²">m²</option>
              </select>
            </div>
            <p className="text-blue-700 font-bold text-2xl mt-2">
              {area.toLocaleString(undefined, { maximumFractionDigits: 2 })} {areaUnit}
            </p>
          </div>
        </div>
      </div>
  );
};

export default DomeAreaCalculator;
