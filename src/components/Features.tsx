import Link from "next/link";

export function Features() {
  return (
    <section className="relative not-prose scroll-mt-[72px]" id="features">
      <div
        className="absolute inset-0 pointer-events-none -z-[1]"
        aria-hidden="true"
      >
        <div className="absolute inset-0" />
      </div>
      <div className="relative mx-auto px-4 lg:py-20 md:px-6 md:py-16 py-12 text-default max-w-screen-xl">
        <div className="text-center mb-8 md:mb-12 md:mx-auto">
          <h2 className="font-bold leading-tighter font-heading tracking-tighter text-heading md:text-4xl text-3xl">
            How exactly can our product help you?
          </h2>
          <p className="text-muted text-xl mt-4">
            With our service you could expose any local service that you can run
            on the Internet. Here are some use cases.
          </p>
        </div>
        <div className="mx-auto gap-8 grid sm:grid-cols-2 md:gap-y-12 text-lg">
          <div>
            <div className="flex flex-row  gap-2">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3rem"
                  height="3rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
                  />
                </svg>
              </div>
              <div className="mt-0.5">
                <h3 className="font-bold text-xl md:text-[1.3rem]">
                  Custom Web Application Development
                </h3>
                <p className="text-muted mt-3 text-justify">
                  Deploy web services with seamless access to your
                  organization&apos;s internal APIs without the need for a full
                  system migration. Enjoy a smooth integration process, allowing
                  incremental enhancements to your system without disruptions.
                  Experience the benefits of phased deployment, optimizing
                  efficiency while maintaining operational continuity.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row  gap-2">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3rem"
                  height="3rem"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0a1 1 0 0 0 2 0z"
                  />
                </svg>
              </div>
              <div className="mt-0.5">
                <h3 className="font-bold text-xl md:text-[1.3rem]">
                  Mobile App Development
                </h3>
                <p className="text-muted mt-3 text-justify">
                  Craft engaging real-time peer-to-peer applications that foster
                  interactive experiences. Our platform enables you to create
                  innovative solutions for direct communication and
                  collaboration. Whether it&apos;s messaging, file sharing, or
                  collaborative tools, explore the potential of seamless
                  applications leveraging peer-to-peer technology for enhanced
                  connectivity.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row  gap-2">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3rem"
                  height="3rem"
                  viewBox="0 0 48 48"
                >
                  <mask id="ipSAnalysis0">
                    <g fill="none" strokeWidth="4">
                      <path
                        fill="#fff"
                        stroke="#fff"
                        strokeLinejoin="round"
                        d="M44 5H4v12h40V5Z"
                      />
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4 41.03l12.176-12.3l6.579 6.3L30.798 27l4.48 4.368"
                      />
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        d="M44 16.172v26m-40-26v14M13.015 43H44"
                      />
                      <path
                        stroke="#000"
                        strokeLinecap="round"
                        d="M17 11h21m-28-.003h1"
                      />
                    </g>
                  </mask>
                  <path
                    fill="currentColor"
                    d="M0 0h48v48H0z"
                    mask="url(#ipSAnalysis0)"
                  />
                </svg>
              </div>
              <div className="mt-0.5">
                <h3 className="font-bold text-xl md:text-[1.3rem]">
                  Elevate Your Business with a Data-Driven Strategy
                </h3>
                <p className="text-muted mt-3 text-justify">
                  Enable cost-effective data sharing by providing seamless
                  access to your diverse data sources. Say goodbye to expensive
                  server setups and cloud service commitments while ensuring
                  efficient collaboration and data accessibility. Experience the
                  benefits of streamlined data management without compromising
                  security or incurring unnecessary expenses.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row  gap-2">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-aws"
                  width="3rem"
                  height="3rem"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M17 18.5a15.198 15.198 0 0 1 -7.37 1.44a14.62 14.62 0 0 1 -6.63 -2.94"></path>
                  <path d="M19.5 21c.907 -1.411 1.451 -3.323 1.5 -5c-1.197 -.773 -2.577 -.935 -4 -1"></path>
                  <path d="M3 11v-4.5a1.5 1.5 0 0 1 3 0v4.5"></path>
                  <path d="M3 9h3"></path>
                  <path d="M9 5l1.2 6l1.8 -4l1.8 4l1.2 -6"></path>
                  <path d="M18 10.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75"></path>
                </svg>
              </div>
              <div className="mt-0.5">
                <h3 className="font-bold text-xl md:text-[1.3rem]">
                  Unlocking Cloud Benefits with Minimal Commitment
                </h3>
                <p className="text-muted mt-3 text-justify">
                  Harness cloud benefits without lengthy commitments. Our
                  flexible solution offers scalability, on-demand services, and
                  enhanced flexibility, allowing you to adapt at your own pace
                  for agile and cost-effective results.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row  gap-2">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3rem"
                  height="3rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M21.928 11.607c-.202-.488-.635-.605-.928-.633V8c0-1.103-.897-2-2-2h-6V4.61c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5c-1.103 0-2 .897-2 2v2.997l-.082.006A1 1 0 0 0 1.99 12v2a1 1 0 0 0 1 1H3v5c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5a1 1 0 0 0 1-1v-1.938a1.006 1.006 0 0 0-.072-.455zM5 20V8h14l.001 3.996L19 12v2l.001.005l.001 5.995H5z"
                  />
                  <ellipse
                    cx="8.5"
                    cy="12"
                    fill="currentColor"
                    rx="1.5"
                    ry="2"
                  />
                  <ellipse
                    cx="15.5"
                    cy="12"
                    fill="currentColor"
                    rx="1.5"
                    ry="2"
                  />
                  <path fill="currentColor" d="M8 16h8v2H8z" />
                </svg>
              </div>
              <div className="mt-0.5">
                <h3 className="font-bold text-xl md:text-[1.3rem]">
                  Bot Integration
                </h3>
                <p className="text-muted mt-3 text-justify">
                  Pioneering the forefront of technological innovation, our
                  company specializes in the development of cutting-edge robotic
                  systems that boast advanced capabilities. What sets our
                  creations apart is the ability for users to seamlessly control
                  these sophisticated robots directly from the internet. This
                  revolutionary approach opens up a myriad of possibilities,
                  enabling remote operation and management of robotic assets
                  from any location with an internet connection.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row  gap-2">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3rem"
                  height="3rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M22 11a4 4 0 0 0-2-3.48A3 3 0 0 0 20 7a3 3 0 0 0-3-3h-.18A3 3 0 0 0 12 2.78A3 3 0 0 0 7.18 4H7a3 3 0 0 0-3 3a3 3 0 0 0 0 .52a4 4 0 0 0-.55 6.59A4 4 0 0 0 7 20h.18A3 3 0 0 0 12 21.22A3 3 0 0 0 16.82 20H17a4 4 0 0 0 3.5-5.89A4 4 0 0 0 22 11ZM11 8.55a4.72 4.72 0 0 0-.68-.32a1 1 0 0 0-.64 1.9A2 2 0 0 1 11 12v1.55a4.72 4.72 0 0 0-.68-.32a1 1 0 0 0-.64 1.9A2 2 0 0 1 11 17v2a1 1 0 0 1-1 1a1 1 0 0 1-.91-.6a4.07 4.07 0 0 0 .48-.33a1 1 0 1 0-1.28-1.54A2 2 0 0 1 7 18a2 2 0 0 1-2-2a2 2 0 0 1 .32-1.06A3.82 3.82 0 0 0 6 15a1 1 0 0 0 0-2a1.84 1.84 0 0 1-.69-.13A2 2 0 0 1 5 9.25a3.1 3.1 0 0 0 .46.35a1 1 0 1 0 1-1.74a.9.9 0 0 1-.34-.33A.92.92 0 0 1 6 7a1 1 0 0 1 1-1a.76.76 0 0 1 .21 0a3.85 3.85 0 0 0 .19.47a1 1 0 0 0 1.37.37a1 1 0 0 0 .36-1.34A1.06 1.06 0 0 1 9 5a1 1 0 0 1 2 0Zm7.69 4.32A1.84 1.84 0 0 1 18 13a1 1 0 0 0 0 2a3.82 3.82 0 0 0 .68-.06A2 2 0 0 1 19 16a2 2 0 0 1-2 2a2 2 0 0 1-1.29-.47a1 1 0 0 0-1.28 1.54a4.07 4.07 0 0 0 .48.33a1 1 0 0 1-.91.6a1 1 0 0 1-1-1v-2a2 2 0 0 1 1.32-1.87a1 1 0 0 0-.64-1.9a4.72 4.72 0 0 0-.68.32V12a2 2 0 0 1 1.32-1.87a1 1 0 0 0-.64-1.9a4.72 4.72 0 0 0-.68.32V5a1 1 0 0 1 2 0a1.06 1.06 0 0 1-.13.5a1 1 0 0 0 .36 1.37a1 1 0 0 0 1.37-.37a3.85 3.85 0 0 0 .19-.5a.76.76 0 0 1 .21 0a1 1 0 0 1 1 1a1 1 0 0 1-.17.55a.9.9 0 0 1-.33.31a1 1 0 0 0 1 1.74a2.66 2.66 0 0 0 .5-.35a2 2 0 0 1-.27 3.62Z"
                  />
                </svg>
              </div>
              <div className="mt-0.5">
                <h3 className="font-bold text-xl md:text-[1.3rem]">
                  Integrates advanced AI services
                </h3>
                <p className="text-muted mt-3 text-justify">
                  Maximize AI efficiency and security by creating and storing
                  services locally. Our cost-effective platform ensures
                  financial protection and data privacy. Tailor solutions to
                  your industry&apos;s needs, enjoying user-friendly interfaces for
                  easy AI management. Transform your approach to AI with
                  accessibility and security at the forefront.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
