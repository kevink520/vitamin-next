import Image from "next/image";

export default function Portfolio() {
  return (
    <div id="portfolio" className="container px-4 mx-auto portfolio">
      <h2 className="orange">Portfolio</h2>
      <p className="mb-3">
        (Many of the websites that I built from contract work for other web
        agencies are not included in this portfolio.)
      </p>
      <div className="md:flex -mx-4 my-8 p-row1">
        <div className="md:w-1/3 px-4 mb-4 md:mb-0">
          <div className="item item1" itemType="http://schema.org/WebPage">
            <a
              className="link-to-client-site"
              href="https://www.ckocoaching.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/ckocoaching-p.jpg"
                alt="CKO Coaching & Consulting"
                width={750}
                height={428}
              />
              <div className="description">
                <h4 itemProp="name">CKO Coaching & Consulting</h4>
                <p className="hidden-sm">
                  Custom Next.js website design and development with partially automated content updates
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="md:w-1/3 px-4 mb-4 md:mb-0">
          <div className="item item1" itemType="http://schema.org/WebPage">
          <a
              className="link-to-client-site"
              href="https://www.newportlaworr.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/newportlaworr-p.jpg"
                alt="Thomas B. Orr, Attorney at Law"
                width={750}
                height={428}
              />
              <div className="description">
                <h4 itemProp="name">Thomas B. Orr, Attorney at Law</h4>
                <p className="hidden-sm">
                  Custom WordPress website design and development, with content
                  management for nontechnical admins
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="md:w-1/3 px-4 mb-4 md:mb-0">
          <div
            className="item item1"
            itemType="http://schema.org/WebPage"
          >
             <a
              className="link-to-client-site"
              href="https://www.janetogle.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/janetogle-p.jpg"
                alt="Janet Ogle"
                width={750}
                height={428}
              />
              <div className="description">
                <h4 itemProp="name">Janet Ogle</h4>
                <p className="hidden-sm">
                  Custom WordPress website design and development, with content
                  management for nontechnical admins
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="md:flex -mx-4 my-8 p-row2">
        <div className="md:w-1/3 px-4 mb-4 md:mb-0">
          <div className="item item4" itemType="http://schema.org/WebPage">
            <a
              className="link-to-client-site"
              href="https://www.bridge22.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/bridge22-p.jpg"
                alt="Bridge22"
                width={750}
                height={428}
              />
              <div className="description">
                <h4 itemProp="name">Bridge22</h4>
                <p className="hidden-sm">
                  Custom WordPress website design and development (based on
                  Material Kit), with content management for nontechnical admins
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="md:w-1/3 px-4 mb-4 md:mb-0">
          <div className="item item4" itemType="http://schema.org/WebPage">
            <a
              className="link-to-client-site"
              href="https://www.therooseveltdoctor.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/therooseveltdoctor-p.jpg"
                alt="The Roosevelt Doctor"
                width={750}
                height={428}
              />
              <div className="description">
                <h4 itemProp="name">The Roosevelt Doctor</h4>
                <p className="hidden-sm">
                  WordPress premium theme customization, child theme
                  design/development, and custom survey plugin development
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="md:w-1/3 px-4 mb-4 md:mb-0">
          <div className="item item4" itemType="http://schema.org/WebPage">
            <a
              className="link-to-client-site"
              href="https://miltoncleaners.nyc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/miltoncleaners-p.jpg"
                alt="Milton Cleaners"
                width={750}
                height={428}
              />
              <div className="description">
                <h4 itemProp="name">Milton Cleaners</h4>
                <p className="hidden-sm">
                  WordPress premium theme customization and child theme
                  design/development
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="md:flex -mx-4 my-8 p-row3">
        <div className="md:w-1/3 px-4 mb-4 md:mb-0">
          <div className="item item7" itemType="http://schema.org/WebPage">
            <a
              className="link-to-client-site"
              href="https://nextwitter.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/nextwitter-p.jpg"
                alt="nextwitter"
                width={750}
                height={428}
              />
              <div className="description">
                <h4 itemProp="name">nextwitter</h4>
                <p className="hidden-sm">A Twitter-inspired social app made with Next.js</p>
              </div>
            </a>
          </div>
        </div>
        <div className="md:w-1/3 px-4 mb-4 md:mb-0">
          <div className="item item7" itemType="http://schema.org/WebPage">
            <a
              className="link-to-client-site"
              href="https://codepen.io/kevink520/full/VPxzVq/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/javascript-calculator-p.jpg"
                alt="Javascript Calculator"
                width={750}
                height={428}
              />
              <div className="description">
                <h4 itemProp="name">Javascript Calculator</h4>
                <p className="hidden-sm">
                  A calculator app made with JavaScript (ES2015)
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="md:w-1/3 px-4 mb-4 md:mb-0">
          <div className="item item7" itemType="http://schema.org/WebPage">
            <a
              className="link-to-client-site"
              href="https://codepen.io/kevink520/full/OjeGjy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/tic-tac-toe-p.jpg"
                alt="Tic Tac Toe"
                width={750}
                height={428}
              />
              <div className="description">
                <h4 itemProp="name">Tic Tac Toe</h4>
                <p className="hidden-sm">
                  Tic Tac Toe game app made with React
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
