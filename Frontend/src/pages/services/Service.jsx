import { services } from "./services";

const Service = () => {
  return (
    <div className="w-full cursor-default">
      <div className="max-w-[1080px] mx-2 md:mx-auto flex flex-col items-center">
        <h1 className="px-20 py-4 my-6 w-max text-3xl uppercase font-bold text-primary border-2 border-primary ">
          Our Services
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 my-12">
          {services.map((service) => {
            return (
              <div
                key={service.id}
                className="max-w-96  flex-1 flex flex-col text-center min-h-56 bg-[#212121]  rounded-md overflow-hidden"
              >
                <h2 className="text-lg font-semibold p-4 bg-primary text-white">
                  {service.title}
                </h2>
                <p className="flex-1 text-justify py-2 px-8 text-white">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
