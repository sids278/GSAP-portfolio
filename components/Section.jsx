import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Section({ title, color, children }) {
    const ref = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(ref.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out",
            });
        }, ref);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={ref} className="space-y-4">
            <h2 className={`text-4xl font-bold mb-6 border-b-4 w-fit pb-2 border-${color}-400`}>
                {title}
            </h2>
            {children}
        </section>
    );
}
