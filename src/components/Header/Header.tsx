import Image from 'next/image'
import logo from '../../../public/Logo.svg'
export default function Header() {
  return (
    <header className="flex w-full flex-wrap justify-center p-4">
      <Image
        src={logo}
        alt="Nós Logo"
        width={128}
        height={128}
        className="m-7"
      />
      <div className="mt-32 w-full flex-col text-center text-zinc-950">
        <h1 className="mb-1 font-title text-[40px] font-bold">nós.short</h1>
        <h2>O melhor encurtador de endereços</h2>
      </div>
    </header>
  )
}
