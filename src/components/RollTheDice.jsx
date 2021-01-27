import React, { useState, useEffect } from 'react';

function RollTheDice() {

  // 001 : declare a new state variable, "dice" to track the current roll.
  const [dice, setNumber] = useState(0);
  // 002 : declare a new state variable, "rolls" to track all rolls.
  const [rolls, setRolls] = useState([]);

  // 003 : implementing useEffect hook in order to change the title of the page on every changes of value of dice.
  useEffect(() => {
    document.title = `Hey last extraction: ${dice}`;
  });

  // 004: implement roll function
  const roll = () => {
    const value = Math.floor(Math.random() * Math.floor(5)) + 1;
    // 005: setting state for value of dice.
    setNumber(value);
    // 006: setting state for array for tracking all rolls
    setRolls([value, ...rolls]);
    return value;
  }

  // 007: implement reset function
  const reset = () => {
    const value = 0;
    // 008: resetting state for value of dice to 0.
    setNumber(value);
    // 009: resetting state for rolls array to empty array.
    setRolls([]);
    return value;
  }

  // 010: return the HTML for the component
  return (
    <div>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="flex-grow text-3xl  tracking-tight text-gray-900 sm:text-4xl">
            <span className="block font-extrabold">Roll The Dice!!!</span>
            {/* 011: conditional styling */}
            {
              rolls.length > 0
              ?
              (
                <>
                  <span className="block text-blue-600">Your number:</span>
                  {/* 012: show value of state variable "dice" (it automatically change when it changes the value of the state variable) */}
                  <span className="block text-blue-600">{dice}</span>
                </>
              )
              :
              (
                <>
                  <span className="block text-blue-600">Let's start to play!</span>
                  <span className="block text-blue-600">Click on "Let's Roll!!!" button.</span>
                </>
              )
            }
          </h2>
          <div className="flex-none mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              {/* 013: calling roll() function on click event */}
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700" onClick={ roll }>
                Let's Roll!!!
              </button>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              {/*  014: calling reset() function on click event */}
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50" onClick={ reset }>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 015: conditional styling */}
      {
        rolls.length === 0
        ? <p>Let's start to play, click on "Let's Roll!!!" button.</p>
        : (
          <div className="border-t border-gray-200">
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              {/* 016: walking through the "rolls" array. It is refreshed every time a value is added to the array */}
              {rolls.map((item, k) => (
                <span key={k} className="text-2xl text-white rounded-full py-3 px-6 shadow-2xl bg-blue-500">{item}</span>

              ))}
            </div>
            <div className="text-2xl rounded-full py-3 px-6 shadow-2xl bg-grey-100">
              {/* 017: display the number of rolls (it is refreshed every time a value is added to the array) */}
              Number of rolls {rolls.length}
            </div>
          </div>
        )
      }
    </div>
  );
}

export default RollTheDice;
