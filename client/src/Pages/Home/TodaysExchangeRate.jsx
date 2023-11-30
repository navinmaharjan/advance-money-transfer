const TodaysExchangeRate = () => {
  return (
    <>
      <div className="bg-offWhite">
        <div className="container mx-auto">
          <h1 className="text-2xl sm:text-4xl pb-4 sm:pb-8 font-light w-full text-center pt-4 sm:pt-16">
            Today's <span className="text-brand">Exchange Rate</span>
          </h1>
          <div
            className="flex justify-center"
            data-aos="zoom-out-up"
            data-aos-duration="2500"
            data-aos-once="true"
          >
            <iframe
              src="https://www.ashesh.com.np/forex/widget2.php?api=8121y0n018&header_color=FF1C0A&background_color=ffffff&header_title=Nepal%20Exchange%20Rates"
              frameborder="0"
              marginwidth="0"
              marginheight="0"
              className="w-full px-4 sm:w-1/2 h-[500px] sm:h-[700px] "
              allowtransparency="true"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodaysExchangeRate;
