import { AppNavBar } from "./AppNavBar";
import { AppSidebar } from "./AppSidebar";

export interface AppLayoutProps extends React.PropsWithChildren {}

export function AppLayout(props: AppLayoutProps) {
  return (
    <>
      <AppNavBar />
      <main className="flex flex-1">
        <div className="flex relative mx-auto px-4 md:px-6 text-default max-w-screen-xl">
          <AppSidebar />
        </div>
        <div className="flex flex-1 relative mx-auto px-4 md:px-6 text-default max-w-screen-xl">
          {props.children}
        </div>
      </main>
    </>
  );
}
