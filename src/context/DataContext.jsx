import { createContext } from "react";
export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const array = [
    {
      id: 1,
      name: "ELEMIS",
      desc: "Find the truth in skincare",
      url: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/e40ea579-c621-4e50-899c-0b3ffaa5005a.jpeg&w=3840&q=75",
    },
    {
      id: 2,
      name: "Tommy Hilfiger",
      desc: "Lucky green styles",
      url: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/28272ba4-2cce-4468-9caa-eefeec516042.jpeg&w=3840&q=75",
    },
    {
      id: 3,
      name: "KAYAK",
      desc: "Ready for take off",
      url: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/e1f309cd-eef6-484f-ab54-25f48c37ab34.png&w=3840&q=75",
    },
    {
      id: 4,
      name: "ESPA",
      desc: "Natural skincare",
      url: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/574c903f-615d-49de-aa97-5c9d25381136.png&w=3840&q=75",
    },
    {
      id: 5,
      name: "Microsoft",
      desc: "Expect more from your computer",
      url: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/e1f309cd-eef6-484f-ab54-25f48c37ab34.png&w=3840&q=75",
    },
    {
      id: 6,
      name: "Nike",
      desc: "Take it to the next level",
      url: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/83205c67-8a2c-4d31-b5c8-da21880f9483.png&w=3840&q=75",
    },
    {
      id: 7,
      name: "Bed Bath & Beyond",
      desc: "Sweet dreams",
      url: "https://www.klarna.com/b2c/_next/image/?url=https://d2r76poigfg60j.cloudfront.net/75dcd70e-cee3-418c-bf48-cef1907f658c.png&w=3840&q=75",
    },
  ];
  return (
    <DataContext.Provider value={{ array }}>{children}</DataContext.Provider>
  );
};
