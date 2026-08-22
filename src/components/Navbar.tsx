"use client"

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Resume", href: "/resume", current: false },
  { name: "Contact", href: "/contact", current: false },
]

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800 text-white">
      <div className="flex items-center justify-between p-4">

        {/* Logo and name */}
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-white"></div>

          <div className="text-xl font-bold">
            Moises Gonzalez
          </div>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`hover:underline ${
                item.current ? "font-bold" : ""
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <DisclosureButton
          className="group rounded-md p-2 hover:bg-gray-600 md:hidden"
          aria-label="Toggle navigation menu"
        >
          <Bars3Icon className="block size-6 group-data-open:hidden" />
          <XMarkIcon className="hidden size-6 group-data-open:block" />
        </DisclosureButton>
      </div>

      {/* Mobile navigation */}
      <DisclosurePanel className="md:hidden">
        <div className="flex flex-col space-y-2 px-4 pb-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`rounded-md px-3 py-2 hover:bg-gray-700 ${
                item.current ? "font-bold" : ""
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
