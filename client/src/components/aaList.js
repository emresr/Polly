import React, { useState,useEffects } from "react";
import pollService  from "../services/pollService";
import { useList,useListVals } from "react-firebase-hooks/database";




const AaList = () => {
  const [polls] = useListVals(pollService.getAll());
console.log(polls)
  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Polls List</h4>
        <ul className="list-group">
          {            polls &&
            polls.map((poll, index) => (
              <li
                className={"list-group-item "}
  
                key={index}
              >
                {poll.title}-
                {index}
              </li>
            ))}
        </ul>

                    {polls.map((poll) => ( 
              poll.options.map((options) => (

                <div>
                  <input
                    class="pollpage-check"
                    type="checkbox"
                  />
                  <label class="">{options.option1.option_title}</label>
                </div>
              ))
            ))}


      </div>
      
    </div>
  );
};

export default AaList;