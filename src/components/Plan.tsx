import React from "react";

interface PlanProps {
  code: string;
  title: string;
  description: string;
  price: string;
  features: React.ReactNode[];
}

export const Plan: React.FC<PlanProps> = (props: PlanProps) => {
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
      <h3 className="mb-4 text-2xl font-semibold">{props.title}</h3>
      <p className="sm:text-lg">{props.description}</p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">{props.price}</span>
        <span className="">/month</span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left">
        <li className="flex items-center space-x-3">
          <svg
            className="flex-shrink-0 w-5 h-5 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>Individual configuration</span>
        </li>
        {props.features.map((feature, index) => (
          <li
            key={`${feature}-${index}`}
            className="flex items-center space-x-3"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={`/sign-up?plan=${props.code}`}
        className="bg-blue-600 hover:bg-blue-800 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center :ring-primary-900"
      >
        Get started
      </a>
    </div>
  );
};
