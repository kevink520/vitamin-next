export default function Portfolio() {
  return (
    <div id="portfolio" className="container px-4 mx-auto portfolio">
      <h2 className="orange">Portfolio</h2>
      <p className="mb-3">(Many of the websites that I built from contract work for other web agencies are not included in this portfolio.)</p>
      <div className="md:flex -mx-4 my-8 p-row1">
        <div className="w-1/3 px-4">
          <div className="item item1" itemtype="http://schema.org/WebPage">
            <a className="link-to-client-site" href="https://www.newportlaworr.com" target="_blank" rel="noopener noreferrer">
              <img src="https://admin.digitalmedia.nyc/wp/wp-content/uploads/2015/08/newportlaworr-p.jpg" alt="Thomas B. Orr, Attorney at Law" />
              <div className="description">
                <h4 itemprop="name">Thomas B. Orr, Attorney at Law</h4>
                <p className="hidden-sm">Custom WordPress website design and development, with content management for nontechnical admins</p>
              </div>
            </a>
          </div>
        </div>
        <div className="w-1/3 px-4">
          <div className="item item1" itemtype="http://schema.org/WebPage">
            <a className="link-to-client-site" href="https://www.janetogle.com" target="_blank" rel="noopener noreferrer">
              <img src="https://admin.digitalmedia.nyc/wp/wp-content/uploads/2015/08/janetogle-p.jpg" alt="Janet Ogle" />
              <div className="description">
                <h4 itemprop="name">Janet Ogle</h4>
                <p className="hidden-sm">Custom WordPress website design and development, with content management for nontechnical admins</p>
              </div>
            </a>
          </div>
        </div>
        <div className="w-1/3 px-4">
          <div className="item item1" itemtype="http://schema.org/WebPage">
            <a className="link-to-client-site" href="https://www.bridge22.com" target="_blank" rel="noopener noreferrer">
              <img src="https://admin.digitalmedia.nyc/wp/wp-content/uploads/2016/12/bridge22-p.jpg" alt="Bridge22" />
              <div className="description">
                <h4 itemprop="name">Bridge22</h4>
                <p className="hidden-sm">Custom WordPress website design and development (based on Material Kit), with content management for nontechnical admins</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="md:flex -mx-4 my-8 p-row2">
        <div className="w-1/3 px-4">
          <div className="item item4" itemtype="http://schema.org/WebPage">
            <a className="link-to-client-site" href="https://shaareitikvah.org" target="_blank" rel="noopener noreferrer">
              <img src="https://admin.digitalmedia.nyc/wp/wp-content/uploads/2016/12/shaareitikvah-p.jpg" alt="Shaarei Tikvah" />
              <div className="description">
                <h4 itemprop="name">Shaarei Tikvah</h4>
                <p className="hidden-sm">Custom WordPress website design and development, with members-only area for logged-in users, content management for nontechnical admins, and ecommerce functionality.</p>
              </div>
            </a>
          </div>
        </div>
        <div className="w-1/3 px-4">
          <div className="item item4" itemtype="http://schema.org/WebPage">
            <a className="link-to-client-site" href="https://www.therooseveltdoctor.com" target="_blank" rel="noopener noreferrer">
              <img src="https://admin.digitalmedia.nyc/wp/wp-content/uploads/2015/08/therooseveltdoctor-p.jpg" alt="The Roosevelt Doctor" />
              <div className="description">
                <h4 itemprop="name">The Roosevelt Doctor</h4>
                <p className="hidden-sm">WordPress premium theme customization, child theme design/development, and custom survey plugin development</p>
              </div>
            </a>
          </div>
        </div>
        <div className="w-1/3 px-4">
          <div className="item item4" itemtype="http://schema.org/WebPage">
            <a className="link-to-client-site" href="https://miltoncleaners.nyc" target="_blank" rel="noopener noreferrer">
              <img src="https://admin.digitalmedia.nyc/wp/wp-content/uploads/2015/08/miltoncleaners-p.jpg" alt="Milton Cleaners" />
              <div className="description">
                <h4 itemprop="name">Milton Cleaners</h4>
                <p className="hidden-sm">WordPress premium theme customization and child theme design/development</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="md:flex -mx-4 my-8 p-row3">
        <div className="w-1/3 px-4">
          <div className="item item7" itemtype="http://schema.org/WebPage">
            <a className="link-to-client-site" href="https://codepen.io/kevink520/full/jGzbxJ/" target="_blank" rel="noopener noreferrer">
              <img src="https://admin.digitalmedia.nyc/wp/wp-content/uploads/2015/08/simon-game-app-p.jpg" alt="Simon® Game" />
              <div className="description">
                <h4 itemprop="name">Simon® Game</h4>
                <p className="hidden-sm">Simon® game app made with React</p>
              </div>
            </a>
          </div>
        </div>
        <div className="w-1/3 px-4">
          <div className="item item7" itemtype="http://schema.org/WebPage">
            <a className="link-to-client-site" href="https://codepen.io/kevink520/full/VPxzVq/" target="_blank" rel="noopener noreferrer">
              <img src="https://admin.digitalmedia.nyc/wp/wp-content/uploads/2015/08/javascript-calculator-p.jpg" alt="Javascript Calculator" />
              <div className="description">
                <h4 itemprop="name">Javascript Calculator</h4>
                <p className="hidden-sm">A calculator app made with JavaScript (ES2015)</p>
              </div>
            </a>
          </div>
        </div>
        <div className="w-1/3 px-4">
          <div className="item item7" itemtype="http://schema.org/WebPage">
            <a className="link-to-client-site" href="https://codepen.io/kevink520/full/OjeGjy/" target="_blank" rel="noopener noreferrer">
              <img src="https://admin.digitalmedia.nyc/wp/wp-content/uploads/2015/08/tic-tac-toe-p.jpg" alt="Tic Tac Toe" />
              <div className="description">
                <h4 itemprop="name">Tic Tac Toe</h4>
                <p className="hidden-sm">Tic Tac Toe game app made with React</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}