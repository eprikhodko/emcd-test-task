import { onMounted, onUnmounted, ref } from "vue";

interface ObserverOptions {
  root: HTMLElement | null;
  rootMargin: string;
  threshold: number;
}

/**
 * Vue composable function to create and manage an IntersectionObserver.
 * Calls the provided callback function when the observed element intersects with the viewport.
 *
 * @param callback - Function to be called when the observed element intersects with the viewport.
 * @param options - Configuration options for the IntersectionObserver.
 * @returns An object containing a `ref` to the element to be observed.
 */

export function useIntersectionObserver(
  callback: () => void,
  options: ObserverOptions
) {
  const observerElement = ref(null);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        callback();
      }
    }, options);

    if (observerElement.value) {
      observer.observe(observerElement.value);
    }
  });

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  return { observerElement };
}
