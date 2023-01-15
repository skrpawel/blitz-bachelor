import React from "react"

const Footer: React.FC = () => {
  return (
    <div className="w-full p-16 bg-[#403d39] text-center text-[#FFFCF2] grid md:grid-cols-3">
      <div className="flex flex-col">
        <h3 className="text-xl font-bold text-[#EB5E28] text-left py-4">trainKEEPER.</h3>
        <div className="flex gap-5"></div>
      </div>
      <div className="w-full self-center text-left md:text-center py-4">
        Created by <span className="text-[#EB5E28] font-bold">Pawel Skrobski</span>
      </div>
    </div>
  )
}

export default Footer
