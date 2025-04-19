export default function About () {
  return (
    <div id='about' className='full-width gray-bg'>
      <div className='container px-4 mx-auto about'>
        <div className='lg:flex -mx-4'>
          <div className='lg:w-2/3 px-4 about-animated'>
            <h2 className='about-heading'>About <span className='orange'>Vitamin</span> Digital Media</h2>
            <h3 className='lead' itemProp='description'>Hi, I&rsquo;m Kevin, and I&rsquo;m a full stack developer with more than 10 years of experience. And here&rsquo;s my brief background.</h3>
            <p className='mb-3'>When I attended Stuyvesant High School in Manhattan, I received good grades in math. (I completed AP (BC) Calculus in my junior year and missed perfect score in math SAT by just one question.) But I wasn&rsquo;t into the robotics team like those who go on to become real engineers. I cared about other kids&rsquo; opinions of me. I liked to dress in nice clothes and downplayed school in front of peers.</p>
            <p className='mb-3'>Many years later, when I enrolled in a graduate professional writing program, a professor who worked at IBM came to the program and started web content development concentration suited for the digital economy. I loved the experience of building websites out of code, so I took all the courses on web design and development and made a habit of reading web programming books and practicing coding whenever I had time. After I graduated with a 4.0 GPA, I studied, freelanced, and contracted for the past{' '}{new Date().getFullYear() - 2012}{' '}years. I built numerous websites for small businesses and large nonprofits. Throughout my career, I worked with many talented designers who created beautiful designs that humbled me and taught me that a product, however well engineered, is worthless if no one loves it and uses it. And I met some 10x engineers who humbled me and taught me that elegance isn&rsquo;t just about how things look. I learned from these designers and developers to become a full stack developer with an eye for design.</p>
            <div className='social-buttons flex'>
              <a className='social-button' href='https://codepen.io/kevink520/' target='_blank' rel='noopener noreferrer' aria-label='(open in new tab) CodePen'>
                <svg aria-hidden='true' focusable='false' data-prefix='fab' data-icon='codepen' className='w-6 h-6 text-2xl' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                  <path fill='currentColor' d='M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z' />
                </svg>
              </a>
              <a className='social-button' href='https://github.com/kevink520' target='_blank' rel='noopener noreferrer' aria-label='(open in new tab) GitHub'>
                <svg aria-hidden='true' focusable='false' data-prefix='fab' data-icon='github' className='w-6 h-6 text-2xl' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'><path fill='currentColor' d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' /></svg>
              </a>
              <a className='social-button' href='https://www.freecodecamp.org/kevink520' target='_blank' rel='noopener noreferrer' aria-label='(open in new tab) freeCodeCamp'>
                <span className='fab fa-free-code-camp text-2xl leading-none' />
              </a>
            </div>
          </div>
          <div className='lg:w-1/3 px-4 info-sidebar capabilities'>
            <h4 className='my-3 text-xl'>
              <span className='orange'>Vitamin</span> Digital Media&rsquo;s Capabilities
            </h4>
            <ul>
              <li><span>HTML5/<br />CSS3/<br />Sass</span></li>
              <li><span>JavaScript/<br />React/<br />React Native</span></li>
              <li><span>Next.js<br />WPGraphQL<br />Sanity.io</span></li>
              <li><span>Node.js/<br />Express.js<br />MongoDB</span></li>
              <li><span>Greensock Animation Platform</span></li>
              <li><span>Firebase<br />Supabase</span></li>
              <li><span>PHP/<br />MySQL</span></li>
              <li><span>Tailwind CSS<br />Bootstrap</span></li>
              <li><span>WordPress/<br />WooCommerce</span></li>
              <li><span>Photoshop/<br />Design</span></li>
              <li><span>Copywriting/<br />Copyediting</span></li>
              <li><span>Search Engine Optimization</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
