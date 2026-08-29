import { About } from "@/components/about";
import { Boardroom } from "@/components/boardroom";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { MenuPreview } from "@/components/menu-previews";
import { Promotions } from "@/components/promotions";
import { TableReservations } from "@/components/table-reservations";
import { Testimonials } from "@/components/testimonials";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MenuPreview />
      <TableReservations />
      <Boardroom />
      <Gallery />
      <Testimonials />
      <Promotions />
    </main>
  );
}
