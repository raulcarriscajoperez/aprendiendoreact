import type { CSSProperties } from "react";

const firstName = "Raulito";
const lastName = "Carriscajo";

const favoriteGames = ["Metal Gear", "Death Stranding", "Cyberpunk 2077"];
const isActive = true;

const address = {
  zipCode: "28971",
  street: "Calle Falsa 123",
  country: "Spain",
};

const activeStyle: CSSProperties = {
  backgroundColor: isActive ? "green" : "red",
  padding: 10,
  color: isActive ? "white" : "black",
};

export function MyAwesomeApp() {
  return (
    <div>
      <h1 data-testid="first-name-title">{firstName}</h1>
      <h3>{lastName}</h3>

      <p className="mi-clase-favorita">{favoriteGames.join(", ")}</p>

      <h1 style={activeStyle}> {isActive ? "Active" : "Inactive"} </h1>

      <p
        style={{ backgroundColor: "orange", borderRadius: "15", padding: "10" }}
      >
        {JSON.stringify(address)}
      </p>
    </div>
  );
}
 