import { Container } from "../Container"
import { LinksFooter } from "./LinksFooter"

export function Footer() {
  return (
    <footer className="py-16 bg-secondaryLight bg-opacity-10">
      <Container>
        <div className="flex justify-between">
          <LinksFooter id={0} />
          <LinksFooter id={1} />
          <div className="space-y-8 max-w-72">
            <LinksFooter id={2} />
            <LinksFooter id={3} />
            <LinksFooter id={4} />
          </div>
        </div>
      </Container>
    </footer>
  )
}
