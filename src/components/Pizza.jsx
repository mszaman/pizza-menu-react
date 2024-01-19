export default function Pizza({ pizzas }) {
  return (
    <>
      {pizzas.map((p) => (
        <li
          className="mx-auto h-fit w-4/5 flex-row gap-5 text-center tablet:mx-0 tablet:flex tablet:w-full tablet:items-start"
          key={p.id}
        >
          <img
            className={`tablet:min-w-1/2 mx-auto mb-5 w-32 tablet:mx-0 tablet:mb-0 tablet:aspect-square tablet:min-h-full tablet:object-contain ${p.soldOut ? "grayscale" : ""}`}
            src={p.photoName}
            alt={p.name}
          />
          <div
            className={`flex flex-col gap-3 tablet:items-start tablet:text-start ${p.soldOut ? "text-grey-1" : ""}`}
          >
            <h4 className="text-xl font-medium">{p.name}</h4>
            <p className="italic">{p.ingredients}</p>
            <p className="text-lg font-medium uppercase">
              {p.soldOut ? "sold out" : `$${p.price}`}
            </p>
          </div>
        </li>
      ))}
    </>
  );
}
