import { useEffect, useState } from "react";
import Flag from "react-flagkit";
import axios from "axios";

const TodaysExchangeRate = () => {
  let [exchangeRate, setExchangeRate] = useState([]);
  useEffect(() => {
    axios.get("https://www.nrb.org.np/api/forex/v1/app-rate").then((res) => {
      setExchangeRate(res.data);
    });
  }, []);
  // console.log(exchangeRate[0].date)
  return (
    <>
      <div className="bg-offWhite">
        <div className="container mx-auto py-16">
          <h1 className="text-2xl sm:text-4xl pb-4 sm:pb-8 font-light w-full text-center pt-4 sm:pt-4">
            Today's{" "}
            <span className="text-brand">Exchange Rate For Remittance</span>
          </h1>
          <div className="flex gap-8">
            <div className="w-1/2 flex flex-col shadow-xl">
              <div className="bg-brand p-2 flex justify-between text-xl">
                <p className="text-white">Average Rate of Remittance</p>
                <p className="text-white">{exchangeRate[0]?.date} - 10 AM</p>
              </div>
              <div className="bg-white text-slate-700 font-medium  p-2 flex justify-between text-xl">
                <p className="w-1/2">Currency</p>
                <div className="flex w-1/2 justify-between">
                  <p>Unit</p>
                  <p>Buying Rate(Average)</p>
                </div>
              </div>
              {/* USD */}
              <div className="bg-offWhite text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="US" />
                  <p>
                    {exchangeRate[1]?.iso3} ({exchangeRate[1]?.name})
                  </p>
                </div>

                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[1]?.buy}</p>
                </div>
              </div>
              {/* EURO */}
              <div className="bg-white text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="EU" />
                  <p>
                    {exchangeRate[2]?.iso3} ({exchangeRate[2]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[2]?.buy}</p>
                </div>
              </div>
              {/* GBP */}
              <div className="bg-offWhite text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="GB" />
                  <p>
                    {exchangeRate[3]?.iso3} ({exchangeRate[3]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[3]?.buy}</p>
                </div>
              </div>
              {/* CHF */}
              <div className="bg-white text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="CH" />
                  <p>
                    {exchangeRate[4]?.iso3} ({exchangeRate[4]?.name})
                  </p>
                </div>

                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[4]?.buy}</p>
                </div>
              </div>
              {/* AUD */}
              <div className="bg-offWhite text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="AU" />
                  <p>
                    {exchangeRate[5]?.iso3} ({exchangeRate[5]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[5]?.buy}</p>
                </div>
              </div>
              {/* CAD */}
              <div className="bg-white text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="CA" />
                  <p>
                    {exchangeRate[6]?.iso3} ({exchangeRate[6]?.name})
                  </p>
                </div>

                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[6]?.buy}</p>
                </div>
              </div>
              {/* SGD */}
              <div className="bg-offWhite text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="SG" />
                  <p>
                    {exchangeRate[7]?.iso3} ({exchangeRate[7]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[7]?.buy}</p>
                </div>
              </div>
              {/* JPY */}
              <div className="bg-white text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="JP" />
                  <p>
                    {exchangeRate[8]?.iso3} ({exchangeRate[8]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>10</p>
                  <p className="pr-32">{exchangeRate[8]?.buy}</p>
                </div>
              </div>

              {/* CHINA */}
              <div className="bg-offWhite text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="CN" />
                  <p>
                    {exchangeRate[9]?.iso3} ({exchangeRate[9]?.name})
                  </p>
                </div>

                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[9]?.buy}</p>
                </div>
              </div>

              {/* SAUDI ARABIA */}
              <div className="bg-white text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="SA" />
                  <p>
                    {exchangeRate[10]?.iso3} ({exchangeRate[10]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[10]?.buy}</p>
                </div>
              </div>

              {/* QATAR */}
              <div className="bg-offWhite text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="QA" />
                  <p>
                    {exchangeRate[11]?.iso3} ({exchangeRate[11]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[11]?.buy}</p>
                </div>
              </div>

              {/* THAILAND */}
              <div className="bg-white text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="TH" />
                  <p>
                    {exchangeRate[12]?.iso3} ({exchangeRate[12]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[12]?.buy}</p>
                </div>
              </div>

              {/* UAE */}
              <div className="bg-offWhite text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="AE" />
                  <p>
                    {exchangeRate[13]?.iso3} ({exchangeRate[13]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[13]?.buy}</p>
                </div>
              </div>

              {/* MALAYSIA */}
              <div className="bg-white text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="MY" />
                  <p>
                    {exchangeRate[14]?.iso3} ({exchangeRate[14]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[14]?.buy}</p>
                </div>
              </div>

              {/* SOUTH KOREA */}
              <div className="bg-offWhite text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="KR" />
                  <p>
                    {exchangeRate[15]?.iso3} ({exchangeRate[15]?.name})
                  </p>
                </div>

                <div className="flex w-1/2 justify-between">
                  <p>100</p>
                  <p className="pr-32">{exchangeRate[15]?.buy}</p>
                </div>
              </div>

              {/* SWEDEN */}
              <div className="bg-white text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="SE" />
                  <p>
                    {exchangeRate[16]?.iso3} ({exchangeRate[16]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[16]?.buy}</p>
                </div>
              </div>

              {/* DENMARK */}
              <div className="bg-offWhite text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="DK" />
                  <p className="w-1/2">
                    {exchangeRate[17]?.iso3} ({exchangeRate[17]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[17]?.buy}</p>
                </div>
              </div>

              {/* HONG KONG */}
              <div className="bg-white text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="HK" />
                  <p>
                    {exchangeRate[18]?.iso3} ({exchangeRate[18]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[18]?.buy}</p>
                </div>
              </div>

              {/* KUWAIT */}
              <div className="bg-offWhite text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="KW" />
                  <p>
                    {exchangeRate[19]?.iso3} ({exchangeRate[19]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[19]?.buy}</p>
                </div>
              </div>

              {/* BAHRAIN */}
              <div className="bg-white text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="BH" />
                  <p>
                    {exchangeRate[20]?.iso3} ({exchangeRate[20]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[20]?.buy}</p>
                </div>
              </div>

              {/* INDIA */}
              <div className="bg-offWhite text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="IN" />
                  <p>
                    {exchangeRate[0]?.iso3} ({exchangeRate[0]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>100</p>
                  <p className="pr-32">{exchangeRate[0]?.buy}</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col shadow-xl">
              <div className="bg-blue-700 p-2 flex justify-between text-xl">
                <p className="text-white">Average Rate of Remittance</p>
                <p className="text-white">{exchangeRate[0]?.date} - 2 PM</p>
              </div>
              <div className="bg-white text-slate-700 font-medium  p-2 flex justify-between text-xl">
                <p className="w-1/2">Currency</p>
                <div className="flex w-1/2 justify-between">
                  <p>Unit</p>
                  <p>Buying Rate(Average)</p>
                </div>
              </div>
              {/* USD */}
              <div className="bg-offWhite text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="US" />
                  <p>
                    {exchangeRate[1]?.iso3} ({exchangeRate[1]?.name})
                  </p>
                </div>

                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[1]?.buy}</p>
                </div>
              </div>
              {/* EURO */}
              <div className="bg-white text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="EU" />
                  <p>
                    {exchangeRate[2]?.iso3} ({exchangeRate[2]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[2]?.buy}</p>
                </div>
              </div>
              {/* GBP */}
              <div className="bg-offWhite text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="GB" />
                  <p>
                    {exchangeRate[3]?.iso3} ({exchangeRate[3]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[3]?.buy}</p>
                </div>
              </div>
              {/* CHF */}
              <div className="bg-white text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="CH" />
                  <p>
                    {exchangeRate[4]?.iso3} ({exchangeRate[4]?.name})
                  </p>
                </div>

                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[4]?.buy}</p>
                </div>
              </div>
              {/* AUD */}
              <div className="bg-offWhite text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="AU" />
                  <p>
                    {exchangeRate[5]?.iso3} ({exchangeRate[5]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[5]?.buy}</p>
                </div>
              </div>
              {/* CAD */}
              <div className="bg-white text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="CA" />
                  <p>
                    {exchangeRate[6]?.iso3} ({exchangeRate[6]?.name})
                  </p>
                </div>

                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[6]?.buy}</p>
                </div>
              </div>
              {/* SGD */}
              <div className="bg-offWhite text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="SG" />
                  <p>
                    {exchangeRate[7]?.iso3} ({exchangeRate[7]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[7]?.buy}</p>
                </div>
              </div>
              {/* JPY */}
              <div className="bg-white text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="JP" />
                  <p>
                    {exchangeRate[8]?.iso3} ({exchangeRate[8]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>10</p>
                  <p className="pr-32">{exchangeRate[8]?.buy}</p>
                </div>
              </div>

              {/* CHINA */}
              <div className="bg-offWhite text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="CN" />
                  <p>
                    {exchangeRate[9]?.iso3} ({exchangeRate[9]?.name})
                  </p>
                </div>

                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[9]?.buy}</p>
                </div>
              </div>

              {/* SAUDI ARABIA */}
              <div className="bg-white text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="SA" />
                  <p>
                    {exchangeRate[10]?.iso3} ({exchangeRate[10]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[10]?.buy}</p>
                </div>
              </div>

              {/* QATAR */}
              <div className="bg-offWhite text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="QA" />
                  <p>
                    {exchangeRate[11]?.iso3} ({exchangeRate[11]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[11]?.buy}</p>
                </div>
              </div>

              {/* THAILAND */}
              <div className="bg-white text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="TH" />
                  <p>
                    {exchangeRate[12]?.iso3} ({exchangeRate[12]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[12]?.buy}</p>
                </div>
              </div>

              {/* UAE */}
              <div className="bg-offWhite text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="AE" />
                  <p>
                    {exchangeRate[13]?.iso3} ({exchangeRate[13]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[13]?.buy}</p>
                </div>
              </div>

              {/* MALAYSIA */}
              <div className="bg-white text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="MY" />
                  <p>
                    {exchangeRate[14]?.iso3} ({exchangeRate[14]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[14]?.buy}</p>
                </div>
              </div>

              {/* SOUTH KOREA */}
              <div className="bg-offWhite text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="KR" />
                  <p>
                    {exchangeRate[15]?.iso3} ({exchangeRate[15]?.name})
                  </p>
                </div>

                <div className="flex w-1/2 justify-between">
                  <p>100</p>
                  <p className="pr-32">{exchangeRate[15]?.buy}</p>
                </div>
              </div>

              {/* SWEDEN */}
              <div className="bg-white text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="SE" />
                  <p>
                    {exchangeRate[16]?.iso3} ({exchangeRate[16]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[16]?.buy}</p>
                </div>
              </div>

              {/* DENMARK */}
              <div className="bg-offWhite text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="DK" />
                  <p className="w-1/2">
                    {exchangeRate[17]?.iso3} ({exchangeRate[17]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[17]?.buy}</p>
                </div>
              </div>

              {/* HONG KONG */}
              <div className="bg-white text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="HK" />
                  <p>
                    {exchangeRate[18]?.iso3} ({exchangeRate[18]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[18]?.buy}</p>
                </div>
              </div>

              {/* KUWAIT */}
              <div className="bg-offWhite text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="KW" />
                  <p>
                    {exchangeRate[19]?.iso3} ({exchangeRate[19]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[19]?.buy}</p>
                </div>
              </div>

              {/* BAHRAIN */}
              <div className="bg-white text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="BH" />
                  <p>
                    {exchangeRate[20]?.iso3} ({exchangeRate[20]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>1</p>
                  <p className="pr-32">{exchangeRate[20]?.buy}</p>
                </div>
              </div>

              {/* INDIA */}
              <div className="bg-offWhite text-slate-700  p-2 flex justify-between text-xl">
                <div className="w-1/2 flex gap-2">
                  <Flag country="IN" />
                  <p>
                    {exchangeRate[0]?.iso3} ({exchangeRate[0]?.name})
                  </p>
                </div>
                <div className="flex w-1/2 justify-between">
                  <p>100</p>
                  <p className="pr-32">{exchangeRate[0]?.buy}</p>
                </div>
              </div>
            </div>
          </div>
          <p className="py-4 text-lg">
            <span className="font-medium">Note</span>{" "}
            <i>
              Rates published as per NRB Forex Directives Rates are applicable
              to banks and financial institutions and Remittance companies
            </i>
          </p>
        </div>
      </div>
    </>
  );
};

export default TodaysExchangeRate;
