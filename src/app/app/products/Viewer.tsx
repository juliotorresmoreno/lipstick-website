"use client";

import { Crud } from "@/components/Crud";
import { Product } from "@/components/Product";
import { Protected } from "@/components/Protected";
import { RootState } from "@/lib/reducers";
import { AppState } from "@/lib/reducers/app";
import { AuthState } from "@/lib/reducers/auth";
import { MakeRestAPI, Record, RestAPIClient } from "@/services/api";
import { useMemo, useState } from "react";
import { connect } from "react-redux";

const title = (
  <tr>
    <th scope="col" style={{ width: 100 }} className="px-4 py-3">
      ID
    </th>
    <th scope="col" style={{ width: 200 }} className="px-4 py-3">
      Name
    </th>
    <th scope="col" style={{ maxWidth: "100%" }} className="px-4 py-3">
      Description
    </th>
    <th scope="col" style={{ width: 200 }} className="px-4 py-3">
      Instance type
    </th>
    <th scope="col" style={{ width: 100 }} className="px-4 py-3">
      Actions
    </th>
  </tr>
);

interface ViewerProps {}

interface _ViewerProps extends ViewerProps {
  auth?: AuthState;
  app: AppState;
}

function _Viewer(props: _ViewerProps) {
  const endpoint = props.app?.apiUrl + "/products";
  const [isOpen, setIsOpen] = useState(false);
  const restAPI = useMemo(() => MakeRestAPI(endpoint), [endpoint]);
  const toggle = () => setIsOpen(!isOpen);
  const APIClient = useMemo(() => new RestAPIClient(restAPI), [restAPI]);
  const [version, setVersion] = useState(Date.now());

  const onCrudAdd = () => {
    toggle();
  };
  const onCrudUpdate = (id: number) => {
    alert("update " + id);
  };
  const onCrudDelete = (id: number) => {
    alert("delete " + id);
  };

  const renderRows = useMemo(
    () => (row: Record) =>
      (
        <tr key={`row-${row.id}`} className="border-b">
          <td className="px-4 py-3">{row.id}</td>
          <td className="px-4 py-3">{row.name}</td>
          <td className="px-4 py-3">{row.description}</td>
          <td className="px-4 py-3">{row.instance_type.name}</td>

          <td className="px-4 py-3 flex items-center justify-end">
            <button onClick={() => onCrudUpdate(row.id)}>
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
            <button className="" onClick={() => onCrudDelete(row.id)}>
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
      ),
    []
  );

  return (
    <Protected>
      <Product
        version={version}
        setVersion={setVersion}
        isOpen={isOpen}
        onToggle={toggle}
        apiClient={APIClient}
      />
      <Crud
        version={version}
        title={title}
        renderRows={renderRows}
        tablename="product"
        apiClient={APIClient}
        onAdd={onCrudAdd}
      />
    </Protected>
  );
}

const mapStateToProps = (state: RootState) => ({
  auth: state.auth,
  app: state.app,
});

export const Viewer: React.FC<ViewerProps> = connect(mapStateToProps)(
  _Viewer
) as any;
