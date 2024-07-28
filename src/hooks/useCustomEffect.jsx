import { useRef } from "react";

const useCustomEffect = (callback, dependencies) => {
  let isFirstRender = useRef(true);
  let prevDependency = useRef([]);

  // First Render
  if (isFirstRender.current) {
    isFirstRender.current = false;
    const cleanup = callback();
    return () => {
      if (cleanup && typeof cleanup == "function") cleanup();
    };
  }

  // Dependency Changes Check

  const dependencyChanged = dependencies
    ? JSON.stringify(prevDependency.current) != JSON.stringify(dependencies)
    : true;

  if (dependencyChanged) {
    const cleanup = callback();
    return () => {
      if (cleanup && typeof cleanup == "function" && dependencies) cleanup();
    };
  }
  prevDependency.current = dependencies || [];

  // Cleanup
};

export default useCustomEffect;
