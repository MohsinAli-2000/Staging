const Stats = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-start -ml-16 md:-ml-0 md:justify-between items-center px-2 md:px-32">
      <div className="gap-5 flex justify-between items-center  my-4">
        <span className="font-aldrich text-custom-orange text-6xl">85</span>
        <span className="font-aldrich text-custom-black text-xl">
          PROJECTS <br /> COMPLETED
        </span>
      </div>
      <div className="gap-5 flex justify-between items-center my-4">
        <span className="font-aldrich text-custom-orange text-6xl">127</span>
        <span className="font-aldrich text-custom-black text-xl">
          HAPPY <br />
          CLIENTS
        </span>
      </div>
      <div className="gap-5 flex justify-between items-center my-4">
        <span className="font-aldrich text-custom-orange text-6xl">36</span>
        <span className="font-aldrich text-custom-black text-xl">
          AWARDS <br />
          RECEIVED
        </span>
      </div>
      <div className="gap-5 flex justify-between items-center my-4">
        <span className="font-aldrich text-custom-orange text-6xl">74</span>
        <span className="font-aldrich text-custom-black text-xl">
          CUPS OF <br />
          COFFEE
        </span>
      </div>
    </div>
  );
};

export default Stats;
