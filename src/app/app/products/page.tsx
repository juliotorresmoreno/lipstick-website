import config from "@/config";
import { AppLayout } from "@/components/AppLayout";
import { Viewer } from "./Viewer";

export default function Page() {
  return (
    <AppLayout>
      <Viewer apiUrl={config.apiUrl} />
    </AppLayout>
  );
}
