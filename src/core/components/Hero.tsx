import Link from "next/link"


const Hero = () => {
  return (
    <div className="text-[#FFFCF2] 	" >
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="md:text-2xl sm:text-xl text-[#EB5E28] font-bold p-2">GROW AS AN ATHLETE</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold">BE THE ATHLETE</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 '>Fast, Simple planner for ATHLETES</p>
        </div>

        <Link href='/auth/signup'>
          <button className='bg-[#eb5e28] w-[200px] rounded-md font-medium mx-auto my-6 py-3'>Sign up</button>
        </Link>

      </div>
    </div>
  );
}

export default Hero;
