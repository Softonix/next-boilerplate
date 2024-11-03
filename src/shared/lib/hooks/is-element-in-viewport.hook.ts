// https://medium.com/@teh_builder/ref-objects-inside-useeffect-hooks-eb7c15198780

export const useIsElementInViewport = <T extends TOptional<HTMLElement>>() => {
  const ref = useRef<T>()

  const [isElementInViewport, setIsElementInViewport] = useState(false)

  const setRef = useCallback((node: T) => {
    const observer = new IntersectionObserver(([entry]) => setIsElementInViewport(entry.isIntersecting), {
      root: document.body,
    })
    if (ref.current) {
      observer.unobserve(ref.current)
    }

    if (node) {
      observer.observe(node)
    }

    ref.current = node
  }, [])
  return { ref, setRef, isElementInViewport }
}
