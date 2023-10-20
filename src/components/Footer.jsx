import FootMenu from "./FootMenu";
export function Footer() {
  return (
    <>
      <footer className="w-full h-full bg-[#25252d] rounded-tr-[10rem] text-[#c8c8cb] mt-[-21rem] scrn900:mt-[-5rem] ">
        <div
          className="flex justify-between max-w-[115rem] items-start ml-[15rem] mr-[20rem] scrn900:flex-col scrn900:items-center
          mt-[7rem] mb-[9rem] scrn900:mr-[0] scrn900:mx-auto 
        "
        >
          <div className="h-full w-[10rem]">
            <img src="../images/logo.svg" alt="logo" />
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
