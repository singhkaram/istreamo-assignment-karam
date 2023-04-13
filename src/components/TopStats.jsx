import React, { useEffect, useState } from "react";

function TopStats({selectedEndDate,selectedStartDate}) {
  const [statsData, setStatsData] = useState([]);
  //     console.log(statsData)
  useEffect(() => {
    try {
      fetch(
        `https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticcount?fromdate=${selectedStartDate}&todate=${selectedEndDate}&page=1&limit=10`
      )
        .then((res) => res.json())
        .then((data) => {
          setStatsData([data?.data]);
        });
    } catch (error) {
      console.log("data not found");
    }
  }, [selectedStartDate,selectedEndDate]);

  return (
    <div className="bg-[#283046] grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2
     justify-evenly gap-10 px-10 py-5 rounded ">
      <div className="flex space-x-3 hover:scale-105 ease-in-out ">
        <span className="bg-white rounded-full min-h-max w-11 items-center justify-center m-0  flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M13.75 7h-3v5.296l1.943-2.048a.75.75 0 011.114 1.004l-3.25 3.5a.75.75 0 01-1.114 0l-3.25-3.5a.75.75 0 111.114-1.004l1.943 2.048V7h1.5V1.75a.75.75 0 00-1.5 0V7h-3A2.25 2.25 0 004 9.25v7.5A2.25 2.25 0 006.25 19h7.5A2.25 2.25 0 0016 16.75v-7.5A2.25 2.25 0 0013.75 7z" />
          </svg>
        </span>
        <span>
          <h1 className="text-white">{statsData?.[0]?.activeinstall}</h1>
          <p className="text-white capitalize leading-tight">active installs</p>
        </span>
      </div>
      <div className="flex space-x-3 hover:scale-105 ease-in-out">
        <span className="bg-white rounded-full min-h-max w-11 items-center justify-center m-0  flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M1 2.75A.75.75 0 011.75 2h16.5a.75.75 0 010 1.5H18v8.75A2.75 2.75 0 0115.25 15h-1.072l.798 3.06a.75.75 0 01-1.452.38L13.41 18H6.59l-.114.44a.75.75 0 01-1.452-.38L5.823 15H4.75A2.75 2.75 0 012 12.25V3.5h-.25A.75.75 0 011 2.75zM7.373 15l-.391 1.5h6.037l-.392-1.5H7.373zm7.49-8.931a.75.75 0 01-.175 1.046 19.326 19.326 0 00-3.398 3.098.75.75 0 01-1.097.04L8.5 8.561l-2.22 2.22A.75.75 0 115.22 9.72l2.75-2.75a.75.75 0 011.06 0l1.664 1.663a20.786 20.786 0 013.122-2.74.75.75 0 011.046.176z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        <span>
          <h1 className="text-white">{statsData?.[0]?.aliveappusers}</h1>
          <p className="text-white capitalize  leading-tight">
            alive app users
          </p>
        </span>
      </div>

      <div className="flex space-x-3 hover:scale-105 ease-in-out">
        <span className="bg-white rounded-full min-h-max w-11 items-center justify-center m-0  flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span>
          <h1 className="text-white">{statsData?.[0]?.alivechurn}</h1>
          <p className="text-white capitalize  leading-tight">alive churn</p>
        </span>
      </div>

      <div className="flex space-x-3 hover:scale-105 ease-in-out">
        <span className="bg-white rounded-full min-h-max w-11 items-center justify-center m-0  flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        <span>
          <h1 className="text-white">{statsData?.[0]?.churn}</h1>
          <p className="text-white capitalize  leading-tight">churn rate</p>
        </span>
      </div>

      <div className="flex space-x-3 hover:scale-105 ease-in-out">
        <span className="bg-white rounded-full min-h-max w-11 items-center justify-center m-0  flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M11 5a3 3 0 11-6 0 3 3 0 016 0zM2.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 018 18a9.953 9.953 0 01-5.385-1.572zM16.25 5.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z" />
          </svg>
        </span>
        <span>
          <h1 className="text-white">{statsData?.[0]?.totalInstall}</h1>
          <p className="text-white capitalize  leading-tight">total install</p>
        </span>
      </div>

      <div className="flex space-x-3 hover:scale-105 ease-in-out">
        <span className="bg-white rounded-full min-h-max w-11 items-center justify-center m-0  flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path d="M11 5a3 3 0 11-6 0 3 3 0 016 0zM2.046 15.253c-.058.468.172.92.57 1.175A9.953 9.953 0 008 18c1.982 0 3.83-.578 5.384-1.573.398-.254.628-.707.57-1.175a6.001 6.001 0 00-11.908 0zM12.75 7.75a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5z" />
          </svg>
        </span>
        <span>
          <h1 className="text-white">{statsData?.[0]?.totaluninstall}</h1>
          <p className="text-white capitalize  leading-tight">
            total un-installed
          </p>
        </span>
      </div>
    </div>
  );
}

export default TopStats;
