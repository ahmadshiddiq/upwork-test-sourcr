import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="flex-1 py-10 px-12">
        <h2 className="mb-3.5 text-2xl text-primary">Analytics</h2>
        <TopNavigation />

        <div className="flex gap-6">
          <ReviewOverview />
          <div className="w-5/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, fuga
            minus. Facere ducimus laborum asperiores consequuntur dolor
            voluptatum eos. Est, quibusdam. Saepe veritatis doloremque officiis
            et eius! Maiores, veritatis. Ipsum.
          </div>
        </div>
      </div>
    </div>
  );
}

const ReviewOverview = () => {
  const InfoBox = ({ number, text, status }) => {
    const borderColor =
      status === "error"
        ? "border-error"
        : status === "warning"
        ? "border-warning"
        : status === "normal"
        ? "border-gray-700"
        : "border-gray-400";

    const dotColor =
      status === "error"
        ? "bg-error"
        : status === "warning"
        ? "bg-warning"
        : status === "normal"
        ? "bg-gray-700"
        : "bg-gray-400";

    return (
      <div
        className={`${borderColor} flex-center relative h-[94px] w-[99px] flex-col gap-1.5 rounded border bg-white p-2 drop-shadow-one`}
      >
        {status && (
          <div
            className={`${dotColor} absolute right-2 top-2 h-1.5 w-1.5 rounded-full`}
          />
        )}
        <p className="text-lg font-bold text-primary">{number}</p>
        <p className="text-center text-[13px] font-medium text-primary">
          {text}
        </p>
      </div>
    );
  };

  return (
    <div className="flex w-7/12 flex-col">
      <div className="mb-8 rounded bg-white p-6 drop-shadow-one">
        <p className="mb-4 text-lg font-medium text-primary">
          Reviews Overview
        </p>
        <div className="flex gap-2">
          <InfoBox number={5} text="Missing Verification" status="error" />
          <InfoBox number={2} text="Invite not sent" status="normal" />
          <InfoBox number={3} text="Invite Scheduled" />
          <InfoBox number={6} text="Invite Sent" status="warning" />
          <InfoBox number={2} text="Missing Reply" status="error" />
          <InfoBox number={100} text="Complete" />
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-[58px] flex-none bg-primary p-2.5">
      <a href="/">
        <img src="/logo.svg" alt="" className="h-[38px] w-[38px]" />
      </a>
    </div>
  );
};

const TopNavigation = () => {
  const [tab, setTab] = useState("review-rating");

  const TabButton = ({ text, value }) => {
    const isActive = value === tab;
    return (
      <button
        className={classNames(
          isActive ? "border-b border-primary/30 font-bold" : "",
          "pb-1.5 text-[15px] text-primary"
        )}
        onClick={() => setTab(value)}
      >
        {text}
      </button>
    );
  };

  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex gap-6">
        <TabButton text="Reviews & Ratings" value="review-rating" />
        <TabButton text="NPS" value="nps" />
        <TabButton text="Leaderboards" value="leaderboards" />
      </div>
      <div className="flex items-center gap-6">
        <MockDropdown name="Agency" className="text-sm font-semibold" />
        <button className="flex-center h-10 w-[130px] rounded bg-secondary text-xs font-bold uppercase text-white">
          get reviews
        </button>
      </div>
    </div>
  );
};

const MockDropdown = ({ name, className }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center">
          <span className={className}>{name}</span>
          <img src="/chevron-down.svg" alt="" className="h-4 w-4" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                // eslist-disable-next-line
                <a
                  href="#fake-one"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  First Item
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                // eslist-disable-next-line
                <a
                  href="#fake-two"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Second Item
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default App;
