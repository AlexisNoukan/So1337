import React from "react"
import Greetings from "../components/Greetings"

const Contact = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center bg-opacity-0  relative mb-5 ">
      <div className="flex flex-col  items-center pt-3 justify-evenly bg-white h-screen min-h-fit relative mb-9 px-5 overflow-scroll  xl:w-2/5 md:w-5/6 sm:w-5/6  ">
        <div className="py-6 px-3 bg-black ">
            {/* <Greetings /> */}
          <h1 className="uppercase text-center font-bold text-white text-4xl ">
            join us
          </h1>
        </div>
        <div className="flex flex-wrap w-96 h-96 ">
          <div className="flex flex-col w-1/2 h-1/2 pb-6 pr-9">
            <a
              className="bg-dex bg-contain bg-center bg-no-repeat w-full h-full "
              href="https://dexscreener.com/solana/bjzuvecdybybchremy5nbes7thrutxqfesrer4fxpqfb"
            ></a>
            <a
              className="hover:underline"
              href="https://dexscreener.com/solana/bjzuvecdybybchremy5nbes7thrutxqfesrer4fxpqfb"
            >
              <p className="uppercase text-xl text-center font-medium pt-6">
                Dexscreener
              </p>
            </a>
          </div>
          <div className="flex flex-col w-1/2 h-1/2 pb-6 pr-9">
            <a
              className="bg-x bg-contain bg-center bg-no-repeat w-full h-full "
              href="https://twitter.com/so1337_sol"
            ></a>
            <a
              className="hover:underline"
              href="https://twitter.com/so1337_sol"
            >
              <p className="uppercase text-xl text-center font-medium pt-6">
                X twitter
              </p>
            </a>
          </div>
          <div className="flex flex-col w-1/2 h-1/2 pb-6 pr-9">
            <a
              className="bg-telegram bg-contain bg-center bg-no-repeat w-full h-full "
              href="https://t.me/+s_zAk1M2sqNiNjNk"
            ></a>
            <a
              className="hover:underline"
              href="https://t.me/+s_zAk1M2sqNiNjNk"
            >
              <p className="uppercase text-xl text-center font-medium pt-6">
                Telegram
              </p>
            </a>
          </div>
        </div>
        <p className="text-2xl flex flex-col items-center font-medium">
          You can check out SO1337's
          <a
            className="hover:underline"
            href="https://twitter.com/so1337_sol/status/1776159876651110596"
          >
            {" "}
            History
          </a>
          <br />
          <a
            className="hover:underline"
            href="https://twitter.com/so1337_sol/status/1775917653812527181"
          >
            {" "}
            Team
          </a>
        </p>
      </div>
      <div className="flex flex-col w-full justify-center items-center bg-opacity-0  relative mb-5 ">
        <div className="bg-head animate-pulse bg-contain bg-center bg-no-repeat w-40 h-40 "></div>
      </div>
    </div>
  )
}

export default Contact
