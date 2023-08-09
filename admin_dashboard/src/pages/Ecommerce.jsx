import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../components";

import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";

const Ecommerce = () => {
  return (
    <div className="mt-12 ">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200  dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 m-3 p-8  pt-9 bg-hero-pattern bg-no-repeat bg-cover bg-right-top   ">
          <div className="flex justify-between items-center">
            <div>
              <p>Earnings</p>
              <p>$68,343.54</p>{" "}
              <div className="mt-6">
                <Button
                  color="white"
                  bgColor="blue"
                  text="Download"
                  borderRedius="10px"
                  size="md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
