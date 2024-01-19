export default function Footer() {
  const hours = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hours >= openHour && hours <= closeHour;

  console.log(hours);

  return (
    <>
      <footer className="mb-32 mt-16 text-center">
        {isOpen ? (
          <>
            <p className="mb-5">
              We're open from 12:00 to 22:00. Come visit us or order online.
            </p>
            <button className="bg-gold-1 px-8 py-2 font-medium capitalize transition-colors duration-300 hover:bg-gold-2">
              order
            </button>
          </>
        ) : (
          <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00.
          </p>
        )}
      </footer>
    </>
  );
}
