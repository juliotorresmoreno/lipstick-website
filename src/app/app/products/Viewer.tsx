"use client";
import { Crud } from "@/components/Crud";
import { Product } from "@/components/Product";
import { Field, MakeRestAPI } from "@/services/api";
import { useState } from "react";

const fields: Field[] = [
  {
    name: "id",
    title: "ID",
    primary: true,
    hidden: true,
  },
  {
    name: "name",
    title: "PRODUCT NAME",
  },
  {
    name: "category",
    title: "CATEGORY",
  },
  {
    name: "description",
    title: "DESCRIPTION",
  },
  {
    name: "price",
    title: "PRICE",
  },
];

interface ViewerProps {
  apiUrl: string;
}

export function Viewer(props: ViewerProps) {
  const endpoint = props.apiUrl + "/products";
  const [isOpen, setIsOpen] = useState(false);
  const restAPI = MakeRestAPI(endpoint, fields);
  const toggle = () => setIsOpen(!isOpen);

  const onAdd = () => {
    toggle();
  };
  const onUpdate = (id: number) => {
    alert("update " + id);
  };
  const onDelete = (id: number) => {
    alert("delete " + id);
  };

  return (
    <>
      <Product isOpen={isOpen} onToggle={toggle} />
      <Crud
        tablename="product"
        restApi={restAPI}
        onAdd={onAdd}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    </>
  );
}
