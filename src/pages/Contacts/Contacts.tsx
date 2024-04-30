// import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "./Contacts.scss";

const Contacts: React.FC = () =>{
  return (
    <section className="container">
      <h1 className="content__title">Контакты</h1>
      <div className="contacts-items">
        <div className="contacts-data">
          <h2>
            Адрес:
            <span className="contacts-data__adress"> ул. Буйнаксого</span>
          </h2>
          <h3>
            Телефон: <span className="contacts-data__tel"> 892855511222</span>
          </h3>
        </div>

        <YMaps>
          <Map
            className="contacts-map"
            defaultState={{
              center: [42.054761, 48.294059],
              zoom: 17,
              controls: ["zoomControl", "fullscreenControl"],
            }}
            modules={["control.ZoomControl", "control.FullscreenControl"]}
          >
            <Placemark defaultGeometry={[42.054761, 48.294059]} />
          </Map>
        </YMaps>
      </div>
    </section>
  );
}

export default Contacts;
