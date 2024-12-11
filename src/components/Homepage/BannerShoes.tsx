import { Button } from "../Button"

interface BannerShoesProps {
  gender: "woman" | "man"
  direction: "left" | "right"
  children: React.ReactNode
}

export function BannerShoes({ gender, direction, children }: BannerShoesProps) {
  return (
    <div
      className={`flex ${
        direction === "left" ? "" : "flex-row-reverse"
      } items-start justify-between`}
    >
      <div
        className={`${
          gender === "woman" ? "bg-bgWomanShoes" : "bg-bgManShoes"
        } ${
          direction === "left" ? "justify-start pl-12" : "justify-end pr-12"
        } flex-1 flex items-end rounded-sm bg-no-repeat bg-center bg-cover object-cover h-[668px] max-w-[622px] pb-20`}
      >
        <h3
          className={`font-poppins ${
            direction === "left" ? "text-left" : "text-right"
          } text-5xl text-light leading-[140%] max-w-80 shadowText`}
        >
          {gender === "woman" ? "CALÇADOS FEMININOS" : "CALÇADOS MASCULINOS"}
        </h3>
      </div>
      <div
        className={`mt-40 space-y-14 flex flex-col ${
          direction === "left" ? "items-end text-right" : "items-start"
        }`}
      >
        <p className="font-montserrat text-[22px] leading-9 text-secondaryLight max-w-[628px]">
          {children}
        </p>
        <Button>Conferir</Button>
      </div>
    </div>
  )
}
