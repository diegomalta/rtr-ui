import React, { useState } from "react";

function RtrForm() {
  return (
    <div className="flex flex-col justify-center">
      <div className="md:px-5 2xl:w-4/5 2xl:mx-auto">

        <div className="flex flex-wrap my-2">
          <div className="w-1/2 p-2">
            <h1 className="font-semibold mb-3 text-xl">Company</h1>
            <div className="flex flex-col md:flex-row">
              <div className="mx-2">
                <input type="radio" value="Technosoft" name="Technosoft" /> Technosoft
              </div>
              <div className="mx-2">
                <input type="radio" value="Collasys" name="Collasys" /> Collasys
              </div>
              <div className="mx-2">
                <input type="radio" value="Flagtree" name="Flagtree" /> Flagtree
              </div>
            </div>
          </div>

          <div className="w-1/2 p-2">
            <h1 className="font-semibold mb-3 text-xl">Account</h1>
            <div className="flex flex-col md:flex-row">
              <div className="mx-2">
                <input type="radio" value="Technosoft" name="Technosoft" />{" "}
                Deloitte
              </div>
              <div className="mx-2">
                <input type="radio" value="Collasys" name="Collasys" />{" "}
                Non-Deloitte
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mb-3">

          <div className="md:flex-auto p-2 bg-indigo-300 cur">
            <h1 className="font-semibold mb-3 text-xl">Recluter</h1>

            <div className="mb-1">
              <label className="block tracking-wide text-xs font-bold mb-1">
                Name
              </label>
              <input
                className="rounded py-1 px-2 mb-2 w-full"
                type="text"
              ></input>
            </div>

            <div className="mb-1">
              <label className="block tracking-wide text-xs font-bold mb-1">
                Email
              </label>
              <input
                className="rounded py-1 px-2 mb-2 w-full"
                type="text"
              ></input>
            </div>

            <div className="mb-1">
              <label className="block tracking-wide text-xs font-bold mb-1">
                Phone
              </label>
              <input
                className="rounded py-1 px-2 mb-2 w-full"
                type="text"
              ></input>
            </div>
          </div>

          <div className="md:flex-auto p-2 bg-indigo-300">
            <h1 className="font-semibold mb-3 text-xl">Candidate</h1>

            <div className="mb-1">
              <label className="block tracking-wide text-xs font-bold mb-1">
                First Name
              </label>
              <input
                className="rounded py-1 px-2 mb-2 w-full"
                type="text"
              ></input>
            </div>

            <div className="mb-1">
              <label className="block tracking-wide text-xs font-bold mb-1">
                MI
              </label>
              <input
                className="rounded py-1 px-2 mb-2 w-full"
                type="text"
              ></input>
            </div>

            <div className="mb-1">
              <label className="block tracking-wide text-xs font-bold mb-1">
                Last Name
              </label>
              <input
                className="rounded py-1 px-2 mb-2 w-full"
                type="text"
              ></input>
            </div>

            <div className="mb-1">
              <label className="block tracking-wide text-xs font-bold mb-1">
                Email
              </label>
              <input
                className="rounded py-1 px-2 mb-2 w-full"
                type="text"
              ></input>
            </div>

            <div className="mb-1">
              <label className="block tracking-wide text-xs font-bold mb-1">
                Phone
              </label>
              <input
                className="rounded py-1 px-2 mb-2 w-full"
                type="text"
              ></input>
            </div>
          </div>

          <div className="md:flex-auto p-2 bg-indigo-300">
            <h1 className="font-semibold mb-3 text-xl">Requirement</h1>

            <div className="mb-1">
              <label className="block tracking-wide text-xs font-bold mb-1">
                Req No.
              </label>
              <input
                className="rounded py-1 px-2 mb-2 w-full"
                type="text"
              ></input>
            </div>

            <div className="mb-1">
              <label className="block tracking-wide text-xs font-bold mb-1">
                Role
              </label>
              <input
                className="rounded py-1 px-2 mb-2 w-full"
                type="text"
              ></input>
            </div>

            <div className="mb-1">
              <label className="block tracking-wide text-xs font-bold mb-1">
                Client Name
              </label>
              <input
                className="rounded py-1 px-2 mb-2 w-full"
                type="text"
              ></input>
            </div>

            <div className="mb-1">
              <label className="block tracking-wide text-xs font-bold mb-1">
                Location
              </label>
              <input
                className="rounded py-1 px-2 mb-2 w-full"
                type="text"
              ></input>
            </div>

            <div className="mb-1">
              <label className="block tracking-wide text-xs font-bold mb-1">
                Work Type
              </label>
              <input
                className="rounded py-1 px-2 mb-2 w-full"
                type="text"
              ></input>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row">
            <div className="mb-1 mx-2">
              <label className="block tracking-wide text-xs font-bold mb-1">
              Special Comments on Work Type
              </label>
              <input
                className="rounded py-1 px-2 mb-2 w-full"
                type="text"
                ></input>
            </div>

        
            <div className="mx-2">
              <label className="block tracking-wide text-xs font-bold mb-1">
              Salary Offert
              </label>
              <input
                className="rounded py-1 px-2 mb-2 w-full"
                type="text"
              ></input>
            </div>

        <div className="flex items-center justify-between md:w-2/5">

            <div className="mx-2">
              <div className="block tracking-wide text-xs font-bold mb-1">Rate</div>
              <div className="">
                <div className="mx-2">
                  <input type="radio" value="Yearly" name="Yearly" /> Yearly                
                </div>
                <div className="mx-2">
                  <input type="radio" value="Hourly" name="Hourly" /> Hourly
             </div>

              </div>
            </div>

            <div className="mx-2">
              <div className="block tracking-wide text-xs font-bold mb-1">Form</div>
              <div className="">
                <div className="mx-2">
                  <input type="radio" value="W2" name="W2" /> W2                
                </div>
                <div className="mx-2">
                  <input type="radio" value="1099" name="1099" /> 1099
                </div>
              </div>
            </div>

            <div className="mx-2">
              <div className="block tracking-wide text-xs font-bold mb-1">Benefits</div>
              <div>
                <div className="mx-2">
                  <input type="radio" value="yes" name="yes" /> Yes
                </div>
                <div className="mx-2">
                  <input type="radio" value="no" name="no" /> No
                </div>
              </div>
            </div>

        </div>
            


        </div>
        </div>
    </div>
  );
}

export default RtrForm;
