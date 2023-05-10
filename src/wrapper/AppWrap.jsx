
import SocialMedia from "../components/Socialmedia"
import NavigationDots from "../components/NavigationDots"

const AppWrap = (Component,idName,classNames) =>function HOC() {
  return (
    <div id={idName} className={`app__container relative flex flex-row min-h-screen ${classNames}` } >

        <div className='app__wrapper app__flex flex flex-col w-full  '>
        <SocialMedia/>
        
            <Component/>

            {/* <div className="copyrigt ">
                <p className='p-text'>@{new Date().getFullYear()} ROBIN</p>
                <p className='p-text'>All Right Reserved</p>
            </div> */}
        <NavigationDots active={idName}/>
        </div>
    </div>
  )
}

export default AppWrap