"use client";

import { useAppDispatch } from "@/lib/hooks";
import React, { useEffect } from "react";
import * as appActions from "@/lib/actions/app";
import { Config } from "@/types/models";

interface StateLoaderProps extends React.PropsWithChildren {
  config: Config;
}

export function StateLoader(props: StateLoaderProps) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(appActions.setConfig(props.config));
  }, [props.config]);

  return props.children;
}
