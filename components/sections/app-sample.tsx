import DomeAreaCalculator from "./calculators/DomeAreaCalculator";
import ShellAreaCalculator from "./calculators/ShellAreaCalculator";


const AppSample = () => {

  return (
    <section className="bg-[#0c1825] py-24 px-4 md:px-8 flex flex-col gap-8">
        <ShellAreaCalculator />
        <DomeAreaCalculator />
    </section>
  );
};

export default AppSample;
