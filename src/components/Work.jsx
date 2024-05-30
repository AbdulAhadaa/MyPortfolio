import { data } from "../data/data"
import working from "../images/workImg.jpeg"
const Work = () => {
   
  return (

    <div className="bg-black w-full  text-gray-200" name="work">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8 ">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
                Work
            </p>
            <p className="py-6">
                Check out my latest works
            </p>
            </div>

            {/* container for projects */}

            <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-2  gap-8">
                {
                    data.map((item,index)=>{
return (
    <div width="200px" key={index} style={{backgroundImage:`url(${item.image})`}} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div">
    {/* hover effects */}
<div className="opacity-0 group-hover:opacity-100 ">
    <div className="flex flex-col">
<span className="text-2xl font-bold text-white tracking-wider">
        {item.name}
</span>
<span>{item.desc}</span>
<span>{item.stack}</span>
</div>
<div className="pt-8 text-center">
    <a href={item.live}>
        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 fond-bold text-lg">
            Demo
        </button>
    </a>
    <a href={item.github}>
        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 fond-bold text-lg">
            Code
        </button>
    </a>

</div>
</div>
</div>
)
                    })
                }


            </div>


        </div>

    </div>
  )
}

export default Work