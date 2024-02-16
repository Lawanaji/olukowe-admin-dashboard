import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const TABLE_HEAD = ["Tracker", "Open", "Closed", "Total"];
const TABLE_ROW  = [
  {
    tracker: 'Bug',
    open: 7,
    closed: 5,
    total: 12
  },
  {
    tracker: 'Suggestion',
    open: 1,
    closed: 3,
    total: 5
  },

]

const CARD_DETAILS = ['Project Name:', 'Task Name', 'Hours']
const CARD_value = [
  {
    project: 'Olukowe Ebook',
    task: 'Fictional novel, our imagination on a working Nigeria',
    hours: 16
  }
  
]
export const Metrics = () => {
    const percentage = 95;
    return (
        <div className=" w-full h-screen md:flex-row flex-col-reverse md:flex justify-between">
            <div className="bg-primary w-full h-screen overflow-y-hidden md:[calc(100%-35%)] md:h-screen">hello world</div>
            <div className=" w-full  md:w-[35%]  md:p-5">
                <h1>Customer Satisfaction</h1>
                <div className="flex gap-5">
                    <CircularProgressbar value={percentage} text={`${percentage}%`} className="w-[100px] h-[150px]" styles={buildStyles({ textColor: "black", pathColor: "green" })} />

                    <div className="text-center py-8 space-y-1">
                        <div>
                            <h1 className=" font-medium  text-[#001633B2]">Ongoing Task</h1>
                            <p className="font-semibold">100%</p>
                        </div>
                        <div className="text-center">
                            <h1 className=" font-medium  text-[#001633B2]">Completed Task</h1>
                            <p className="font-semibold">65%</p>
                        </div>
                    </div>
                </div>
                <table className="bg-[#F8F8F8] text-[#001633B2]">
                    <thead>
                        <tr className=" rounded-xl border-b-[1rem] border-white">
                            {TABLE_HEAD.map((head) => (
                                <th className="p-3 text-[#FF2626]" key={head}>
                                    {head}
                                </th>
                            ))}
                        </tr>
                    </thead>
                          <tbody>
                            {TABLE_ROW.map(({tracker,open,closed,total})=>{
                              return(
                                    <tr className="rounded-xl border-b-[1rem] border-white">
                                      <th className="p-2 text-start ">{tracker}</th>
                                      <th>{open}</th>
                                      <th>{closed}</th>
                                      <th>{total}</th>
                                    </tr>
                              )
                            })}
                          </tbody>
                </table>
                <div className="flex justify-between py-5">
                  <h1>Completed Tasks</h1>
                  <button className="underline  ">View all Bug</button>
                </div>
                <div className="flex">
                  <span>{CARD_DETAILS.map((cards)=>(<p  key={cards}>{cards}</p>))}</span>
                  <span className="px-5">
                    <p>Olukowe Ebook</p>
                    <p>Fictional novel, our imagination on a working Nigeria</p>
                    <p>16hrs</p>
                  </span>
             
            </div>

            </div>
           
        </div>
    );
};
