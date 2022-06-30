import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <div className="py-10 px-12 flex-1">
        <h2 className="text-primary text-2xl mb-3.5">Analytics</h2>
        <TopNavigation />
      </div>
    </div>
  );
}

const Sidebar = () => {
  return (
    <div className="w-[58px] bg-primary p-2.5 flex-none">
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
          isActive ? "font-bold border-b border-primary/30" : "",
          "text-primary text-[15px] pb-0.5"
        )}
        onClick={() => setTab(value)}
      >
        {text}
      </button>
    );
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-6">
        <TabButton text="Reviews & Ratings" value="review-rating" />
        <TabButton text="NPS" value="nps" />
        <TabButton text="Leaderboards" value="leaderboards" />
      </div>
      <div className="flex items-center gap-6">
        <MockDropdown name="Agency" className="text-sm font-semibold" />
        <button className="h-10 w-[130px] text-white uppercase text-xs font-bold bg-secondary rounded flex-center">
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
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
                <a
                  href="#"
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
