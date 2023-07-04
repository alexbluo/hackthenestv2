"use client";

import React, { ReactNode, useState } from "react";
import { motion, useCycle } from "framer-motion";
import useWindowWidth from "utils/useWindowWidth";
import ScheduleBlock from "./ScheduleBlock";

interface Block {
  name: ReactNode;
  time: string;
  description?: string;
  status: "neutral" | "hover" | "pressed" | "flush" | "hidden";
}

// make sure to maintain key uniqueness (name + time + description)
const saturday: Block[] = [
  {
    name: (
      <div className="flex w-full items-center justify-between">
        <p>Saturday</p>
        <svg
          height="16px"
          width="16px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M126.9 142.9c62.2-62.2 162.7-62.5 225.3-1L311 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H447.5c0 0 0 0 0 0H456c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L397.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C57.2 122 39.6 150.7 28.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM0 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L169 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H32.4h-.7H24c-13.3 0-24 10.7-24 24z" />
        </svg>
      </div>
    ),
    time: "9.23.23",
    status: "neutral",
  },
  {
    name: "Check-in",
    time: "21:30",
    description: "description here",
    status: "neutral",
  },
  {
    name: "Team Formation",
    time: "21:30",
    description: "description here",
    status: "neutral",
  },
  {
    name: "Opening Ceremony",
    time: "21:30",
    description: "description here",
    status: "neutral",
  },
  {
    name: "Lunch",
    time: "21:30",
    description: "description here",
    status: "neutral",
  },
  {
    name: "Dinner",
    time: "21:30",
    description: "description here",
    status: "neutral",
  },
  {
    name: "Ping Pong",
    time: "21:30",
    description: "description here",
    status: "neutral",
  },
  {
    name: "Ding Dong",
    time: "21:30",
    description: "description here",
    status: "neutral",
  },
];

const sunday: Block[] = [
  {
    name: (
      <div className="flex w-full items-center justify-between">
        <p>Sunday</p>
        <svg
          height="16px"
          width="16px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M126.9 142.9c62.2-62.2 162.7-62.5 225.3-1L311 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H447.5c0 0 0 0 0 0H456c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L397.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C57.2 122 39.6 150.7 28.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM0 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L169 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H32.4h-.7H24c-13.3 0-24 10.7-24 24z" />
        </svg>
      </div>
    ),
    time: "9.24.23",
    status: "neutral",
  },
  {
    name: "Hacking Ends",
    time: "21:30",
    description: "description here",
    status: "neutral",
  },
  {
    name: "Judging",
    time: "21:30",
    description: "description here",
    status: "neutral",
  },
  {
    name: "Closing Ceremony",
    time: "21:30",
    description: "description here",
    status: "neutral",
  },
  {
    name: "Breakfast",
    time: "21:30",
    description: "description here",
    status: "neutral",
  },
  {
    name: "Workshop",
    time: "21:30",
    description: "description here",
    status: "neutral",
  },
];

const ScheduleSection = () => {
  const [day, cycleDay] = useCycle("Saturday", "Sunday");
  const [blocks, setBlocks] = useState(saturday);
  const width = useWindowWidth();

  // flush randomly consistently persists if cycled right after page load for some reason...
  const staggerOutIn = () => {
    const incoming = day === "Saturday" ? sunday : saturday;
    cycleDay();

    // idk why setState comes after increment
    let iteration = -1;

    const interval = setInterval(() => {
      setBlocks((prev): Block[] => {
        const newBlocks: Block[] = [];

        // im so sorry
        for (let i = 0; i < Math.max(prev.length, incoming.length); i++) {
          const block = prev[i];

          if (
            i >= incoming.length &&
            iteration >= incoming.length &&
            i === iteration
          ) {
            // hide excess from previous set
            newBlocks.push({ ...block, status: "hidden" });
          } else if (i === iteration - 4) {
            // set incoming block when old one finishes animating
            newBlocks.push(incoming[iteration - 4]);
          } else if (block) {
            if (i === iteration) {
              // flush next block down each iteration
              newBlocks.push({ ...block, status: "flush" });
            } else {
              // default keep everything else the same
              newBlocks.push(block);
            }
          }
        }

        return newBlocks;
      });

      iteration += 1;

      if (iteration === incoming.length + 3) clearInterval(interval);
    }, 100);
  };

  // have to use callbacks in setState
  // https://stackoverflow.com/questions/33613728/what-happens-when-using-this-setstate-multiple-times-in-react-component
  const handleHoverStart = (target: number) => {
    setBlocks((prev) => {
      return prev.map((block, i) => {
        if (
          i === target &&
          block.status !== "pressed" &&
          block.status !== "flush" &&
          block.status !== "hidden"
        ) {
          return { ...block, status: "hover" };
        }

        return block;
      });
    });
  };

  const handleHoverEnd = (target: number) => {
    setTimeout(() => {
      setBlocks((prev) => {
        return prev.map((block, i) => {
          if (
            i === target &&
            block.status !== "pressed" &&
            block.status !== "flush" &&
            block.status !== "hidden"
          ) {
            return { ...block, status: "neutral" };
          }

          return block;
        });
      });
    }, 100);
  };

  const handleTap = (target: number) => {
    if (target === 0 && blocks[target].status !== "flush") staggerOutIn();

    setBlocks((prev) => {
      return prev.map((block, i) => {
        if (
          i === target &&
          block.status !== "flush" &&
          block.status !== "hidden"
        ) {
          return { ...block, status: i === 0 ? "flush" : "pressed" };
        }

        return block;
      });
    });
  };

  const handleClose = (target: number) => {
    setBlocks((prev) => {
      return prev.map((block, i) => {
        if (i === target) return { ...block, status: "neutral" };
        return block;
      });
    });
  };

  return (
    <section id="schedule">
      <div className="-mx-8 inline-block rounded-r-full bg-black px-8 py-2 sm:rounded-full">
        <h2 className="gradient-text">schedule</h2>
      </div>
      <motion.ul className="flex flex-col pt-40">
        {blocks.map(({ name, time, description, status }, i) => {
          return (
            <ScheduleBlock
              name={name}
              time={time}
              width={width}
              order={i}
              status={status}
              handleHoverStart={() => handleHoverStart(i)}
              handleHoverEnd={() => handleHoverEnd(i)}
              handleTap={() => handleTap(i)}
              handleClose={() => handleClose(i)}
              key={name + time + description}
            >
              {description}
            </ScheduleBlock>
          );
        })}
      </motion.ul>
    </section>
  );
};

export default ScheduleSection;
