// import { lazy } from "solid-js";
// const dataUser = lazy(() => import("@/data/user"));
import user from "@/data/user";
const dataUser = user.getAll();
// console.log(user.getAll(), dataUser);
const Profile = () => {
  return (
    <>
      <div>
        <div>
          <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
              <img src="https://placeimg.com/800/200/arch" class="w-full" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
              <img src="https://placeimg.com/800/200/arch" class="w-full" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
              <img src="https://placeimg.com/800/200/arch" class="w-full" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full">
              <img src="https://placeimg.com/800/200/arch" class="w-full" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap gap-10 justify-center py-10 ">
          {dataUser.map((item) => (
            <div key={item.id}>
              <div class="card card-compact w-96 bg-base-100 shadow-xl first:py-10  hover:shadow-2xl">
                <figure>
                  <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">{item.name}</h2>
                  <p>
                    If a dog chews shoes whose shoes does he choose a?{" "}
                    {item.age}
                  </p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
