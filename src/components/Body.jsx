import React, { useEffect, useState } from "react";
import {AiFillAndroid,AiFillApple} from 'react-icons/ai'

const headings = [
  "date",
  "day install",
  "plateform",
  "day uninstalls",
  "plateform",
  "churn rate",
  "churn plateform",
];

function Body({selectedEndDate, setSelectedEndDate,selectedStartDate, setSelectedStartDate}) {
  const [listData, setListData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("50");
 
  const [pagination, setPagination] = useState("1");

  useEffect(() => {
    try {
      fetch(
        `https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=${selectedStartDate}&todate=${selectedEndDate}&page=${pagination}&limit=${selectedValue}`
      )
        .then((res) => res.json())
        .then((data) => {
          setListData([data?.data?.data]);
        });
    } catch (error) {
      console.log("data not found");
    }
  }, [selectedValue, selectedStartDate, selectedEndDate, pagination]);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    setPagination("1"); // reset pagination to 1 when selected value changes
  };

  const handleStartDateChange = (event) => {
    setSelectedStartDate(event.target.value);
    setPagination("1"); // reset pagination to 1 when start date changes
  };

  const handleEndDateChange = (event) => {
    setSelectedEndDate(event.target.value);
    setPagination("1"); // reset pagination to 1 when end date changes
  };

  const handlePagination = (page) => {
    setPagination(page);
  };

  const handlePrev = () => {
    if (pagination > 1) {
      setPagination((prev) => parseInt(prev) - 1);
    }
  };

  const handleNext = () => {
    setPagination((prev) => parseInt(prev) + 1);
  };
  return (
    <div className="bg-[#283046] py-5 px-3 rounded space-y-1.5 ">
      <div className="flex flex-wrap justify-between">
        <div className="flex space-x-3 p-1.5">
          <p className="capitalize text-white font-semibold text-base">show</p>

          <select
            id="my-select"
            value={selectedValue}
            onChange={handleSelectChange}
            className=" bg-transparent border h-min border-[#707070] rounded"
          >
            {[10, 50, 100, 500, 1000].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
          <p className="capitalize text-white font-semibold text-base">
            entries
          </p>
        </div>
        <div className="relative space-x-2">
          <input
            value={selectedStartDate}
            onChange={handleStartDateChange}
            placeholder="Select start date"
            type="date"
            className="bg-transparent border min-h-max border-[#707070] rounded"
          />

          <input
            value={selectedEndDate}
            onChange={handleEndDateChange}
            placeholder="Select end date"
            type="date"
            className="bg-transparent border min-h-max border-[#707070] rounded"
          />
        </div>
      </div>
      <ul className="flex flex-wrap bg-[#161C32] justify-around border-[#707070] border py-2.5 px-1">
        {headings.map((heading, index) => (
          <li key={index} className="capitalize text-white text-sm">
            {heading}
          </li>
        ))}
      </ul>
      {listData?.[0]?.map(
        ({
          android_uninstall,
          created_At,
          android_churn,
          android_install,
          ios_churn,
          ios_install,
          ios_uninstall,
          totalchurn,
          totalinstall,
          totaluninstall,
        }) => (
          <ul
            key={created_At}
            className="grid grid-cols-7 gap-x-6 border-b border-[#707070] py-2.5   "
          >
            <li className="capitalize text-white text-sm">
              {new Date(created_At).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </li>
            <li className="capitalize text-white text-sm ">{totalinstall}</li>
            <li className="capitalize text-white text-sm">
              <span className="flex">
                <AiFillAndroid/>
                {android_install}
              </span>
              <span className="flex">
                <AiFillApple/>
                {ios_install}
              </span>
            </li>
            <li className="capitalize text-white text-sm">{totaluninstall}</li>
            <li className="capitalize text-white text-sm">
              <span className="flex">
              <AiFillAndroid/>
                {android_uninstall}
              </span>
              <span className="flex">
              <AiFillApple/>
                {ios_uninstall}
              </span>
            </li>
            <li className="capitalize text-white text-sm">
              {Math.trunc(totalchurn)} %
            </li>
            <li className="capitalize text-white text-sm">
              <span className="flex">
              <AiFillAndroid/>
                {Math.trunc(android_churn)}
              </span>
              <span className="flex">
              <AiFillApple/>
                {Math.trunc(ios_churn)}
              </span>
            </li>
          </ul>
        )
      )}

      <ul className="flex justify-end pt-2">
        <li
          onClick={handlePrev}
          className="mx-1 px-3 py-0 h-6 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-full"
        >
          prev
        </li>

        {[1, 2, 3,].map((page) => (
          <button
            key={page}
            className={`${
              pagination === page ? "bg-white text-black" : "bg-gray-300"
            } mx-1 px-2 py-0 h-6 rounded-full`}
            onClick={() => handlePagination(page)}
          >
            {page}
          </button>
        ))}
        <li
          onClick={handleNext}
          className="mx-1 px-3 py-0 h-6 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-full"
        >
          next
        </li>
      </ul>
    </div>
  );
}

export default Body;
