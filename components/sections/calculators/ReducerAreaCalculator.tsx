"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import reducerImg from "../../../public/reducer.png";

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

const ReducerAreaCalculator = () => {
  const [quantity, setQuantity] = useState(1);
  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);
  const [height, setHeight] = useState(0);

  const [c1Unit, setC1Unit] = useState("mm");
  const [c2Unit, setC2Unit] = useState("mm");
  const [heightUnit, setHeightUnit] = useState("mm");
  const [areaUnit, setAreaUnit] = useState("mm²");

  const [area, setArea] = useState(0);

  useEffect(() => {
    const C1mm = c1 * unitToMM[c1Unit];
    const C2mm = c2 * unitToMM[c2Unit];
    const Hmm = height * unitToMM[heightUnit];

    const lambda = 1.2;

    const areaMM = ((C1mm + C2mm) / 2) * Hmm * lambda * quantity;

    const convertedArea = areaMM * areaUnitFactor[areaUnit];

    setArea(convertedArea);
  }, [c1, c2, height, quantity, c1Unit, c2Unit, heightUnit, areaUnit]);

  return (
    <section className="bg-[#0c1825] px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Image */}
        <div className="bg-blue-300 rounded-xl p-4 flex justify-center items-center">
          <Image
            src={reducerImg}
            alt="Reducer Diagram"
            width={350}
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

            <label className="text-gray-300 font-medium col-span-1">Circumference 1:</label>
            <input
              type="number"
              className="p-2 rounded bg-[#0f1d2a] text-white border border-blue-800"
              value={c1}
              onChange={(e) => setC1(parseFloat(e.target.value) || 0)}
            />
            <select
              className="p-2 rounded bg-[#0f1d2a] text-white border border-blue-800"
              value={c1Unit}
              onChange={(e) => setC1Unit(e.target.value)}
            >
              <option value="mm">mm</option>
              <option value="cm">cm</option>
              <option value="m">m</option>
            </select>

            <label className="text-gray-300 font-medium col-span-1">Circumference 2:</label>
            <input
              type="number"
              className="p-2 rounded bg-[#0f1d2a] text-white border border-blue-800"
              value={c2}
              onChange={(e) => setC2(parseFloat(e.target.value) || 0)}
            />
            <select
              className="p-2 rounded bg-[#0f1d2a] text-white border border-blue-800"
              value={c2Unit}
              onChange={(e) => setC2Unit(e.target.value)}
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
          <div className="mt-4 bg-[#0f1d2a] p-4 rounded-xl border border-blue-800">
            <div className="flex justify-between items-center">
              <h3 className="text-white text-lg font-semibold">Total Reducer Area:</h3>
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
    </section>
  );
};

export default ReducerAreaCalculator;
