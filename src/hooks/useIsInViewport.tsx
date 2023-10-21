import { useEffect, useState } from 'react';
/**
 * @function
 * @param synCallback - useIsInViewport fails in cases where the UI
 * change on mount because of this order
 * 1. you call the hook
 * 2. element enters the dom and you set the ref
 * 3. the hook return the isIntersecting value
 * 4. the observer initializes and sets the new value
 * 5. you will get the new value from the hook
 * Between steps 3 and 4 is a small time gap as the intersection
 * observer initializes so you will not get the actual
 * @author Linh
 */
const useIsInViewport = (
  ref: React.MutableRefObject<HTMLElement | null>,
  options: IntersectionObserverInit = {},
  syncCallback?: (entry: IntersectionObserverEntry) => void,
) => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      syncCallback && syncCallback(entry);
      setIsIntersecting(entry.isIntersecting);
    }, options);
    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, ref.current, options]);

  return isIntersecting;
};

export default useIsInViewport;
