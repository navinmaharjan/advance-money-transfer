import Banner from "../../assets/bannerImages/bannerImage-3.jpg";
import ServiceOne from "../../assets/services/serviceImage-1.jpg";
import ServiceTwo from "../../assets/services/serviceImage-2.jpg";
const Services = () => {
  return (
    <>
      <div className="relative w-full h-20 sm:h-40">
        {/* <div className="absolute w-full h-60 bg-black opacity-50 z-10"></div> */}
        <img
          src={Banner}
          alt="banner"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
          <h3 className="text-2xl sm:text-2xl text-white font-semibold tracking-wide">
            Services
          </h3>
        </div>
      </div>

      <div className="">
        <div className="container mx-auto py-4 sm:py-16 flex flex-col gap-8 sm:gap-20">
          <div
            className="flex items-center gap-4 sm:gap-10 flex-col sm:flex-row px-4 sm:px-0"
            data-aos="zoom-in-left"
            data-aos-duration="2500"
            data-aos-once="true"
          >
            <div className="sm:w-1/2">
              <h1 className="text-2xl sm:text-xl sm:pb-4">
                Immediate <span className="text-brand">Cash</span>
              </h1>
              <p className="sm:mr-20 text-base text-slate-600">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, omnis quo. Iure doloremque sed animi neque molestias accusantium, consequuntur eaque ipsa natus esse temporibus ratione qui voluptatibus possimus pariatur sequi voluptas explicabo nisi quasi sapiente. Quis, hic facilis? Exercitationem et aliquid quisquam illo laborum, voluptate quos dolores, dicta at sunt odit fugiat. Obcaecati voluptates soluta sint? Consequatur omnis dolores, libero ipsa illum quas iusto natus veniam. Numquam, quaerat quam odit beatae cum labore nulla maiores asperiores, nam, eius dolores officia quo unde ratione possimus id repellat voluptatem nihil sequi culpa iure tenetur obcaecati! Rerum porro adipisci hic dicta qui temporibus.
              </p>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative w-full h-96 overflow-hidden rounded-lg">
                <img
                  src={ServiceOne}
                  alt=""
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div
            className="flex items-center gap-4 sm:gap-10 flex-col sm:flex-row px-4 sm:px-0 rounded-lg"
            data-aos="zoom-in"
            data-aos-duration="2500"
            data-aos-once="true"
          >
            <div className="w-full sm:w-1/2 order-2 sm:order-1">
              <div className="relative w-full h-96 overflow-hidden rounded-lg">
                <img
                  src={ServiceTwo}
                  alt=""
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="sm:w-1/2 order-1 sm:order-2">
              <h1 className="text-2xl sm:text-2xl sm:pb-4">Deposits</h1>
              <p className="sm:mr-20 text-base text-slate-600">
              Arrange to deposits -total and/or portion of the "send money" as instructed by the "sender" in bank account. Arrange to deposits -total and/or portion of the "send money" as instructed by the "sender" in bank account. Arrange to deposits -total and/or portion of the "send money" as instructed by the "sender" in bank account. Arrange to deposits -total and/or portion of the "send money" as instructed by the "sender" in bank account.Arrange to deposits -total and/or portion of the "send money" as instructed by the "sender" in bank account. Arrange to deposits -total and/or portion of the "send money" as instructed by the "sender" in bank account. Arrange to deposits -total and/or portion of the "send money" as instructed by the "sender" in bank account. Arrange to deposits -total and/or portion of the "send money" as instructed by the "sender" in bank account.
              </p>
            </div>
          </div>
          <div
            className="flex items-center gap-4 sm:gap-10 flex-col sm:flex-row px-4 sm:px-0"
            data-aos="zoom-in-right"
            data-aos-duration="2500"
            data-aos-once="true"
          >
            <div className="w-full sm:w-1/2">
              <h1 className="text-2xl sm:text-2xl sm:pb-4">
                Disable <span className="text-brand">Customers</span>
              </h1>
              <p className="sm:mr-20 text-base text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, aliquid, blanditiis obcaecati eos odio rem, a magnam assumenda minima quasi voluptatem placeat dolores tempora harum voluptatum voluptate facere veritatis quae tenetur! Vitae dolore recusandae quas, suscipit adipisci nostrum quod incidunt? Exercitationem praesentium maiores qui soluta molestiae. Excepturi, voluptas recusandae! Blanditiis exercitationem, sit doloremque architecto deleniti alias hic in soluta minus maiores fugit. Voluptatum sapiente quos tenetur minima, ipsa enim voluptates fugiat facilis ab dolorum eum explicabo distinctio porro dicta numquam, atque assumenda, praesentium eos! Consequatur harum cumque, dolores quibusdam fugit blanditiis quos numquam suscipit rem doloremque tempore nesciunt velit. Earum.
              </p>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative w-full h-96 overflow-hidden rounded-lg">
                <img
                  src={ServiceOne}
                  alt=""
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div
            className="flex items-center gap-4 sm:gap-10 flex-col sm:flex-row px-4 sm:px-0 rounded-lg"
            data-aos="zoom-in-right"
            data-aos-duration="2500"
            data-aos-once="true"
          >
           
            <div className="w-full sm:w-1/2">
              <div className="relative w-full h-96 overflow-hidden rounded-lg">
                <img
                  src={ServiceTwo}
                  alt=""
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <h1 className="text-2xl sm:text-2xl sm:pb-4">
                <span>Wallet</span>
              </h1>
              <p className="sm:mr-20 text-base text-slate-600">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos assumenda excepturi fuga minus earum delectus vero unde quas et veniam reprehenderit, iusto eaque, repellendus quos tenetur incidunt esse odio quae quibusdam nisi sed enim dolorum? Libero ex dicta, ab at quae corporis aspernatur dolores pariatur asperiores vero a aut distinctio, officia quas, reprehenderit natus. Nihil animi, repellat reprehenderit distinctio accusamus id quas laudantium ad explicabo soluta tempore, dolore molestiae. Amet assumenda corporis vero? Vel fugit, aperiam necessitatibus, consequatur ullam pariatur veritatis incidunt fugiat sapiente quis quod repellat quia ratione facere. Perferendis et commodi porro, id animi maiores debitis fugit similique soluta tenetur voluptatibus, aspernatur voluptates illum dignissimos alias molestiae quia. Culpa eum ad minus quas illo! Quos, necessitatibus vel!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
