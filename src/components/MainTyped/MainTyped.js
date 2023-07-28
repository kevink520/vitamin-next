
import Typed from 'react-typed'

const strings1 = ['Vitamin']
const strings2 = [' Digital Media']
const strings3 = ['aims to build websites ']
const strings4 = ['and apps that are ']
const strings5 = [
  'better-looking,',
  'more enjoyable, and ',
  'more useful to people.'
]

const typeSpeed = 30
const startDelay2 = strings1[0].length * typeSpeed + 300
const startDelay3 = startDelay2 + strings2[0].length * typeSpeed + 300
const startDelay4 = startDelay3 + strings3[0].length * typeSpeed + 300
const startDelay5 = startDelay4 + strings4[0].length * typeSpeed + 300

export default function MainTyped ({ dark }) {
  let typed2
  let typed3
  let typed4
  let typed5

  return (
    <div className={`inline text-2xl leading-normal ${dark ? 'text-brand-white' : 'text-brand-dark-gray'}`}>
      <div itemProp='name'>
        <p className='mb-3'>
          <span className='inline text-4xl leading-normal lg:text-2xl lg:leading-normal xl:text-4xl xl:leading-normal'>
            <span className={`${dark ? 'text-brand-white' : 'text-brand-orange'}`}>
              <Typed
                className='typed show-cursor'
                strings={strings1}
                typeSpeed={typeSpeed}
                onComplete={self => {
                  self.el.parentElement.classList.remove('show-cursor')
                  typed2.el.parentElement.classList.add('show-cursor')
                }}
              />
            </span>
            <Typed
              className='typed'
              strings={strings2}
              typedRef={typed => { typed2 = typed }}
              typeSpeed={typeSpeed}
              startDelay={startDelay2}
              onComplete={self => {
                self.el.parentElement.classList.remove('show-cursor')
                typed3.el.parentElement.classList.add('show-cursor')
              }}
            />
          </span>
          <br />
          <Typed
            className='typed'
            strings={strings3}
            typedRef={typed => { typed3 = typed }}
            typeSpeed={typeSpeed}
            startDelay={startDelay3}
            onComplete={self => {
              self.el.parentElement.classList.remove('show-cursor')
              typed4.el.parentElement.classList.add('show-cursor')
            }}
          />
          <br />
          <Typed
            className='typed'
            strings={strings4}
            typedRef={typed => { typed4 = typed }}
            typeSpeed={typeSpeed}
            startDelay={startDelay4}
            onComplete={self => {
              self.el.parentElement.classList.remove('show-cursor')
              typed5.el.parentElement.classList.add('show-cursor')
            }}
          />
          <br />
          <Typed
            className='typed'
            strings={strings5.map(str => `^${Math.round(str.length * typeSpeed + 300)} ${str}`)}
            typedRef={typed => { typed5 = typed }}
            typeSpeed={typeSpeed}
            startDelay={startDelay5}
            backDelay={1000}
          />
        </p>
      </div>
    </div>
  )
}
