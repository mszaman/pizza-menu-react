import Order from "./Order";

export default function Footer() {
  const hours = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hours >= openHour && hours <= closeHour;

  return (
    <>
      <footer className="mb-32 mt-16 text-center">
        {isOpen ? (
          <Order openHour={openHour} closeHour={closeHour} />
        ) : (
          <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00.
          </p>
        )}
      </footer>
    </>
  );
}
