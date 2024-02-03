"use client";

import useInput from "@/hooks/useInput";
import { RootState } from "@/lib/reducers";
import { AppState } from "@/lib/reducers/app";
import {
  initMercadoPago,
  createCardToken,
  CardNumber,
  ExpirationDate,
  SecurityCode,
} from "@mercadopago/sdk-react";
import { MouseEventHandler, useEffect } from "react";
import { connect } from "react-redux";
import "./styles.css";

interface PaymentMethodProps {}

interface _PaymentMethodProps extends PaymentMethodProps {
  app: AppState;
}

export function _PaymentMethod(props: _PaymentMethodProps) {
  const { value: cardholderEmail, onChange: cardholderEmailOnChange } =
    useInput("");
  const { value: identificationType, onChange: identificationTypeOnChange } =
    useInput("CC");
  const {
    value: identificationNumber,
    onChange: identificationNumberOnChange,
  } = useInput("");
  const { value: cardholderName, onChange: cardholderNameOnChange } =
    useInput("");

  const mercadoPagoPublicKey = props.app?.mercadoPagoPublicKey ?? "";
  useEffect(() => {
    initMercadoPago(mercadoPagoPublicKey);
  }, []);

  const onSubmit: MouseEventHandler<HTMLButtonElement> = async (evt) => {
    evt.preventDefault();
    const token = await createCardToken({
      cardholderName,
      identificationType,
      identificationNumber,
    });
    console.log(JSON.stringify(token));
  };

  return (
    <div>
      <form id="form-checkout" className="flex flex-col gap-4">
        <div className="flex flex-col flex-1 gap-4">
          <h3 className="title">Buyer Details</h3>
          <div className="flex">
            <input
              type="text"
              value={cardholderName}
              onChange={cardholderNameOnChange}
              className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:border-blue-100 focus:outline-none block w-full p-2.5"
              placeholder="Card holder name"
            />
          </div>
          <div className="flex flex-1">
            <input
              type="text"
              placeholder="Card holder email"
              onChange={cardholderEmailOnChange}
              value={cardholderEmail}
              className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:border-blue-100 focus:outline-none block w-full p-2.5"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={identificationType}
              onChange={identificationTypeOnChange}
              className="w-[200px] bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:border-blue-100 focus:outline-none"
            >
              <option value="CC">C.C.</option>
              <option value="CE">C.E.</option>
              <option value="NIT">NIT</option>
              <option value="Otro">Otro</option>
            </select>
            <input
              type="text"
              placeholder="Document"
              value={identificationNumber}
              onChange={identificationNumberOnChange}
              className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:border-blue-100 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="title">Card Details</h3>
          <div className="flex">
            <div className="flex-1 h-10 pt-[.6rem] pl-[.5rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-100 focus:outline-none block w-full">
              <CardNumber
                style={{ marginTop: "-70px" }}
                placeholder="Card Number"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 h-10 pt-[.2rem] pl-[.5rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-100 focus:outline-none block w-full">
              <ExpirationDate
                style={{ marginTop: "-60px" }}
                placeholder="Expiration Date"
                mode="short"
              />
            </div>
            <div className="flex-1 h-10 pt-[.2rem] pl-[.5rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-100 focus:outline-none block w-full">
              <SecurityCode
                style={{ marginTop: "-60px" }}
                placeholder="Security Code"
              />
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={onSubmit}
              className="flex items-centerc h-[2.3rem] w-[100px] bg-blue-500 hover:bg-blue-600 justify-center text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  app: state.app,
});

export const PaymentMethod: React.FC<PaymentMethodProps> = connect(
  mapStateToProps
)(_PaymentMethod) as any;
