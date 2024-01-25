"use client";
import { useAppDispatch } from "@/lib/hooks";
import { RootState } from "@/lib/reducers";
import { AuthState } from "@/lib/reducers/auth";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { connect } from "react-redux";
import * as auth from "@/lib/actions/auth";

interface _PageProps {
  auth: AuthState;
}

export function _Page(props: _PageProps) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(auth.setSession(null));
  }, [props.auth]);
  if (props.auth) return null;
  return redirect("/");
}

const mapToProps = (state: RootState) => ({
  auth: state.auth,
});

const Page = connect(mapToProps)(_Page);

export default Page;
