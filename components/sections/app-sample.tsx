import DynamicCalculator from "./calculators/DinamicCalculator";
import DomeAreaCalculator from "./calculators/DomeAreaCalculator";
import ReducerAreaCalculator from "./calculators/ReducerAreaCalculator";
import ShellAreaCalculator from "./calculators/ShellAreaCalculator";


const AppSample = () => {

  return (
    <section className="bg-[#0c1825] py-24 px-4 md:px-8 flex flex-col gap-8">
        {/* <ShellAreaCalculator />
        <DomeAreaCalculator />
        <ReducerAreaCalculator /> */}
        <DynamicCalculator />
    </section>
  );
};

export default AppSample;
