import React from "react";

const sharedClasses = {
  greenBg: "bg-green-200",
  greenText: "text-green-500",
  greenBtn: "bg-green-500 text-white py-2 px-4 rounded-lg",
  greenBtnAlt: "mt-2 bg-green-500 text-white py-2 px-4 rounded-lg",
  greenBtnAlt2: "mt-4 bg-green-500 text-white py-2 px-4 rounded-lg",
  greenTextAlt: "text-green-700",
  greenTextAlt2: "text-green-800",
  textSm: "text-sm",
  textLg: "text-lg",
  p4: "p-4",
  mb8: "mb-8",
  gridCols2: "grid grid-cols-2 gap-4",
  wFull: "w-full",
  hAuto: "h-auto",
  roundedLg: "rounded-lg",
  textCenter: "text-center",
};

const Header = () => {
  return (
    <header
      className={`${sharedClasses.greenBg} ${sharedClasses.p4} ${sharedClasses.textCenter}`}
    >
      <h1 className={`${sharedClasses.greenTextAlt2} text-2xl font-bold`}>
        Clean & Green
      </h1>
      <p className={sharedClasses.textSm}>Nurture Life Like A Dream</p>
      <button className={sharedClasses.greenBtnAlt}>Discover All</button>
    </header>
  );
};

const PlantInfo = () => {
  return (
    <div className={sharedClasses.p4}>
      <div className={sharedClasses.mb8}>
        <h2
          className={`${sharedClasses.greenTextAlt} ${sharedClasses.textLg} font-semibold`}
        >
          A Houseplant's Journey Home
        </h2>
        <p className={sharedClasses.textSm}>
          Follow along as one of our favorite plants from our greenhouse to your
          home, and learn how to care for your plant along the journey.
        </p>
        <a
          href="#"
          className={`${sharedClasses.greenText} ${sharedClasses.textSm}`}
        >
          Read More →
        </a>
      </div>

      <div className={sharedClasses.gridCols2}>
        <img
          src="https://placehold.co/200x200"
          alt="Plant packaging"
          className={`${sharedClasses.wFull} ${sharedClasses.hAuto}`}
        />
        <img
          src="https://placehold.co/200x200"
          alt="Person holding a plant"
          className={`${sharedClasses.wFull} ${sharedClasses.hAuto}`}
        />
      </div>

      <div
        className={`${sharedClasses.textCenter} ${sharedClasses.p4} ${sharedClasses.greenBg} ${sharedClasses.roundedLg}`}
      >
        <h2
          className={`${sharedClasses.greenTextAlt} ${sharedClasses.textLg} font-semibold`}
        >
          Refresh your home for the season with fully-grown, potted plants
          delivered to your door.
        </h2>
        <button className={sharedClasses.greenBtnAlt2}>Learn More</button>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer
      className={`${sharedClasses.greenBg} ${sharedClasses.p4} ${sharedClasses.textCenter} ${sharedClasses.textSm}`}
    >
      <p>
        Delivery to your door. We'll bring your plants to your days, anywhere in
        CG.
      </p>
      <p>
        All the help you need, we'll send you a free plant-parenting course.
      </p>
    </footer>
  );
};

const PlantComponent = () => {
  return (
    <div className="bg-white text-zinc-600">
      <Header />
      <PlantInfo />
      <Footer />
    </div>
  );
};
