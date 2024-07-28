import { useRef } from "react";

const useCustomEffect = (callback, dependencies) => {
  let isFirstRender = useRef(true);
  let prevDependency = useRef([]);

  // First Render
  if (isFirstRender.current) {
    isFirstRender.current = false;
    callback();
    return;
  }

  // Dependency Changes Check

  const dependencyChanged = dependencies
    ? JSON.stringify(prevDependency.current) != JSON.stringify(dependencies)
    : true;

  if (dependencyChanged) callback();
  prevDependency.current = dependencies || [];




  // Cleanup
};

export default useCustomEffect;
