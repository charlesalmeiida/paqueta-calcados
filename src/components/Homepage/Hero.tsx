import { Button } from "../Button";

export function Hero() {
  return (
    <main>
      <section className="bg-bgBanner bg-no-repeat bg-center bg-cover object-cover">
        <div className="py-32 space-y-6 w-full flex flex-col items-end pr-56">
          <div>
            <div>
              <h1 className="font-poppins text-secondaryLight">Tênis Casual</h1>
              <h2 className="font-poppins text-6xl -mt-7 opacity-80 text-primaryDark">
                Masculino
              </h2>
            </div>
            <div className="flex flex-col mt-6 mb-8">
              <span className="font-poppins text-2xl opacity-60 text-secondaryLight font-medium">
                A partir de
              </span>
              <strong className="text-5xl font-poppins font-bold text-secondaryLight">
                R$ 79,99
              </strong>
            </div>
            <Button>aproveite</Button>
          </div>
        </div>
      </section>
    </main>
  )
}