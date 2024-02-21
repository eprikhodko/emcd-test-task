import { onMounted, onUnmounted, ref } from "vue";

interface ObserverOptions {
  root: HTMLElement | null;
  rootMargin: string;
  threshold: number;
}

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
