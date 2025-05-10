import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
    const heroRef = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(heroRef.current, {
                opacity: 0,
                y: -40,
                duration: 1,
                ease: "power4.out"
            });
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Siddharth Sharma
            </h1>
            <p className="text-xl mt-4 text-gray-300">
                Software Developer | Full Stack Engineer | Problem Solver
            </p>
            <div className="flex justify-center gap-8 mt-6 text-lg font-medium">
                <a href="https://github.com/sids278" target="_blank" className="hover:text-cyan-400">GitHub</a>
                <a href="https://leetcode.com/u/sid_812/" target="_blank" className="hover:text-yellow-400">LeetCode</a>
                <a href="https://www.linkedin.com/in/siddharth-sharma-48ba80215/" target="_blank" className="hover:text-blue-400">LinkedIn</a>
            </div>
        </section>
    );
}
