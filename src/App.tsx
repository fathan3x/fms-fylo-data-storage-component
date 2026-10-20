import "@fontsource-variable/raleway";
import { cn } from "cn";

import bgDesktop from "./assets/bg-desktop.png";
import bgMobile from "./assets/bg-mobile.png";
import logo from "./assets/logo.svg";
import document from "./assets/icon-document.svg";
import folder from "./assets/icon-folder.svg";
import upload from "./assets/icon-upload.svg";
import { Slider } from "@base-ui/react";
import { useState } from "react";

export default function App() {
  const style = {
    "bg-blue-950": "bg-[hsl(229,57%,11%)]",
    "bg-blue-850": "bg-[hsl(228,56%,26%)]",
    "text-blue-200": "text-[hsl(243,100%,93%)]",
  };

  const [value] = useState(815);
  const realValue = value === 50 ? value - 50 : value;

  return (
    <main
      className={cn(
        style["bg-blue-950"],
        "relative w-screen min-h-screen flex items-center justify-center p-6 font-['Raleway_Variable']",
      )}
    >
      <img
        src={bgDesktop}
        className="lg:block hidden absolute bottom-0 left-0 w-full z-1"
      />
      <img
        src={bgMobile}
        className="block lg:hidden absolute bottom-0 left-0 w-full z-1"
      />
      <section className="relative z-2 flex flex-col lg:flex-row lg:items-end gap-10 max-w-5xl w-full">
        <article
          className={cn(
            style["bg-blue-850"],
            "p-10 shadow-xl space-y-10 basis-[40%] shrink-0 rounded-b-xl rounded-tl-xl rounded-tr-[8rem]",
          )}
        >
          <img src={logo} />
          <div className="flex items-center gap-4">
            <div
              className={cn(
                style["bg-blue-950"],
                "w-12 h-12 p-2 rounded-md flex items-center justify-center",
              )}
            >
              <img src={document} />
            </div>
            <div
              className={cn(
                style["bg-blue-950"],
                "w-12 h-12 p-2 rounded-md flex items-center justify-center",
              )}
            >
              <img src={folder} />
            </div>
            <div
              className={cn(
                style["bg-blue-950"],
                "w-12 h-12 p-2 rounded-md flex items-center justify-center",
              )}
            >
              <img src={upload} />
            </div>
          </div>
        </article>
        <article
          className={cn(
            style["bg-blue-850"],
            style["text-blue-200"],
            "p-10 shadow-xl space-y-5 flex-1 rounded-xl",
          )}
        >
          <p className="text-center lg:text-left">
            You've used <strong className="font-bold">{realValue} GB</strong> of
            your storage
          </p>
          <div className="space-y-2 relative">
            <Slider.Root max={1000} value={value}>
              <Slider.Control className="flex items-center w-full select-none">
                <Slider.Track className="w-full h-5 px-1 pt-1 pb-6 rounded-full bg-[hsl(229,57%,11%)]/60 overflow-hidden">
                  <Slider.Indicator className="bg-linear-to-r from-[hsl(6,100%,80%)] to-[hsl(335,100%,65%)] rounded-full" />
                  <Slider.Thumb
                    aria-label="Volume"
                    className="w-4 h-4 bg-white rounded-full translate-x-[-140%]! lg:translate-y-[-48%]! translate-y-[-52%]!"
                  />
                </Slider.Track>
              </Slider.Control>
            </Slider.Root>
            <div className="flex items-center justify-between text-sm font-bold">
              <p>0 GB</p>
              <p>1000 GB</p>
            </div>
            <div className="hidden p-4 bg-white text-black/50 absolute -top-30 right-0 font-bold lg:flex items-center rounded-md gap-4 w-fit">
              <p className="text-3xl text-black">{1000 - realValue}</p>
              <p>GB LEFT</p>
              <div className="[clip-path:polygon(0_0,calc(100%-40px)_0,100%_40px,100%_100%,0_100%)] bg-white absolute z-1 w-10 h-10 rotate-180 -bottom-5 right-0" />
            </div>
            <div className="lg:hidden p-4 bg-white text-black/50 absolute top-26 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold flex items-center rounded-md gap-4 w-fit">
              <p className="text-3xl text-black">{1000 - realValue}</p>
              <p>GB LEFT</p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
