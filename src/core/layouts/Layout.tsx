import Head from "next/head"
import React, { FC } from "react"
import { BlitzLayout } from "@blitzjs/next"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <>
      <div className="bg-runner flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
