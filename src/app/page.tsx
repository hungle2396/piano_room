import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mx-10 flex justify-between">
        <div>The Donovan&apos;s Piano Room</div>
        <nav className="flex gap-5">
          <Link href="/signup" className="block">
            SignUp
          </Link>
          <Link href="/login">Login</Link>
          <Link href="/virtual-metronome">Virtual Metronome</Link>
        </nav>
      </div>
    </>
  );
}
