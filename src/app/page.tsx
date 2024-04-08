import React from "react";
export function SidePannel() {
  return (
    <aside className="side-pannel mx-auto flex flex-col items-center justify-between p-24 shadow-lg">
      My Side Pannel
    </aside>
  );
}

export function Resume({ props }: { props: React.PropsWithChildren }) {
  return (
    <div className="flex flex-col mx-auto w-[210mm] h-[297mm] items-center justify-between p-24 shadow-lg">
      My Resume
    </div>
  );
}

export default function Page() {
  return (
    <main className="flex flex-row mx-auto min-h-screen  bg-neutral-50 items-center justify-between p-24">
      <SidePannel />
      <Resume />
    </main>
  );
}
