"use client";

import { useAppDispatch } from "@/lib/hooks";
import React, { useEffect, useState } from "react";
import * as appActions from "@/lib/actions/app";
import { Config } from "@/types/models";

interface StateLoaderProps extends React.PropsWithChildren {
  config: Config;
}

export function StateLoader(props: StateLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(appActions.setConfig(props.config));
    setIsLoaded(true);
  }, [props.config]);

  if (!isLoaded) return null;

  return props.children;
}
