import HomeLayout from "../layouts/HomeLayout";
import aboutMainImage from "../assets/Images/aboutMainImage.png";
import apjAbdulKalam from "../assets/Images/apj.png";
import billGates from "../assets/Images/billGates.png";
import einstein from "../assets/Images/einstein.png";
import steveJobs from "../assets/Images/steveJobs.png";

function Aboutus() {
  return (
    <HomeLayout>
      <div className="flex flex-col text-white pl-20 pt-20">
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and quality education
            </h1>
            <p className="text-xl text-gray-200">
              Our goal is to provide the affordable and quality education to the
              world. We are providing the platform for aspiring teachers and
              students to share their skills,creativity and knowledge to each
              other to empower and contribute in the growth and wellness of
              mankind.
            </p>
          </section>
          <div className="w-1/2">
            <img
              src={aboutMainImage}
              className="drop-shadow-2xl"
              alt="about main image"
            />
          </div>
        </div>
        <div className="carousel w-1/2 mx-auto my-10">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                <img
                src={apjAbdulKalam}
                className="w-40 rounded-full border-2 border-gray-400"
                />
                <p className="text-xl text-gray-200">“To succeed in life and achieve results, you must understand and master three mighty forces— desire, belief, and expectation.”</p>
                <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                    ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                    ❯
                </a>
                </div>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                <img
                src={einstein}
                className="w-40 rounded-full border-2 border-gray-400"
                />
                <p className="text-xl text-gray-200">"Anyone who has never made a mistake has never tried anything new.”</p>
                <h3 className="text-2xl font-semibold">Albert Einstein</h3>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                    ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                    ❯
                </a>
                </div>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                <img
                src={billGates}
                className="w-40 rounded-full border-2 border-gray-400"
                />
                <p className="text-xl text-gray-200">"Don't compare yourself with anyone in this world ... if you do so, you are insulting yourself."</p>
                <h3 className="text-2xl font-semibold">Bill Gates</h3>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                    ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                    ❯
                </a>
                </div>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                <img
                src={steveJobs}
                className="w-40 rounded-full border-2 border-gray-400"
                />
                <p className="text-xl text-gray-200">“Your time is limited, so don’t waste it living someone else’s life.”</p>
                <h3 className="text-2xl font-semibold">Steve Jobs</h3>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                    ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                    ❯
                </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
export default Aboutus;
