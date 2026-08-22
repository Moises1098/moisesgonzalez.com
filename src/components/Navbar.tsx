"use client"

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"

import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
]

type NavbarProps = {
  variant: "home" | "default"
}

export default function Navbar({ variant }: NavbarProps) {

  // HOME NAVBAR
  if (variant === "home") {
  return (
    <nav className="absolute left-1/2 top-6 w-[calc(100%-2rem)] max-w-[700px] -translate-x-1/2 rounded-full bg-white px-6 py-4 shadow-lg">
      <div className="flex items-center justify-center gap-[clamp(1rem,5vw,2.5rem)]">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="group relative whitespace-nowrap text-[clamp(1rem,2vw,1.125rem)] font-medium text-black transition-all duration-300 hover:text-cyan-950 hover:[text-shadow:0_0_5px_#22d3ee,0_0_15px_#22d3ee,0_0_30px_#22d3ee] after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-cyan-950 after:shadow-[0_0_8px_#22d3ee] after:transition-all after:duration-300 hover:after:w-full"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  )
}

  // DEFAULT NAVBAR
  if (variant === "default") {
  return (
    <Disclosure as="nav" className="w-full bg-white text-black dark:bg-slate-900 dark:text-white ">
      <div className="flex w-full items-center justify-between px-6 py-4">

        {/* Name */}
        <div className="text-xl font-bold">
          Moises Gonzalez
        </div>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-medium transition-colors hover:text-zinc-500"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <DisclosureButton
          className="group rounded-md p-2 hover:bg-slate-200 dark:hover:bg-slate-700 md:hidden"
          aria-label="Toggle navigation menu"
        >
          <Bars3Icon className="block size-6 group-data-open:hidden" />
          <XMarkIcon className="hidden size-6 group-data-open:block" />
        </DisclosureButton>

      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="md:hidden">
        <div className="flex flex-col space-y-1 px-4 pb-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-md px-3 py-2 hover:bg-slate-200 dark:hover:bg-slate-700"
            >
              {item.name}
            </a>
          ))}
        </div>
      </DisclosurePanel>

    </Disclosure>
  )
}
}