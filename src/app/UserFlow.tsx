"use client";

import { useRouter } from "next/navigation";

export const UserFlow = () => {
  const router = useRouter();
  const goToStep = (step: number) => {
    router.push(`?step=${step}`);
  };

  return (
    <div>
      <button onClick={() => goToStep(1)}>Go to step 1</button>
      <br />
      <button onClick={() => goToStep(2)}>Go to step 2</button>
      <br />
      <button onClick={() => goToStep(3)}>Go to step 3</button>
    </div>
  );
};
