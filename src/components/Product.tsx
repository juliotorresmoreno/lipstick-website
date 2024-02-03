"use client";

import useInput from "@/hooks/useInput";
import { Button, Modal } from "flowbite-react";
import { FormEventHandler, KeyboardEventHandler, useState } from "react";
import { withApiData } from "@/hoc/withApiData";
import { Record, RestAPIClient } from "@/services/api";

interface ProductProps {
  id?: number;
  isOpen: boolean;
  version: number;
  setVersion: (n: number) => void;
  onToggle(): void;
  apiClient: RestAPIClient;
}

interface _ProductProps extends ProductProps {
  total: number;
  data: Record[];
}

const _Product = (props: _ProductProps) => {
  const {
    value: name,
    onChange: onNameChange,
    setValue: setName,
  } = useInput("");
  const {
    value: description,
    onChange: onDescriptionChange,
    setValue: setDescription,
  } = useInput("");
  const { value: instanceType, onChange: onInstanceTypeChange } = useInput(
    props.data.length ? props.data[0].id : 0
  );
  const [nameError, setNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const onSave: FormEventHandler<HTMLButtonElement> = (evt) => {
    const payload = {
      name,
      description,
      instance_type_id: instanceType,
    };
    setNameError("");
    setDescriptionError("");

    props.apiClient
      .post(payload)
      .then(() => {
        props.setVersion(Date.now());
        props.onToggle();
        setName("");
        setDescription("");
      })
      .catch((err: Error) => {
        const cause: any = err.cause;
        setNameError(cause.name ?? "");
        setDescriptionError(cause.description ?? "");
      });
  };
  const onCancel = () => {
    props.onToggle();
  };
  const onNameKeyPress: KeyboardEventHandler<HTMLInputElement> = (evt) => {
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    if (!alphanumericRegex.test(evt.key)) {
      evt.preventDefault();
    }
  };

  return (
    <Modal show={props.isOpen} onClose={() => props.onToggle()}>
      <Modal.Header>{props.id ? "Update Product" : "Add Product"}</Modal.Header>
      <Modal.Body>
        <form>
          <div className="flex flex-col gap-2">
            <div>
              <label
                htmlFor="product_name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                value={name}
                onChange={onNameChange}
                onKeyDown={onNameKeyPress}
                id="product_name"
                type="text"
                name="product_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-100 focus:outline-none block w-full p-2.5"
                placeholder="Type product name"
                required
              />
              {nameError && (
                <div
                  className="p-4 mt-2 mb-2 text-sm text-red-800 rounded-lg bg-red-50"
                  role="alert"
                >
                  {nameError}
                </div>
              )}
            </div>
            <div>
              <label
                htmlFor="plan"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Plan
              </label>
              <select
                id="plan"
                value={instanceType}
                onChange={onInstanceTypeChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-100 focus:outline-none block w-full p-2.5"
              >
                {props.data.map((element) => (
                  <option key={element.id} value={element.id}>
                    {element.name} [{element.description}] (USD ${element.price}
                    /Month)
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Description
              </label>
              <textarea
                value={description}
                onChange={onDescriptionChange}
                id="description"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-100 focus:outline-none"
                placeholder="Write product description here"
              />
              {descriptionError && (
                <div
                  className="p-4 mt-2 mb-2 text-sm text-red-800 rounded-lg bg-red-50"
                  role="alert"
                >
                  {descriptionError}
                </div>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            <svg
              className="mr-1 -ml-1 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Add new product
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          onClick={onSave}
          className="flex items-centerc h-[2.3rem] w-[80px] bg-blue-500 hover:bg-blue-600 justify-center text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
        >
          {props.id ? "Update" : "Create"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex items-centerc h-[2.3rem] w-[80px] bg-red-500 hover:bg-red-600 justify-center text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
        >
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export const Product: React.FC<ProductProps> = withApiData(_Product, {
  endpoint: "/instance-types",
}) as any;
