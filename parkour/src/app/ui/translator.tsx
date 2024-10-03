"use client"
import { clsx } from 'clsx';
import React from 'react';
import { parkourTranslate } from '../util/parkourTranslate';
import CopyInput from './copyInput';

export default function Translator() {

  const [mode, setMode] = React.useState("english");
  const [translation, setTranslation] = React.useState("");

  return (
    <>
    <form className="flex flex-col gap-4 w-full max-w-[400px]" onSubmit={(e) => e.preventDefault()}>
      <div className="flex space-x-1">
        <button
          type="button"
          className={clsx("p-4 bg-blue-500 text-white rounded-lg rounded-r-none w-full", {
            "outline outline-white -outline-offset-3": mode === "english",
          })}
          onClick={() => setMode("english")}
        >
          English to Parkour
        </button>
        <button
          type="button"
          className={clsx("p-4 bg-blue-500 text-white rounded-lg rounded-l-none w-full", {
            "outline outline-white -outline-offset-3": mode === "parkour",
          })}
          onClick={() => setMode("parkour")}
        >
          Parkour to English
        </button>
      </div>
      <textarea
        className="p-4 bg-gray-100 rounded-lg text-black"
        id="translator-text"
        placeholder={
          mode === "english"
            ? "Type in your English text here..."
            : "Type in your Parkour text here..."
        }
      />
      <button
          type="button"
          className="p-4 bg-blue-500 text-white rounded-lg"
          onClick={() => {
            const inputElement = document.getElementById("translator-text") as HTMLInputElement | "";
            if (!inputElement) {
              console.log("Input element not found.");
              return;
            }
            setTranslation(parkourTranslate(mode, inputElement.value));
            // TODO Deal with undefined parkour to english (e.g. _AAA_ input)
            const modal = document.getElementById("modal") as HTMLDivElement | "";
            if (modal) {
              modal.style.display = "block";
            } else {
              console.log("Modal not found.");
            }
          }}
        >
          Translate
        </button>
    </form>

    <div
      id="modal"
      className="fixed inset-0 bg-black bg-opacity-50 hidden"
      onClick={() => {
        const modal = document.getElementById("modal") as HTMLDivElement | "";
        if (modal) {
          modal.style.display = "none";
        } else {
          console.log("Modal not found.");
        }
      }}
    >
      <div className="flex items-center justify-center fixed inset-0">
        <div className="bg-white p-4 rounded-lg w-1/5">
          <div className="flex items-center justify-center">
            <h1 className="text-black text-lg font-bold">Translation</h1>
          </div>
          
          <div id="validity-text" className="text-black flex items-center justify-center hidden">
          </div>
          <div id="copy-container" className="flex items-center justify-center">
            <CopyInput translation={translation}/>
          </div>
        </div>
      </div>

    </div>

    </>

  );
}