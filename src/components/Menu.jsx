import { pizzas } from "../data";

export default function Menu() {
  return (
    <div className="my-20">
      <div className="flex flex-col items-center gap-10">
        <h1 className="border-y-2 border-grey-2 py-2 text-2xl font-medium uppercase">
          our menu
        </h1>
        <p className="text-center">
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>
        <ul className="grid grid-cols-1 gap-16 tablet:grid-cols-2 tablet:gap-8">
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
        </ul>
      </div>
    </div>
  );
}
