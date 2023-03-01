import * as React from "react";
import dynamic from "next/dynamic";
import { Colorway } from "../util/colorways";
import { Logo } from "../components/Logo";
import { Features } from "../components/Features";
import { Background } from "../components/Background";
import { Column } from "../components/Column";
import { PlaceHolderWrapper } from "../components/PlaceHolderWrapper";
import { PurchaseForm } from "../components/PurchaseForm";

const Hoverboard = dynamic(async () => (await import("../components/Hoverboard")).Hoverboard, {
  ssr: false,
});

export default function Product() {
  const [formData, setFormData] = React.useState<{ color: Colorway }>({
    color: "red",
  });
  const handleDataChange = (id, value) => {
    setFormData(currentFormData => ({
      ...currentFormData,
      [id]: value,
    }));
  };

  return (
    <main
      style={{
        display: "grid",
        placeItems: "center",
        paddingTop: "var(--space-3)",
        paddingBottom: "var(--space-3)",
        gap: "var(--space-3)",
      }}
    >
      <Column gap={1}>
        <h1 className="screen-reader-only">Overboard</h1>
        <h2 className="screen-reader-only">Bugslayer</h2>
        <Logo />

        <Features />
      </Column>

      <div className="ProductAnimation">
        <PlaceHolderWrapper>
          <Hoverboard color={formData.color} />
        </PlaceHolderWrapper>
      </div>

      <Background />

      <PurchaseForm data={formData} onDataChange={handleDataChange} />
    </main>
  );
}
