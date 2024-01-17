import Image from "next/image";
import connectionsSrc from "../assets/network.png";
import programmerSrc from "../assets/team.png";

export function Insides() {
  return (
    <>
      <section className="relative not-prose scroll-mt-[72px]" id="insides">
        <div
          className="absolute inset-0 pointer-events-none -z-[1]"
          aria-hidden="true"
        >
          <div className="absolute inset-0 " />
        </div>
        <div className="relative mx-auto px-4 lg:py-20 md:px-6 md:py-16 py-12 text-default max-w-screen-xl">
          <div className="text-center mb-8 md:mb-12 md:mx-auto lg:max-w-2xl max-w-xl sm:mx-auto">
            <h2 className="font-bold leading-tighter leading-tighter font-heading tracking-tighter text-heading mb-4 md:text-5xl text-4xl">
              Grow your business and protect your data
            </h2>
          </div>
          <div className="mx-auto max-w-7xl md:px-8">
            <div className="md:flex md:gap-16 md:flex-row-reverse">
              <div className="md:basis-1/2 self-center">
                <div className="text-lg mb-12">
                  <h3 className="font-bold text-2xl mb-2 sm:text-3xl tracking-tight">
                    Building on modern foundations
                  </h3>
                  Gain a competitive advantage by incorporating industry leading
                  practices
                </div>
                <div className="mx-auto gap-8 grid gap-y-4 md:gap-y-8 ">
                  <div>
                    <div className="flex flex-row max-w-none gap-1">
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m3 19l4.5-7L3 5h12q.5 0 .938.225t.712.625L21 12l-4.35 6.15q-.275.4-.713.625T15 19H3Z"
                          />
                        </svg>
                      </div>
                      <div className="mt-0.5">
                        <h3 className="font-bold text-xl md:text-[1.3rem] ml-2">
                          Robust and Secure Code
                        </h3>
                        <p className="text-muted mt-3 ml-2 rtl:ml-0 rtl:mr-2">
                          We develop code that&apos;s not just functional, but
                          also secure, providing peace of mind for both you and
                          your users.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row max-w-none">
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m3 19l4.5-7L3 5h12q.5 0 .938.225t.712.625L21 12l-4.35 6.15q-.275.4-.713.625T15 19H3Z"
                          />
                        </svg>
                      </div>
                      <div className="mt-0.5">
                        <h3 className="font-bold text-xl md:text-[1.3rem] ml-2">
                          Scalable Architectures
                        </h3>
                        <p className="text-muted mt-3 ml-2 rtl:ml-0 rtl:mr-2">
                          Our solutions are built with scalability in mind,
                          ensuring they can grow alongside your business&apos;s
                          needs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row max-w-none">
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m3 19l4.5-7L3 5h12q.5 0 .938.225t.712.625L21 12l-4.35 6.15q-.275.4-.713.625T15 19H3Z"
                          />
                        </svg>
                      </div>
                      <div className="mt-0.5">
                        <h3 className="font-bold text-xl md:text-[1.3rem] ml-2">
                          Rigorous Testing Frameworks
                        </h3>
                        <p className="text-muted mt-3 ml-2 rtl:ml-0 rtl:mr-2">
                          We employ comprehensive testing methodologies to
                          deliver code that is reliable and robust under all
                          conditions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:basis-1/2 md:mt-0 mt-10" aria-hidden="true">
                <div className="relative m-auto max-w-4xl">
                  <Image
                    alt="Skilled programmer writing code on a computer."
                    decoding="async"
                    height={500}
                    loading="lazy"
                    src={programmerSrc}
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      width: "100%",
                      height: "auto",
                      aspectRatio: 1,
                    }}
                    width={500}
                    className="mx-auto w-full bg-gray-500 rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative not-prose scroll-mt-[72px]">
        <div
          className="absolute inset-0 pointer-events-none -z-[1]"
          aria-hidden="true"
        >
          <div className="absolute inset-0" />
        </div>
        <div className="relative mx-auto px-4 lg:py-20 md:px-6 md:py-16 py-12 text-default max-w-7xl lg:pt-0 md:pt-0 pt-0">
          <div className="mx-auto max-w-7xl md:px-8 p-4">
            <div className="md:flex md:gap-16">
              <div className="md:basis-1/2 self-center ">
                <div className="mx-auto gap-8 grid gap-y-4 md:gap-y-8 ">
                  <div>
                    <div className="flex flex-row max-w-none">
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m3 19l4.5-7L3 5h12q.5 0 .938.225t.712.625L21 12l-4.35 6.15q-.275.4-.713.625T15 19H3Z"
                          />
                        </svg>
                      </div>
                      <div className="mt-0.5">
                        <h3 className="font-bold text-xl md:text-[1.3rem] ml-2">
                          Future-Proofed Development
                        </h3>
                        <p className="text-muted mt-3 ml-2 rtl:ml-0 rtl:mr-2">
                          Our code is designed to adapt and thrive in the face
                          of ever-evolving technology trends and requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row max-w-none">
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m3 19l4.5-7L3 5h12q.5 0 .938.225t.712.625L21 12l-4.35 6.15q-.275.4-.713.625T15 19H3Z"
                          />
                        </svg>
                      </div>
                      <div className="mt-0.5">
                        <h3 className="font-bold text-xl md:text-[1.3rem] ml-2">
                          Efficient Code Optimization
                        </h3>
                        <p className="text-muted mt-3 ml-2 rtl:ml-0 rtl:mr-2">
                          We fine-tune our code for performance, so your
                          applications run at peak efficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row max-w-none">
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m3 19l4.5-7L3 5h12q.5 0 .938.225t.712.625L21 12l-4.35 6.15q-.275.4-.713.625T15 19H3Z"
                          />
                        </svg>
                      </div>
                      <div className="mt-0.5">
                        <h3 className="font-bold text-xl md:text-[1.3rem] ml-2">
                          Fully responsive design
                        </h3>
                        <p className="text-muted mt-3 ml-2 rtl:ml-0 rtl:mr-2">
                          Ensure your website&apos;s optimal performance on
                          various devices and screen sizes, providing a
                          consistent and enjoyable user experience.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row max-w-none">
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m3 19l4.5-7L3 5h12q.5 0 .938.225t.712.625L21 12l-4.35 6.15q-.275.4-.713.625T15 19H3Z"
                          />
                        </svg>
                      </div>
                      <div className="mt-0.5">
                        <h3 className="font-bold text-xl md:text-[1.3rem] ml-2">
                          Responsive Support
                        </h3>
                        <p className="text-muted mt-3 ml-2 rtl:ml-0 rtl:mr-2">
                          Count on us for quick and effective support whenever
                          you encounter issues or need assistance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:basis-1/2 md:mt-0 mt-10" aria-hidden="true">
                <div className="relative m-auto max-w-4xl">
                  <Image
                    alt="Diverse group of individuals engaging in social connections and interactions."
                    decoding="async"
                    height={500}
                    loading="lazy"
                    src={connectionsSrc}
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      width: "100%",
                      height: "auto",
                      aspectRatio: 1,
                    }}
                    width={500}
                    className="mx-auto w-full bg-gray-500 rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
