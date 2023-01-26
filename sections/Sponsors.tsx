import Sponsor from "../components/Sponsor";

const SponsorsSection = () => {
  return (
    <section id="sponsors">
      <h2>Sponsors</h2>
      <p className="pb-6">
        Interested in sponsoring? Take a look at our&nbsp;
        <a
          className="font-bold text-blue-light underline"
          href="https://alexluo.notion.site/prospectus-c5fd45bdebaf4957abeb5add12706d58"
        >
          prospectus
        </a>
        &nbsp;and email&nbsp;
        <a className="font-bold text-blue-light underline">
          sponsor@hackthenest.org
        </a>
        !
      </p>
      <div className="flex flex-col gap-6">
        {/* gold tier  */}
        <div className="grid gap-6" />
        {/* silver tier */}
        <div className="grid grid-cols-2 gap-6" />
        {/* bronze tier */}
        <div className="grid grid-cols-3 gap-6">
          <Sponsor
            src="/wolfram.png"
            alt="Wolfram bronze sponsorship"
            href="https://www.wolframalpha.com/"
            tier="bronze"
          />
          <Sponsor
            src="/janestreet.png"
            alt="Jane Street bronze sponsorship"
            href="https://www.janestreet.com/"
            tier="bronze"
          />
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
