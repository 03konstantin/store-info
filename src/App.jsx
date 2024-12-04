import { useState } from "react";
import storeData from "../storeData.json";

function App() {
  const [selectedRegion, setSelectedRegion] = useState("Tohoku");

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>店舗情報</h1>
      <label>
        地域を選択:
        <select
          value={selectedRegion}
          onChange={handleRegionChange}
          style={{ marginLeft: "10px" }}
        >
          {Object.keys(storeData.regions).map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </label>

      <div style={{ marginTop: "20px" }}>
        {storeData.regions[selectedRegion].map((store, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h2>{store.storeName}</h2>
            <p>住所: {store.address}</p>
            <p>電話番号: {store.phoneNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;