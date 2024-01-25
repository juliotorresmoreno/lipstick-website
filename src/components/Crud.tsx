"use client";
import { RestAPI, RestAPIClient, Row } from "@/services/api";
import React, { useEffect, useMemo, useState } from "react";
import { Paginator } from "./Paginator";
import { RootState } from "@/lib/reducers";
import { connect } from "react-redux";
import { AppState } from "@/lib/reducers/app";
import { AuthState } from "@/lib/reducers/auth";

interface _CrudProps {
  app: AppState;
  auth: AuthState;
  tablename: string;
  restApi: RestAPI;
  onAdd(): void;
  onUpdate(id: number): void;
  onDelete(id: number): void;
}

const _Crud: React.FC<_CrudProps> = (props: _CrudProps) => {
  const [data, setData] = useState<Row[]>([]);
  const [total, setTotal] = useState<number>(0);
  const restApi = props.restApi;
  const fields = restApi.fields || [];
  const token = props.auth?.token ?? "";
  const APIClient = useMemo(
    () => new RestAPIClient(token, restApi),
    [restApi, token]
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getData() {
      const { data, total } = await APIClient.find({ page });
      setData(data);
      setTotal(total);
    }
    getData();
  }, [APIClient, restApi, page]);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 flex-1">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <button
                type="button"
                onClick={() => props.onAdd()}
                className="flex items-center bg-blue-600 hover:bg-blue-800 justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                <svg
                  className="h-3.5 w-3.5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  />
                </svg>
                Add {props.tablename}
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {fields
                    .filter((key) => !key.hidden)
                    .map((key) => (
                      <th key={key.name} scope="col" className="px-4 py-3">
                        {key.title}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {data.map((el) => (
                  <tr
                    key={"item-" + el[restApi.primaryKey.name]}
                    className="border-b"
                  >
                    {fields
                      .filter((key) => !key.hidden)
                      .map((key) => {
                        return (
                          <td
                            key={`item-${key.name}-${
                              (el as any)[restApi.primaryKey?.name ?? "id"]
                            }`}
                            className="px-4 py-3"
                          >
                            {(el as any)[key.name]}
                          </td>
                        );
                      })}

                    <td className="px-4 py-3 flex items-center justify-end">
                      <button
                        onClick={() =>
                          props.onUpdate(el[restApi.primaryKey.name])
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-edit"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#2c3e50"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                          <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                          <path d="M16 5l3 3" />
                        </svg>
                      </button>
                      <button
                        className=""
                        onClick={() =>
                          props.onDelete(el[restApi.primaryKey.name])
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-trash"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#2c3e50"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M4 7l16 0" />
                          <path d="M10 11l0 6" />
                          <path d="M14 11l0 6" />
                          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Paginator
            page={page}
            total={total * 10}
            onBack={() => setPage(page - 1)}
            onNext={() => setPage(page + 1)}
          />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state: RootState) => ({
  app: state.app,
  auth: state.auth,
});

export const Crud = connect(mapStateToProps)(_Crud);
