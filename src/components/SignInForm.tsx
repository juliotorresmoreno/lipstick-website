"use client";
import { useMemo, useState } from "react";
import { Alert } from "flowbite-react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "@/lib/reducers/app";
import { AuthService } from "@/services/auth";
import { useAppDispatch } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { RootState } from "@/lib/reducers";
import { Config } from "@/types/models";
import { HiInformationCircle } from "react-icons/hi";
import * as auth from "@/lib/actions/auth";
import useInput from "@/hooks/useInput";

interface SignInFormProps {}

type _SignInFormProps = { app: AppState } & SignInFormProps;

function _SignInForm(props: _SignInFormProps) {
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const { value: email, onChange: onEmailChange } = useInput("");
  const { value: password, onChange: onPasswordChange } = useInput("");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const authService = useMemo<AuthService>(
    () => new AuthService(props.app as Config),
    []
  );

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (evt) => {
    evt.preventDefault();
    authService
      .login({ email, password })
      .then((session) => {
        dispatch(auth.setSession(session));
        router.push("/app");
      })
      .catch((err: Error) => {
        console.log(err);
        const cause: any = err.cause;
        setEmailErr(cause.email);
        setPasswordErr(cause.password);
      });
  };

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={onEmailChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required
        />
        {emailErr && (
          <Alert className="mt-2" color="failure" icon={HiInformationCircle}>
            {emailErr}
          </Alert>
        )}
      </div>

      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
        {passwordErr && (
          <Alert className="mt-2" color="failure" icon={HiInformationCircle}>
            {passwordErr}
          </Alert>
        )}
      </div>

      <button
        type="submit"
        className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Sign in
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?{" "}
        <a
          href="/sign-up"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Sign up
        </a>
      </p>
    </form>
  );
}

const mapStateToProps = (state: RootState) => ({
  app: state.app,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
  dispatch: dispatch,
});

const SignInForm = connect(mapStateToProps, mapDispatchToProps)(_SignInForm);
export default SignInForm;
