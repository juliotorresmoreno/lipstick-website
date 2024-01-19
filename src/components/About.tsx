import { Card } from "flowbite-react";
import Image from "next/image";
import cloudSrc from "@/assets/cloud.jpg";

export function About() {
  return (
    <section className="bg-white" id="about">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="w-full"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          alt="dashboard image"
        />
        <img
          className="w-full hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
          alt="dashboard image"
        />
        <div className="mt-4 md:mt-0 text-default">
          <h2 className="leading-tighter font-extrabold font-heading tracking-tighter text-heading md:text-4xl text-3xl">
            Create and integrate services into your real world
          </h2>
          <p className="text-muted text-xl mt-4 text-justify">
            We've engineered a system that empowers you to seamlessly share your
            local services and integrations, making them accessible on the
            Internet. This groundbreaking platform enables the development of
            advanced robotic systems, facilitates the sharing of web cameras,
            and extends to the accessibility of your company's internal data and
            expensive artificial intelligence models. The key advantage lies in
            running these resource-intensive AI models in the cloud using your
            own infrastructure, unlocking unprecedented flexibility and
            cost-effectiveness for your operations. Join us in transforming the
            way you leverage your resources for a more connected and efficient
            future.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center:ring-primary-900"
          >
            Get started
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
