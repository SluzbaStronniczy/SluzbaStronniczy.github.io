import Header from "@components/Header";
import ScrollToTop from "@components/ScrollToTop";
import type { FC } from "react";
import Footer from "../../components/Footer/Footer";

const Default: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <Header
        links={[
          {
            label: "Strona główna",
            link: "/",
          },
          {
            label: "Blog",
            link: "/blog",
          },
        ]}
      />
      <main>{children}</main>
      <Footer
        data={[
          {
            title: "O mnie",
            links: [
              {
                label: "Strona główna",
                link: "/",
              },
              {
                label: "O służbie",
                link: "/o-sluzbie",
              },
            ],
          },
          {
            title: "Kontakt",
            links: [
              {
                label: "Wypełnij formularz",
                link: "/formularz",
              },
            ],
          },
        ]}
      />
      <ScrollToTop topOffset={300} />
    </>
  );
};

export default Default;
