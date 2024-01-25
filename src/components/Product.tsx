"use client";

import useInput from "@/hooks/useInput";
import { Button, Modal } from "flowbite-react";
import { FormEventHandler, useState } from "react";

interface ProductProps {
  id?: number;
  isOpen: boolean;
  onToggle(): void;
}

export function Product(props: ProductProps) {
  const { value: productName, onChange: onProductNameChange } = useInput("");
  const { value: description, onChange: onDescriptionChange } = useInput("");
  const onSave: FormEventHandler<HTMLFormElement> = () => {
    props.onToggle();
  };
  const onCancel = () => {
    props.onToggle();
  };
  return (
    <Modal show={props.isOpen} onClose={() => props.onToggle()}>
      <Modal.Header>{props.id ? "Update Product" : "Add Product"}</Modal.Header>
      <Modal.Body>
        <form onSubmit={onSave}>
          <div className="flex flex-col gap-2">
            <div>
              <label
                htmlFor="product_name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                value={productName}
                onChange={onProductNameChange}
                id="product_name"
                type="text"
                name="product_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Type product name"
                required
              />
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              >
                <option selected value="free">
                  Free
                </option>
                <option value="starter">Starter</option>
                <option value="company">Company</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                value={description}
                onChange={onDescriptionChange}
                id="description"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Write product description here"
              />
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
        <Button color="blue" type="submit">
          {props.id ? "Update" : "Create"}
        </Button>
        <Button color="failure" type="button" onClick={onCancel}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
