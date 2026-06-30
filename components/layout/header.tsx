import Link from "next/link"

export default function Header() {
  return (
    <header className="mx-auto flex max-w-5xl justify-between py-6">
      <Link href={"/"}>Bitbeq</Link>
      <div className="flex space-x-2">
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/blog"}>Blog</Link>
      </div>
    </header>
  )
}
