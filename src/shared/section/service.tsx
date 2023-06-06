import { BasicCarousel, CarouselItem } from "../../components";
import "./service.css";

const items = Array.from({ length: 5 }).map((_, i) => ({
  id: i,
  src: `https://picsum.photos/500?idx=${i}`,
}));

const Service = () => {
  return (
    <div className="bg-service p-3">
      <div className="service-main container d-flex justify-content-center p-lg-5 p-3">
        <div className="p-lg-3 p-2">
          <h4 className="logo-text text-center text-muted m-lg-3 m-2">SERVICES</h4>
          <h1 className="logo-text text-center fw-bold m-lg-3 m-2">WE PROVIDE AWESOME SERVICE</h1>
        </div>
      </div>

      <div>
        <BasicCarousel
          items={items}
          renderItem={({ item, isSnapPoint }) => (
            <CarouselItem isSnapPoint={isSnapPoint}>
              <img src={item.src} width="250" height="250" alt="carousel-img" />
            </CarouselItem>
          )}
        />
      </div>
    </div>
  );
};

export default Service;
