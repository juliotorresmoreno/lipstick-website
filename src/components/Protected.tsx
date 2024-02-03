"use client";
import { connect } from "react-redux";
import { RootState } from "@/lib/reducers";
import { AuthState } from "@/lib/reducers/auth";
import { redirect } from "next/navigation";

interface _ProtectedProps extends React.PropsWithChildren {
  auth: AuthState;
}

export function _Protected(props: _ProtectedProps) {
  if (!props.auth) {
    return redirect("/sign-in");
  }
  return props.children;
}

const mapStateToProps = (state: RootState) => ({ auth: state.auth });

export const Protected = connect(mapStateToProps)(_Protected);
