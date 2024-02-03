"use client";
import { AppLayout } from "@/components/AppLayout";
import { PaymentMethod } from "@/components/PaymentMethod";
import { Protected } from "@/components/Protected";

export default function Page() {
  return (
    <Protected>
      <AppLayout>
        <PaymentMethod />
      </AppLayout>
    </Protected>
  );
}
