import React, { useState } from "react";

function RtrForm() {
  const [company, setCompany] = useState("Technosoft");
  const [account, setAccount] = useState("Deloitte");
  const [rate, setRate] = useState("Yearly");
  const [form, setForm] = useState("W2");
  const [benefits, setBenefits] = useState("Yes");

  const handleConpanyChange = (event) => {
    setCompany(event.target.value);
  };

  const handleAccountChange = (event) => {
    setAccount(event.target.value);
  };

  const handleRateChange = (event) => {
    setRate(event.target.value);
  }

  const handleFormChange = (event) => {
    setForm(event.target.value);
  }

  const handleBenefitsChange = (event) => {
    setBenefits(event.target.value);
  }

  const handleClick = () => {
    const element = document.createElement("a");
    const file = new Blob(["<html>please click the next link </html>"],    
               {type: 'text/plain;charset=utf-8'});
    element.href = URL.createObjectURL(file);
    element.download = "myFile.html";
    document.body.appendChild(element);
    element.click();
  }

  return (
    <div className="flex flex-col">
      <div className="md:px-5 2xl:w-4/5 2xl:mx-auto py-3">
        <div className="flex flex-wrap my-2 shadow md:rounded-lg">
          <div className="w-1/2 p-2">
            <h1 className="font-semibold mb-3 text-xl">Company</h1>
            <div
              className="flex flex-col md:flex-row"
              onChange={handleConpanyChange}
            >
              <div className="mx-2">
                <input
                  type="radio"
                  value="Technosoft"
                  checked={company === "Technosoft"}
                />{" "}
                Technosoft
              </div>
              <div className="mx-2">
                <input
                  type="radio"
                  value="Collasys"
                  checked={company === "Collasys"}
                />{" "}
                Collasys
              </div>
              <div className="mx-2">
                <input
                  type="radio"
                  value="Flagtree"
                  checked={company === "Flagtree"}
                />{" "}
                Flagtree
              </div>
            </div>
          </div>

          <div className="w-1/2 p-2">
            <h1 className="font-semibold mb-3 text-xl">Account</h1>
            <div
              className="flex flex-col md:flex-row"
              onChange={handleAccountChange}
            >
              <div className="mx-2">
                <input
                  type="radio"
                  value="Deloitte"
                  checked={account === "Deloitte"}
                />{" "}
                Deloitte
              </div>
              <div className="mx-2">
                <input
                  type="radio"
                  value="Non-Deloitte"
                  checked={account === "Non-Deloitte"}
                />{" "}
                Non-Deloitte
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mb-3 shadow md:rounded-lg">
          <div className="md:flex-auto p-2 mx-2">
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

          <div className="md:flex-auto p-2 mx-2">
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

          <div className="md:flex-auto p-2 mx-2">
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

        <div className="flex flex-col md:flex-row mb-3 shadow md:rounded-lg">
          <div className="md:flex-auto p-2 mx-2">
            <label className="block tracking-wide text-xs font-bold mb-1">
              Work Type
            </label>
            <input
              className="rounded py-1 px-2 mb-2 w-full"
              type="text"
            ></input>
          </div>

          <div className="md:flex-auto p-2 mx-2">
            <label className="block tracking-wide text-xs font-bold mb-1">
              Salary Offert
            </label>
            <input
              className="rounded py-1 px-2 mb-2 w-full"
              type="text"
            ></input>
          </div>

          <div className="md:flex-auto p-3 mx-2">
            <div className="flex items-center justify-between">
              <div className="mx-1">
                <div className="block tracking-wide text-xs font-bold mb-1">
                  Rate
                </div>
                <div onChange={handleRateChange}>
                  <div>
                    <input type="radio" value="Yearly" checked={rate === "Yearly"} /> Yearly
                  </div>
                  <div>
                    <input type="radio" value="Hourly" checked={rate === "Hourly"} /> Hourly
                  </div>
                </div>
              </div>

              <div className="mx-1">
                <div className="block tracking-wide text-xs font-bold mb-1">
                  Form
                </div>
                <div onChange={handleFormChange}>
                  <div>
                    <input type="radio" value="W2" checked={form === "W2"} /> W2
                  </div>
                  <div>
                    <input type="radio" value="1099" checked={form === "1099"} /> 1099
                  </div>
                </div>
              </div>

              <div className="mx-1">
                <div className="block tracking-wide text-xs font-bold mb-1">
                  Benefits
                </div>
                <div onChange={handleBenefitsChange}>
                  <div>
                    <input type="radio" value="Yes" checked={benefits === "Yes"} /> Yes
                  </div>
                  <div>
                    <input type="radio" value="No" checked={benefits === "No"} /> No
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-3 text-right mt-3">
          <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full md:max-w-md"
                  onClick={handleClick}
          >
            Generate e-mail file
          </button>
        </div>
      </div>
    </div>
  );
}

export default RtrForm;
