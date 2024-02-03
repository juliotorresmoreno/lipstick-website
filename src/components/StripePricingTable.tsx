import { RootState } from "@/lib/reducers";
import { AppState } from "@/lib/reducers/app";
import React, { useEffect } from "react";
import { connect } from "react-redux";

interface StripePricingTableProps {}

interface _StripePricingTableProps extends StripePricingTableProps {
  app: AppState;
}

const _StripePricingTable = (props: _StripePricingTableProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return React.createElement("stripe-pricing-table", {
    "pricing-table-id": props.app?.pricingTableId,
    "publishable-key": props.app?.publishableKey,
  });
};

const mapStateToProps = ({ app }: RootState) => ({ app });

const StripePricingTable: React.FC<StripePricingTableProps> =
  connect(mapStateToProps)(_StripePricingTable);

export default StripePricingTable;
