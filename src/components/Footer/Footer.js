export default function Footer () {
  return (
    <footer id='footer' className='w-full p-8 bg-gray-400'>
      <div className='container px-4 mx-auto'>
        <div className='text-sm'>
          &copy; {new Date().getFullYear()} Vitamin Digital Media LLC. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
