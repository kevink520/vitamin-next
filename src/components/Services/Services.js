import CopywritingSVG from 'src/svg/CopywritingSVG';
import EmailDesignSVG from 'src/svg/EmailDesignSVG';
import LayoutSVG from 'src/svg/LayoutSVG';
import WPDevelopSVG from 'src/svg/WPDevelopSVG';
import EcommerceSVG from 'src/svg/EcommerceSVG';
import HostingSVG from 'src/svg/HostingSVG';

export default function Services() {
  return (
    <div id="services" className="full-width pale-orange-bg">
      <div className="container services px-4 mx-auto">
        <h2 className="orange">Services</h2>
        <div className="lg:flex -mx-4">
          <div className="lg:w-1/2 px-4 service copywriting" itemProp="makesOffer" itemScope itemType="http://schema.org/Offer">
            <div className="md:flex -mx-4">
              <div className="md:w-1/2 px-4 mb-4 md:mb-0 service-header">
                <h3 className="service-title">Copywriting</h3>
                <CopywritingSVG />
              </div>
              <div className="flex flex-col justify-center md:w-1/2 px-4">
                <p className="service-description">I try to figure out the most valuable things that a business has to offer. And I try to present those things to the world in a way that is both authentic and appealing.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 px-4 service design-front-end">
            <div className="md:flex -mx-4">
              <div className="md:w-1/2 px-4 mb-4 md:mb-0 service-header">
                <h3 className="service-title">HTML email design and development</h3>
                <EmailDesignSVG />
              </div>
              <div className="flex flex-col justify-center md:w-1/2 px-4">
                <p className="service-description">A custom HTML email can grab your customers&rsquo; attention and delight them. I can craft an attractive HTML email.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex -mx-4">
          <div className="lg:w-1/2 px-4 service design-front-end">
            <div className="md:flex -mx-4">
              <div className="md:w-1/2 px-4 mb-4 md:mb-0 service-header">
                <h3 className="service-title">Design and front-end development</h3>
                <LayoutSVG />
              </div>
              <div className="flex flex-col justify-center md:w-1/2 px-4">
                <p className="service-description">I regularly scour the web, libraries, and bookstores to keep up with the latest trends and best practices in web design and development. I have honed my CSS/JavaScript skills to a level where I can turn any design into an animated, responsive (mobile-friendly) web page.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 px-4 service wp-theme" itemProp="makesOffer" itemScope itemType="http://schema.org/Offer">
            <div className="md:flex -mx-4">
              <div className="md:w-1/2 px-4 mb-4 md:mb-0 service-header">
                <h3 className="service-title">WP website development</h3>
                <WPDevelopSVG />
              </div>
              <div className="flex flex-col justify-center md:w-1/2 px-4">
                <p className="service-description">WordPress is the world&rsquo;s most popular content management system (CMS),used by major brands including The New York Times and Sony Music.  I can turn any design into a fully editable, responsive website using WordPress.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex -mx-4">
          <div className="lg:w-1/2 px-4 service wp-theme" itemProp="makesOffer" itemScope itemType="http://schema.org/Offer">
            <div className="md:flex -mx-4">
              <div className="md:w-1/2 px-4 mb-4 md:mb-0 service-header">
                <h3 className="service-title">Ecommerce site development</h3>
                <EcommerceSVG />
              </div>
              <div className="flex flex-col justify-center md:w-1/2 px-4">
                <p className="service-description">WooCommerce is the world&rsquo;s most popular ecommerce platform. I can turn any design into an ecommerce store powered by WooCommerce.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 px-4 service hosting-maintenance">
            <div className="md:flex -mx-4">
              <div className="md:w-1/2 px-4 mb-4 md:mb-0 service-header">
                <h3 className="service-title">Hosting and maintenance</h3>
                <HostingSVG />
              </div>
              <div className="flex flex-col justify-center md:w-1/2 px-4">
                <p className="service-description">Vitamin Digital Media offers cloud virtual private server hosting that includes solid state drives (SSD) for faster loading times and SSL/TLS for added security. The hosting/maintenance package includes regular backups and software updates as well as minor content update services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
