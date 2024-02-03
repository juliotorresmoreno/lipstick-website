"use client";
import { useAppSelector } from "@/lib/hooks";
import { Record, RestAPI, RestAPIClient } from "@/services/api";
import React, { useEffect, useMemo, useState } from "react";

type WrappedComponentProps = {};

type AdditionalProps = {
  total: number;
  data: Record[];
};

type HocType = <P extends WrappedComponentProps>(
  WrappedComponent: React.ComponentType<P & AdditionalProps>,
  RestApi: RestAPI
) => React.FC<P>;
export const withApiData: HocType = (WrappedComponent, restAPI) => (props) => {
  const auth = useAppSelector((state) => state.auth);
  const app = useAppSelector((state) => state.app);
  const token = auth?.token ?? "";
  if (restAPI.endpoint[0] === "/") {
    restAPI.endpoint = app.apiUrl + restAPI.endpoint;
  }
  const APIClient = useMemo(() => new RestAPIClient(restAPI), [restAPI, token]);
  const [data, setData] = useState<Record[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    async function getData() {
      APIClient.configure(token);
      const { data, total } = await APIClient.find();
      setData(data);
      setTotal(total);
    }
    if (data.length) return;
    getData();
  }, [APIClient, token]);

  if (!data.length) return null;

  return <WrappedComponent {...props} data={data} total={total} />;
};
