import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="flex items-center justify-center text-4xl font-bold text-red-600">
        YouTrack
      </h1>
      <div className="flex flex-col gap-10 py-8 px-6">
        <div className="flex items-center justify-center text-2xl font-bold hover:underline">
          <h2 className="text-xl">
            <Link href="/login">Let&apos;s get started!</Link>
          </h2>
        </div>
      </div>
    </div>
  );
}
