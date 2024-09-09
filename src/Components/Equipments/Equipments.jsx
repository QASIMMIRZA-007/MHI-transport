import React, { useEffect, useState } from "react";
import "./Equipments.scss";
import Card from "../../UI/Card/Card";
import ScrollCarousel from "scroll-carousel-react";

import { dryVan, flatbed, reefer } from "../../assets/Index";
import { useMediaQuery } from "react-responsive";

const Equipments = () => {
  const [visibleCards, setVisibleCards] = useState(3);
  const updateVisibleCards = () => {
    if (window.innerWidth <= 768) {
      setVisibleCards(1);
    } else {
      setVisibleCards(3);
    }
  };

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);
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

  const mobileResponsive = useMediaQuery({
    query: "(max-width: 992px)",
  });
  // const mediumScreen = useMediaQuery({
  //   query: "(max-width: 992px)",
  // });

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
          {mobileResponsive ? (
            cardData.map((item) => {
              return (
                <Card
                  svg={item.svg}
                  title={item.title}
                  description={item.description}
                  key={item.id}
                />
              );
            })
          ) : (
            <ScrollCarousel
              autoplay
              autoplaySpeed={1}
              speed={0.05}
              margin={10}
              visibleItems={visibleCards}
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Equipments;
