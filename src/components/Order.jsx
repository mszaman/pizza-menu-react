export default function Order({ openHour, closeHour }) {
  return (
    <>
      <p className="mb-5">
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="bg-gold-1 px-8 py-2 font-medium capitalize transition-colors duration-300 hover:bg-gold-2">
        order
      </button>
    </>
  );
}
