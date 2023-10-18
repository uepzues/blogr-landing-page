import FootMenu from "./FootMenu";
export function Footer() {
  return (
    <>
      <footer className="w-full h-full bg-[#25252d] rounded-tr-[10rem] text-[#c8c8cb]">
        <div
          className="flex justify-between max-w-[100rem] items-start m-auto px-5 mt-[6.5rem] shrink scrn900:flex-col scrn900:items-center
          mb-[10rem]
        "
        >
          <div>
            <img src="../src/images/logo.svg" alt="logo" />
          </div>
          <FootMenu
            head="Product"
            list={[
              "Overview",
              "Pricing",
              "Marketplace",
              "Features",
              "Integrations",
            ]}
          />
          <FootMenu
            head="Company"
            list={["About", "Team", "Blog", "Careers"]}
          />

          <FootMenu
            head="Connect"
            list={["Contact", "Newsletter", "LinkedIn"]}
          />
        </div>
      </footer>
    </>
  );
}
