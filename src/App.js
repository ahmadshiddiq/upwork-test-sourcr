import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, StarIcon } from "@heroicons/react/solid";
import { QuestionMarkCircleIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-auto py-10 px-12">
        <h2 className="mb-3.5 text-2xl text-primary">Analytics</h2>
        <TopNavigation />

        <div className="flex gap-6">
          <div className="flex w-7/12 flex-col">
            <ReviewOverview />
            <Reviews />
          </div>
          <div className="flex w-5/12 flex-col gap-6">
            <OverallRatings />
            <EmployerRatings />
            <CandidateRatings />
            <SpecialisationRatings />
          </div>
        </div>
      </div>
    </div>
  );
}

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
    <div className="mb-8 rounded bg-white p-6 drop-shadow-one">
      <p className="mb-4 text-lg font-medium text-primary">Reviews Overview</p>
      <div className="flex flex-wrap gap-2">
        <InfoBox number={5} text="Missing Verification" status="error" />
        <InfoBox number={2} text="Invite not sent" status="normal" />
        <InfoBox number={3} text="Invite Scheduled" />
        <InfoBox number={6} text="Invite Sent" status="warning" />
        <InfoBox number={2} text="Missing Reply" status="error" />
        <InfoBox number={100} text="Complete" />
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="rounded bg-white drop-shadow-one">
      <div className="flex justify-between px-6 pt-[22px] pb-4">
        <div className="flex items-center gap-2.5">
          <p className="text-lg font-medium text-primary">Reviews Overview</p>
          <div className="w-max rounded-full bg-error px-1.5 py-0.5 text-xs font-semibold text-white">
            40
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-[22px]">
              <div className="flex items-center gap-1">
                <p className="text-primary">Your Reply Score</p>
                <QuestionMarkCircleIcon className="h-4 w-4 text-[#6F7283]" />
              </div>
              <p className="text-sm font-semibold text-error">20%</p>
            </div>

            <div className="relative h-1 w-full rounded-full bg-gray-300">
              <div
                className="absolute h-full rounded-full bg-error"
                style={{ width: "20%" }}
              />
            </div>
          </div>
          <button className="text-[13px] font-semibold text-secondary underline">
            View all
          </button>
        </div>
      </div>

      <div className="flex flex-col divide-y divide-gray-200">
        {[1, 2, 3, 4].map((item) => (
          <div className="flex items-center py-4 px-6" key={item}>
            <div className="flex-1">
              <p className="mb-1.5 text-base font-bold text-primary">
                Chris Almond (Employer)
              </p>
              <p className="mb-2 text-sm font-medium text-[#6F7283]">
                Head of Digital, Google
              </p>
              <p className="text-xs text-gray-400">Matte Harte</p>
            </div>
            <div className="flex-1 flex-col">
              <div className="mb-1 flex flex-1 items-center gap-2">
                <Stars rating={5} />
                <p className="text-[13px] text-[#949494]">Fev 2020</p>
              </div>
              <p className="text-sm font-medium text-primary">
                Outstanding service.
              </p>
            </div>
            <button className="flex-center h-9 w-[60px] flex-none rounded border border-secondary bg-white text-xs font-bold uppercase text-secondary">
              Reply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const OverallRatings = () => {
  return (
    <div className="rounded bg-white p-6 drop-shadow-one">
      <p className="mb-4 text-lg font-medium text-primary">
        Awesome! Your overall rating is <b>4.9</b>
      </p>
      <div className="flex items-center gap-2">
        <Stars rating={5} />
        <p className="text-sm font-medium text-gray-500">
          (4.9 rating based on 20 reviews)
        </p>
      </div>
    </div>
  );
};

const EmployerRatings = () => {
  const mockData = [
    {
      id: 1,
      star: 0,
      percentage: 0,
    },
    {
      id: 2,
      star: 0,
      percentage: 0,
    },
    {
      id: 3,
      star: 0,
      percentage: 0,
    },
    {
      id: 4,
      star: 1,
      percentage: "2.5",
    },
    {
      id: 1,
      star: 39,
      percentage: "97.5",
    },
  ];

  return (
    <div className="rounded bg-white p-6 drop-shadow-one">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-lg font-medium text-primary">Employer Ratings</p>
        <MockDropdown name="All categories" className="text-sm font-medium" />
      </div>
      <div className="mb-4 flex items-center gap-2">
        <Stars rating={5} />
        <p className="text-sm font-medium text-gray-500">
          (4.9 rating based on 20 reviews)
        </p>
      </div>
      <div>
        <div className="flex h-[60px] items-end gap-6">
          {mockData.map((data) => (
            <div className="flex-center relative h-full flex-1">
              <p
                className={classNames(
                  data.percentage >= 60 ? "text-white" : "text-primary",
                  "relative z-10 text-center text-[13px] font-semibold"
                )}
              >
                {data.percentage}%
              </p>

              <div
                className="flex-center absolute bottom-0 w-full bg-[#5EBEDD]"
                style={{ height: `${data.percentage}%` }}
              ></div>
            </div>
          ))}
        </div>
        <hr className="mb-2 border-gray-300" />
        <div className="flex gap-6">
          {mockData.map((data, idx) => (
            <div className="flex flex-1 flex-col text-center text-[13px] font-medium text-gray-400">
              <p className="">{idx + 1} stars</p>
              <p className="">({data.star})</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CandidateRatings = () => {
  const mockData = [
    {
      id: 1,
      star: 0,
      percentage: 0,
    },
    {
      id: 2,
      star: 0,
      percentage: 0,
    },
    {
      id: 3,
      star: 0,
      percentage: 0,
    },
    {
      id: 4,
      star: 1,
      percentage: "10",
    },
    {
      id: 1,
      star: 9,
      percentage: "90",
    },
  ];

  return (
    <div className="rounded bg-white p-6 drop-shadow-one">
      <p className="mb-4 text-lg font-medium text-primary">Candidate Ratings</p>
      <div className="flex items-center gap-2">
        <Stars rating={5} />
        <p className="text-sm font-medium text-gray-500">
          (4.9 rating based on 20 reviews)
        </p>
      </div>
      <div>
        <div className="flex h-[60px] items-end gap-6">
          {mockData.map((data) => (
            <div className="flex-center relative h-full flex-1">
              <p
                className={classNames(
                  data.percentage >= 60 ? "text-white" : "text-primary",
                  "relative z-10 text-center text-[13px] font-semibold"
                )}
              >
                {data.percentage}%
              </p>

              <div
                className="flex-center absolute bottom-0 w-full bg-[#5EBEDD]"
                style={{ height: `${data.percentage}%` }}
              ></div>
            </div>
          ))}
        </div>
        <hr className="mb-2 border-gray-300" />
        <div className="flex gap-6">
          {mockData.map((data, idx) => (
            <div className="flex flex-1 flex-col text-center text-[13px] font-medium text-gray-400">
              <p className="">{idx + 1} stars</p>
              <p className="">({data.star})</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SpecialisationRatings = () => {
  return (
    <div className="rounded bg-white p-6 drop-shadow-one">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-lg font-medium text-primary">
          Specialisation Ratings
        </p>
        <MockDropdown name="Overall Ratings" className="text-sm font-medium" />
      </div>
      <div className="flex items-center gap-[18px]">
        <p className="flex-none text-sm font-medium text-primary">Digital</p>
        <div className="relative flex h-[18px] flex-1 items-center rounded-full bg-gray-300">
          <div
            className="absolute h-full rounded-full bg-[#5EBEDD]"
            style={{ width: "98%" }}
          />
          <p className="absolute right-[26px] text-xs font-semibold text-white">
            4.9 stars (20)
          </p>
        </div>
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
          <ChevronDownIcon className="h-4 w-4 text-primary" />
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
        <Menu.Items className="absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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

const Stars = ({ rating }) => {
  return (
    <div className="flex">
      {[0, 1, 2, 3, 4].map((item) => (
        <StarIcon
          key={item}
          className={classNames(
            rating > item ? "text-warning" : "text-gray-300",
            "h-5 w-5 flex-shrink-0"
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export default App;
