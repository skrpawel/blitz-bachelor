import React, { useState, useRef } from "react"
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { Suspense } from "react"
import Link from "next/link"
import { useMutation } from "@blitzjs/rpc"
import { useCurrentUser } from "src/users/hooks/useCurrentUser"
import logout from "src/auth/mutations/logout"
import { Routes, BlitzPage } from "@blitzjs/next"

const Navbar = () => {
  const ref = useRef(null)

  const handleClick = () => {
    // ref.current?.scrollInhrefView({ behavior: "smooth" })
  }

  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  const UserInfo = () => {
    const currentUser = useCurrentUser()
    const [logoutMutation] = useMutation(logout)

    if (currentUser) {
      return (
        <>
          <li
            className="p-4"
            onClick={async () => {
              await logoutMutation()
            }}
          >
            Logout
          </li>
        </>
      )
    }

    return (
      <>
        <Link href={Routes.SignupPage()}>
          <li className="p-4">Sign Up</li>
        </Link>
        <Link href={Routes.LoginPage()}>
          <li className="p-4">Login</li>
        </Link>
      </>
    )

  }

  return (
    <div className="flex text-[#FFFCF2] justify-between items-center h-24  mx-auhref px-4">
      <h1 className="w-full text-4xl font-bold text-[#EB5E28]">trainKEEPER.</h1>
      <ul className="hidden md:flex md:w-full md:justify-end">
        <Link href="/">
          <li className="p-4" onClick={handleClick}>
            Home
          </li>
        </Link>
        <Link href="#sport">
          <li className="p-4">Sport types</li>
        </Link>
        <Link href="">
          <li className="p-4">About</li>
        </Link>
        <Suspense fallback="Loading...">
          <UserInfo />
        </Suspense>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {/* {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />} */}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 hrefp-0 w-[65%] h-full border-r z-50 border-r-[#FFFCF2]-1000 bg-[#403D39] transition duration-500 ease-in-out"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-4xl font-bold text-[#EB5E28] m-4 mt-7">trainKEEPER.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-[#FFFCF2]-600">Home</li>
          <li className="p-4 border-b border-[#FFFCF2]-600">Sport types</li>
          <li className="p-4">About</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
