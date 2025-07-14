"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import image1 from "../../../public/01.png";
import image2 from "../../../public/02.png";
import image3 from "../../../public/03.png";
import image4 from "../../../public/04.png";
import image5 from "../../../public/05.png";
import image6 from "../../../public/06.png";
import image7 from "../../../public/07.png";
import image8 from "../../../public/08.png";
import image9 from "../../../public/09.png";
import image10 from "../../../public/10.png";
import image11 from "../../../public/11.png";

type LambdaRange = {
  minDiameter: number;
  maxDiameter: number;
};

type ItemData = {
  name: string;
  image: any; // StaticImport or string
  lambdaValues: number[]; // Array aligned with globalDiameterRanges
};

// ✅ Global diameter ranges
const diameterRanges: LambdaRange[] = [
  { minDiameter: 0, maxDiameter: 40 },
  { minDiameter: 41, maxDiameter: 85 },
  { minDiameter: 86, maxDiameter: 150 },
  { minDiameter: 151, maxDiameter: 350 },
  { minDiameter: 351, maxDiameter: 500 },
  { minDiameter: 501, maxDiameter: Infinity },
];

// ✅ Items data with lambda values aligned to diameter ranges
const itemsData: ItemData[] = [
  {
    name: "PIPE",
    image: image11,
    lambdaValues: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
  },
  {
    name: "ELBOW 90E",
    image: image6,
    lambdaValues: [0.5, 0.6, 1.0, 1.4, 1.5, 1.5],
  },
  {
    name: "ELBOW 45E",
    image: image10,
    lambdaValues: [0.35, 0.4, 0.65, 0.85, 0.9, 1.05],
  },
  {
    name: "TEE BRANCH",
    image: image1,
    lambdaValues: [0.7, 0.7, 0.7, 0.75, 0.85, 1.1],
  },
  {
    name: "REDUCER",
    image: image3,
    lambdaValues: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
  },
  {
    name: "CAP",
    image: image2,
    lambdaValues: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
  },
  {
    name: "INSULATED FLANGE PAIR WITH REMOVAL BOX",
    image: image8,
    lambdaValues: [1.8, 1.9, 2.0, 2.5, 2.7, 3.0],
  },
  {
    name: "INSULATED FLANGE VALVE WITH REMOVAL BOX",
    image: image9,
    lambdaValues: [2.5, 3.0, 3.5, 4.0, 4.5, 6.0],
  },
  {
    name: "INSULATED FLANGE PAIR WITH FIX BOX",
    image: image7,
    lambdaValues: [1.08, 1.14, 1.32, 1.5, 1.62, 1.8],
  },
  {
    name: "INSULATED FLANGE VALVE WITH FIX BOX",
    image: image4,
    lambdaValues: [1.5, 1.8, 2.1, 2.4, 2.7, 3.0],
  },
  {
    name: "INSULATED WELDED VALVE WITH FIX BOX",
    image: image5,
    lambdaValues: [0.2, 0.6, 0.6, 0.6, 0.6, 0.6],
  },
  
];

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

const DynamicCalculator = () => {
  const [areas, setAreas] = useState<number[]>(Array(itemsData.length).fill(0));
  const [finalAreaUnit, setFinalAreaUnit] = useState("mm²");

  const handleAreaChange = (index: number, area: number) => {
    setAreas((prev) => {
      const updated = [...prev];
      updated[index] = area;
      return updated;
    });
  };

  const totalAreaMM = areas.reduce((sum, a) => sum + a, 0);
  const convertedTotalArea = totalAreaMM * areaUnitFactor[finalAreaUnit];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {itemsData.map((item, index) => (
        <DynamicCalculatorItem
          key={item.name}
          data={item}
          onAreaChange={(area) => handleAreaChange(index, area)}
        />
      ))}

      {/* ✅ Final Total Area Section */}
      <div className="bg-green-800/20 rounded-xl p-6 shadow border border-green-800">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-2xl font-bold">Final Total Area:</h2>
          <select
            className="p-2 rounded border bg-[#0f1d2a] border-green-800 text-white"
            value={finalAreaUnit}
            onChange={(e) => setFinalAreaUnit(e.target.value)}
          >
            <option value="mm²">mm²</option>
            <option value="cm²">cm²</option>
            <option value="m²">m²</option>
          </select>
        </div>
        <p className="text-green-500 font-bold text-3xl">
          {convertedTotalArea.toLocaleString(undefined, { maximumFractionDigits: 2 })} {finalAreaUnit}
        </p>
      </div>
    </div>
  );
};

type DynamicCalculatorItemProps = {
  data: ItemData;
  onAreaChange: (area: number) => void;
};

const DynamicCalculatorItem = ({ data, onAreaChange }: DynamicCalculatorItemProps) => {
  const [quantity, setQuantity] = useState(1);
  const [circumference, setCircumference] = useState(0);
  const [circUnit, setCircUnit] = useState("mm");
  const [areaUnit, setAreaUnit] = useState("mm²");
  const [area, setArea] = useState(0);

  useEffect(() => {
    const c = circumference * unitToMM[circUnit];
    const d = c / Math.PI;

    // ✅ Determine lambda based on diameter range
    let lambda = 1;
    for (let i = 0; i < diameterRanges.length; i++) {
      const range = diameterRanges[i];
      if (d >= range.minDiameter && d < range.maxDiameter) {
        lambda = data.lambdaValues[i];
        break;
      }
    }

    const areaMM = d * lambda * quantity;
    const convertedArea = areaMM * areaUnitFactor[areaUnit];

    setArea(convertedArea);
    onAreaChange(areaMM); // store in MM for global total
  }, [circumference, quantity, circUnit, areaUnit, data.lambdaValues, onAreaChange]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left: Image */}
      <div className="bg-blue-300 rounded-xl p-4 flex justify-center items-center">
        <Image
          src={data.image}
          alt={`${data.name} Diagram`}
          width={300}
          height={300}
          className="rounded-xl"
        />
      </div>

      {/* Right: Inputs */}
      <div className="bg-blue-900/20 rounded-xl p-6 space-y-6">
        <h3 className="text-white text-sm lg:text-xl font-semibold">{data.name}</h3>

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
        </div>

        {/* Output */}
        <div className="bg-[#0f1d2a] p-4 rounded-xl shadow border border-blue-800">
          <div className="flex justify-between items-center">
            <h4 className="text-white text-lg font-semibold">Area:</h4>
            <select
              className="p-2 rounded border bg-[#0f1d2a] border-blue-800 text-white"
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

export default DynamicCalculator;
