import { useEffect, useRef } from "react";

//Steps
// Have a variable that can preserve value
// if dependencies change, call callback
// cleanup
// return memoized value

const isEqual = (prevDeps, nextDeps) => {
  if (prevDeps == null) return;
  if (prevDeps.length != nextDeps.length) return false;
  for (let i = 0; i < prevDeps.length; i++) {
    if (prevDeps[i] != nextDeps[i]) return false;
  }

  return true;
};

const useCustomMemo = (callback, dependencies) => {
  const memoizedRef = useRef();

  if (
    !memoizedRef.current ||
    !isEqual(memoizedRef.current.dependencies, dependencies)
  ) {
    memoizedRef.current = {
      value: callback(),
      dependencies,
    };
  }

  // cleanup

  useEffect(() => {
    return () => {
      memoizedRef.current = null;
    };
  }, []);

  return memoizedRef.current.value;
};

export default useCustomMemo;
