import { Analytics } from "./Analytics"
import { MainStaticCards } from "./mainStaticCard/MainStaticCards"

const Main = () => {
  return (
    <div className='w-full h-screen'>
<MainStaticCards/>
<div className="w-full h-screen md:h-[20%] pt-10 grid md:flex">
<Analytics/>
</div>
    </div>
  )
}

export default Main
