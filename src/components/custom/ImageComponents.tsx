import Image from 'next/image'
import comicHeadshot from '/public/ComicHeadshot.png'

const HomePageDoubleImage = () => {

    return (
        <div className="relative max-md:w-[16rem] bg-black w-[15.5rem] h-[22.6rem] top-10 max-md:top-5 border-4 border-black overflow-hidden">

        <Image
          src={comicHeadshot}
          alt="Comicbook version of the regular Headshot"
          fill
          className={`object-contain absolute top-0 left-0 ease-in-out`}
        />
      </div>

    )
}

export default HomePageDoubleImage