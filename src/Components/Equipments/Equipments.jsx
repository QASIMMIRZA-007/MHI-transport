import React from "react";
import "./Equipments.scss";
import Card from "../../UI/Card/Card";
import ScrollCarousel from "scroll-carousel-react";

import { dryVan, flatbed, reefer } from "../../assets/Index";

const Equipments = () => {
  const cardData = [
    {
      id: 1,
      svg: flatbed,
      title: "Flatbed",
      description:
        "Our dispatch solutions for flatbed trucking cater to diverse load types, including industrial equipment and oversized structures",
    },
    {
      id: 2,
      svg: reefer,
      title: "Reefer",
      description:
        "Reefer trucking is vital for temperature-sensitive goods, with Swift Dispatch Services leading in efficiency and reliability.",
    },
    {
      id: 3,
      svg: dryVan,
      title: "Dry Van",
      description:
        "Dry van trucking excels in hauling non-perishable goods. Our dispatchers coordinate with brokers, managing cargo details and schedules.",
    },
  ];
  return (
    <div className="EquipmentsWrapper">
      <div className="EquipmentsWrapp">
        <div className="minispan">WHAT WE DO?</div>
        <h1>We work with a full range of equipment types.</h1>
        <p className="para">
          Transportation and logistics companies are the backbone of the global
          economy, ensuring the smooth transit of goods across various sectors.{" "}
        </p>
        <div className="cardsWrapper">
          <ScrollCarousel
            autoplay
            autoplaySpeed={1}
            speed={0.05}
            onReady={() => console.log("I am ready")}
          >
            {cardData.map((item) => {
              return (
                <Card
                  svg={item.svg}
                  title={item.title}
                  description={item.description}
                  key={item.id}
                />
              );
            })}
          </ScrollCarousel>
        </div>
      </div>
    </div>
  );
};

export default Equipments;
