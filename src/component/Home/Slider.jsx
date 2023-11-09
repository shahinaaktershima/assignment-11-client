import Marquee from "react-fast-marquee";


const Slider = () => {
    return (
        <div >
           <Marquee className="h-[300px] my-6" >
  <img className="h-full w-full" src="https://i.postimg.cc/66G8FmMj/image.png" alt="" />
  <img className="h-full w-full" src="https://i.postimg.cc/vmkQzQwQ/image.png" alt="" />
  <img className="h-full w-full" src="https://i.postimg.cc/MGCSBd1H/image.png" alt="" />
  <img className="h-full w-full" src="https://i.postimg.cc/tJDwB5nh/image.png" alt="" />
</Marquee> 
        </div>
    );
};

export default Slider;