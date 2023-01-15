import Athlete from '../../assets/athlete.png'
import Image from 'next/image';

const About = () => {
  return (<div className="h-screen w-full bg-[#252422] py-16 px-8 text-[#FFFCF2]">
    <h1 className='md:text-5xl sm:text-4xl text-2xl font-bold text-center text-[#EB5E28]'>About</h1>
    <div className="max-w-[1240px] mx-auto grid gap-5 md:gap-0 md:grid-cols-2 h-full content-center text-center">
      <Image className="max-w-[300px] md:max-w-[360px] justify-self-center opacity-70" src={Athlete} alt="Sprinting woman" />
      <div className="md:max-w-[50%] text-xl">
        <p className='text-l'><span className='text-[#EB5E28]'>trainKEEPER.</span> offers a centralized hub that lets you plan,
          track and analyze your workouts all in one place, watch your fitness progress in real-time.
          Let us help you reach your goals stronger, healthier and faster.
        </p>
      </div>
    </div>
  </div>);
}


export default About;
