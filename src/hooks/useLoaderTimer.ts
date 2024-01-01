import { useEffect, useState } from "react";

// TODO: Since website is static, the [page loader](../layouts/loader/) is just for
// aesthetics. Hence, the timer is a constant JavaScript timeout. Is this good practice?
// Does this have side effects?
export default function useLoaderTimer(durationInMs: number) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, durationInMs);

    return () => {
      clearTimeout(timer);
    };
  }, [durationInMs]);

  return isLoading;
}
