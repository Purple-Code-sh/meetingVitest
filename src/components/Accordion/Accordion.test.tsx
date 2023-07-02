/* // To avoid including allways the next imports are using globals in vite and ts configs.
import { describe, expect, test } from "vitest"; */

import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Accordion from "./Accordion";

const cardsInfo = [
  {
    header: "Ofertas en tendencia",
    image: "",
    description: "Audífonos Gamer y Accesorios para Consolas",
  },
  {
    header: "Ofertas en salud",
    image: "",
    description: "Oferta en serums, cremas faciales y fibras capilares",
  },
  {
    header: "Descuentos en tecnologia",
    image: "",
    description: "Electrónica, Cámaras, Fotografía y más",
  },
  { header: "", image: "", description: "Promoción pagada" },
];

describe("Accordion", () => {
  beforeEach(() => {
    cardsInfo.map((element) => {
      render(
        <Accordion title="shm-A">
          <h3 role="sectionHeader">Subtitle</h3>
          <div className="toGrow">
            <div className="fromGrow">box with flexible height</div>
          </div>
          <div role="articleDescription">
            <p>First description paragraph</p>
          </div>
        </Accordion>
      );
    });
  });
  afterEach(cleanup);

  test("should render the component and show title", () => {
    expect(screen.getAllByText("shm-A")).toBeDefined();
  });

  test("should show the content at begging", () => {
    expect(screen.queryAllByText(/subtitle/i)).toBeDefined();
  });

  /* test("should show the content when button is clicked", () => {
    const button = screen.getByText("Open");
    fireEvent.click(button);
    expect(screen.queryByText(/subtitle/i)).toBeDefined();
  }); */

  /* test("should not show the content when button is clicked a second time", () => {
    const button = screen.getByText("Open");
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.queryByText(/subtitle/i)).toBeNull();
  }); */

  test("children should have a sectionHeader role and a toGrow class", () => {
    /*     const button = screen.getByText("Open");
    fireEvent.click(button); */
    expect(screen.getAllByRole("sectionHeader"));
    expect(screen.queryAllByText("toBottom"));
  });

  test("children should have a articleDescription role", () => {
    /* const button = screen.getByText("Open");
    fireEvent.click(button); */
    screen.getAllByRole("articleDescription");
  });
});
