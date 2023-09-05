import dealroom from "./dealroom.js"
import { Card, Metric, Text, Flex, Icon } from "@tremor/react";
import { CashIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <a
            className="pointer-events-none flex place-items-center lg:pointer-events-auto lg:p-0 lg:pb-8"
            href="https://base10.vc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
          className="relative"
          src="/base10.svg"
          alt="Base10 Logo"
          width={180}
          height={37}
        />
          </a>
      </div>

     
      <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
       {dealroom()}
      </div>
    </main>
  )
}