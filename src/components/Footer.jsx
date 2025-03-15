import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5 md:px-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Logo and Description */}
        <div>
          <div className='flex items-center gap-5'>

          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4 uppercase">runclub</h2>
          <img className='w-12 lg:w-16 lg:h-16  rounded-full' src={logo} alt="" />
          </div>
          <p className="text-gray-400">
            Seamlessly organize and participate in marathons with our all-in-one
            management platform. Stay on track and run towards your goals.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Useful Links</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/about" className="link link-hover text-gray-300 hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/latest" href="#events" className="link link-hover text-gray-300 hover:text-primary">
                Upcoming Events
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link link-hover text-gray-300 hover:text-primary">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/faq" href="#faq" className="link link-hover text-gray-300 hover:text-primary">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact and Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-gray-400">
            Email: <a href="mailto:info@marathonmanager.com" className="text-primary">info@marathonmanager.com</a>
          </p>
          <p className="text-gray-400">Phone: +123-456-7890</p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-primary hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.657-4.788 1.325 0 2.464.098 2.797.142v3.245h-1.919c-1.506 0-1.797.716-1.797 1.764v2.313h3.59l-.468 3.622h-3.122V24h6.126c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" className="text-primary hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.945 9.945 0 01-2.828.775 4.937 4.937 0 002.165-2.723 9.932 9.932 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.944 13.944 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.93 4.93 0 01-2.224.085 4.922 4.922 0 004.6 3.419 9.867 9.867 0 01-6.102 2.105c-.395 0-.779-.023-1.17-.068a13.945 13.945 0 007.548 2.212c9.142 0 14.307-7.72 14.307-14.426 0-.22-.005-.439-.015-.656A10.18 10.18 0 0024 4.557z" />
              </svg>
            </a>
            <a href="#" className="text-primary hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.342 3.608 1.317.975.975 1.255 2.242 1.317 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.342 2.633-1.317 3.608-.975.975-2.242 1.255-3.608 1.317-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.342-3.608-1.317-.975-.975-1.255-2.242-1.317-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.342-2.633 1.317-3.608.975-.975 2.242-1.255 3.608-1.317 1.265-.058 1.645-.07 4.849-.07zm0-2.163C8.741 0 8.332.015 7.052.072 5.768.129 4.812.308 3.989.989c-.822.681-1.51 1.474-2.074 2.074-.681.822-.86 1.778-.917 3.063C.015 8.332 0 8.741 0 12c0 3.259.015 3.668.072 4.948.057 1.285.236 2.241.917 3.063.681.822 1.474 1.51 2.074 2.074.822.681 1.778.86 3.063.917 1.28.057 1.689.072 4.948.072s3.668-.015 4.948-.072c1.285-.057 2.241-.236 3.063-.917.822-.681 1.51-1.474 2.074-2.074.681-.822.86-1.778.917-3.063.057-1.28.072-1.689.072-4.948s-.015-3.668-.072-4.948c-.057-1.285-.236-2.241-.917-3.063-.681-.822-1.474-1.51-2.074-2.074-.822-.681-1.778-.86-3.063-.917C15.668.015 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.124a3.962 3.962 0 110-7.924 3.962 3.962 0 010 7.924zm6.406-11.876a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-4 text-center">
        <p>© 2024 Marathon Manager. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
