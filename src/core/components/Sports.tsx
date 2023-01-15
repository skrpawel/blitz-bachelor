// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRunning, faBicycle, faSwimmer } from '@fortawesome/free-solid-svg-icons';


const Sports = () => {
  return (
    <div className="h-screen w-full bg-[#fffcf2] py-16 px-4 text-[#252422]" id='sport'>
      <div className="max-w-[1240px] mx-auto flex flex-col h-full justify-between content-center text-center">
        <h1 className='md:text-5xl sm:text-4xl text-2xl font-bold'>Sport types</h1>
        <div className='flex flex-col h-full justify-around'>
          <div>
            {/* <FontAwesomeIcon icon={faRunning} className="sm:text-8xl fa-4x"></FontAwesomeIcon> */}
            <h2>
              RUNNING
            </h2>
          </div>
          <div>
            {/* <FontAwesomeIcon icon={faBicycle} className="sm:text-8xl fa-4x"></FontAwesomeIcon> */}
            <h2>
              CYCLING
            </h2>
          </div>
          <div>
            {/* <FontAwesomeIcon icon={faSwimmer} className="sm:text-8xl fa-4x"></FontAwesomeIcon> */}
            <h2>
              SWIMMING
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sports;
