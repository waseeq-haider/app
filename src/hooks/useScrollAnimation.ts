import { useEffect, useRef } from 'react';

/**
 * Custom hook to trigger scroll animations when elements enter the viewport.
 * Uses Intersection Observer API for performance.
 * 
 * @param className - The class to add when element is visible (default: 'active')
 * @param threshold - Visibility threshold (0-1) (default: 0.1)
 * @param rootMargin - Margin around the root (default: '0px')
 * @returns Ref to attach to the element
 */
export function useScrollAnimation<T extends HTMLElement>(
    className: string = 'active',
    threshold: number = 0.1,
    rootMargin: string = '0px'
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(className);
                    }
                });
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [className, threshold, rootMargin]);

    return ref;
}

/**
 * Hook variant for elements that should only animate once (gathering effect)
 */
export function useScrollAnimationOnce<T extends HTMLElement>(
    className: string = 'active',
    threshold: number = 0.1
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(className);
                        observer.unobserve(entry.target); // Stop observing after first trigger
                    }
                });
            },
            {
                threshold,
                rootMargin: '0px',
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [className, threshold]);

    return ref;
}

// Legacy support - Global hook for animate-on-scroll class
export const useScrollAnimationGlobal = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);

        // Observe all elements with animate-on-scroll class
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, []);
};

