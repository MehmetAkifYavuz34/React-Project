import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Graticule,
  Sphere,
} from "react-simple-maps";

const Main = () => {
  const [geo, setGeo] = useState();

  const geoUrl = "https://ismailarilik.com/react-covid-maps/geo.json";

  return (
    <div className="h-[calc(100vh-74px)] text-white overflow-hidden flex flex-col justify-center items-center md:pt-20 wrapper">
      <h1 className="pb-6">
        Detay Görüntüle:{" "}
        {geo?.properties?.name ? geo.properties.name : "(ülke seçin)"}
      </h1>

      <ComposableMap height={1000}>
        <ZoomableGroup zoom={2}>
          <Graticule stroke="gray" strokeWidth={0.3} />
          <Sphere stroke="gray" strokeWidth={0.6} />

          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Link to={`/detail?code=${geo.id}`} key={geo.rsmKey}>
                  <Geography
                    onMouseEnter={() => setGeo(geo)}
                    onMouseLeave={() => setGeo(null)}
                    geography={geo}
                    style={{
                      default: { fill: "#EEE" },
                      hover: { fill: "rgb(54 197 94)" },
                    }}
                  />
                </Link>
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default Main;
