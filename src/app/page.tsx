import { UserFlow } from "./UserFlow";

const fetchData = () =>
  new Promise((res) =>
    setTimeout(() => {
      res(undefined);
    }, 2000)
  );

export default async function Home() {
  await fetchData();
  console.log("RERENDER: src/app/page.tsx");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserFlow />
    </main>
  );
}
