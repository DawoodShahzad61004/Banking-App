import React from "react";

function Home() {
  return (
    <div className="grid grid-cols-10 grid-rows-10 gap-4">
      <div className="col-span-2 row-span-10">1</div>
      <div className="col-span-3 col-start-3">2</div>
      <div className="col-span-2 col-start-9">3</div>
      <div className="col-span-5 row-span-5 col-start-3 row-start-2">4</div>
      <div className="col-span-5 row-span-4 col-start-3 row-start-7">5</div>
      <div className="col-span-3 row-span-9 col-start-8 row-start-2">6</div>
    </div>
  );
}

export default Home;