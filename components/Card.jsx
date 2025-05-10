export default function Card({ title, desc, tech }) {
    return (
        <div className="rounded-2xl shadow-md bg-gradient-to-br from-slate-800 to-gray-900 p-6 transition-transform hover:scale-[1.02]">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">{title}</h3>
            <p className="text-gray-300 mb-2">{desc}</p>
            <p className="text-sm italic text-gray-400">Tech: {tech}</p>
        </div>
    );
}
