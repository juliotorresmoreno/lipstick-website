import logoSrc from "@/assets/logo.jpeg";
import Image from "next/image";
import SignUpForm from "@/components/SignUpForm";
import Link from "next/link";

export default function SignUp() {
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 text-muted"
        >
          <Image
            style={{ width: "2rem", height: "2rem" }}
            src={logoSrc}
            className="rounded-full mr-2"
            alt="Logo"
          />
          Lipstick
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create and account
            </h1>
            <SignUpForm />
          </div>
        </div>
      </div>
    </section>
  );
}
