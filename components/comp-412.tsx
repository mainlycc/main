export default function Component() {
  return (
    <div className="bg-zinc-950 flex items-center rounded-full border border-[#FA6503]/20 p-1 shadow-sm">
      <div className="flex -space-x-1.5">
        <img
          className="ring-zinc-950 rounded-full ring-1"
          src="/7.jpg"
          width={20}
          height={20}
          alt="Avatar 01"
        />
        <img
          className="ring-zinc-950 rounded-full ring-1"
          src="/18.jpg"
          width={20}
          height={20}
          alt="Avatar 02"
        />
        <img
          className="ring-zinc-950 rounded-full ring-1"
          src="/35.jpg"
          width={20}
          height={20}
          alt="Avatar 03"
        />
        <img
          className="ring-zinc-950 rounded-full ring-1"
          src="/75.jpg"
          width={20}
          height={20}
          alt="Avatar 04"
        />
      </div>
      <p className="text-gray-400 px-2 text-xs">
        Zaufało nam już <strong className="text-white font-medium">50+</strong>{" "}
        klientów.
      </p>
    </div>
  )
}
