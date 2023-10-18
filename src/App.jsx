import Hero from "./components/Hero.jsx";
import Section1 from "./components/Section1.jsx";
import Section2 from "./components/Section2.jsx";
import { Footer } from "./components/Footer.jsx";
function App() {
  return (
    <>
      <div className="h-full max-w-[1440px] w-full flex flex-col items-center font-Overpass bg-white  overflow-hidden">
        <Hero
          heading="A modern publishing platform"
          para="Grow your audience and build your online brand"
        />
        <Section1
          h3="Designed for the future"
          headingText="Introducing an extensible editor"
          para="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog."
          order1="order-2"
          headingText2="Robust content management"
          para2="Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality, you’re in full control."
          order2="order-1"
          margin="right-[-140px] w-[800px] h-[800px]"
          imgName="illustration-editor-desktop.svg"
        />

        <Section2 />

        <Section1
          headingText="  Free, open, simple"
          para="Blogr is a free and open source application backed by a large community of helpful developers. It supports 
          features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
          and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
          order1="order-1"
          headingText2="Powerful tooling"
          para2="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
          capable of producing even the most complicated sites."
          order2="order-2"
          margin="left-[-440px] w-full h-[700px]  "
          imgName="illustration-laptop-desktop.svg"
        />

        <Footer />
      </div>
    </>
  );
}

export default App;
