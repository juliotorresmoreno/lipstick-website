import { AppLayout } from "@/components/AppLayout";
import { Viewer } from "./Viewer";
import { Protected } from "@/components/Protected";

export default function Page() {
  return (
    <Protected>
      <AppLayout>
        <Viewer />
      </AppLayout>
    </Protected>
  );
}
