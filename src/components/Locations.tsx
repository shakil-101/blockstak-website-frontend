import React, { useState } from "react";

const Locations = () => {
  type locationType = {
    address: string;
    email: string;
    phone: string;
  };

  const [dhaka, setDhaka] = useState<locationType>({
    address: "House 141, Lane 1, Baridhara DOHS",
    email: "support@blockstak.ai",
    phone: "+880245267882",
  });
  const [dubai, setDubai] = useState<locationType>({
    address: "IZFA Properties, Dubai Silicon Oasis, UAE",
    email: "support@blockstak.ai",
    phone: "+880245267882",
  });
  const [sanJose, setSanJose] = useState<locationType>({
    address: "House 141, Lane 1, Baridhara DOHS",
    email: "support@blockstak.ai",
    phone: "+880245267882",
  });

  return (
    <div>
      <div className="container mx-auto">
        <div className="address-bg-center text-center py-20">
          <h1 className="text-[32px] font-bold pb-2">Dhaka</h1>

          <div className="pb-2">
            <address className="text-xl font-medium not-italic">
              {dhaka.address}
            </address>
          </div>

          <div className="pb-2">
            <a href={`mailto:${dhaka.email}`} className="text-xl font-medium">
              {dhaka.email}
            </a>
          </div>
          <div className="">
            <a href={`tel:${dhaka.phone}`} className="text-xl font-medium">
              {dhaka.phone}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16">
          <div className="address-bg-right py-20">
            <h1 className="text-[32px] font-bold pb-2 ">San Jose</h1>

            <div className="pb-2">
              <address className="text-xl font-medium not-italic">
                {sanJose.address}
              </address>
            </div>

            <div className="pb-16">
              <a
                href={`mailto:${sanJose.email}`}
                className="text-xl font-medium"
              >
                {sanJose.email}
              </a>
            </div>
            <div className="">
              <a href={`tel:${sanJose.phone}`} className="text-xl font-medium">
                {sanJose.phone}
              </a>
            </div>
          </div>
          <div className="address-bg-right py-20">
            <h1 className="text-[32px] font-bold pb-2">Dubai</h1>

            <div className="pb-2">
              <address className="text-xl font-medium not-italic">
                {dubai.address}
              </address>
            </div>

            <div className="pb-16">
              <a href={`mailto:${dubai.email}`} className="text-xl font-medium">
                {dubai.email}
              </a>
            </div>
            <div className="">
              <a href={`tel:${dubai.phone}`} className="text-xl font-medium">
                {dubai.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
