import Card from "../components/Card.jsx";
import "../styles/highlights.css";

export default function Highlights() {
  return (
    <section className="highlights">
      <Card
        title="Artisanal Sourcing"
        description="We partner with local farmers to bring you pasture-raised beef and organic seasonal vegetables."
        category="CRAFTSMANSHIP"
        image="https://images.unsplash.com/photo-1550547660-d9450f859349"
      />

      <Card
        title="Truffle Lust"
        description="Our famous hand-cut fries tossed in white truffle oil and 24-month aged parmesan."
        category="SIGNATURE SIDES"
        image="https://images.unsplash.com/photo-1573080496219-bb080dd4f877"
      />
    </section>
  );
}