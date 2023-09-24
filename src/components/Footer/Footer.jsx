import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='mt-auto '>
      <footer className='flex flex-row items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between'>
        <p className='block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased'>
          © 2023 Material Tailwind
        </p>
        <ul className='flex flex-wrap items-center gap-y-2 gap-x-8'>
          <li>
            <Link className='block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500'>
              About Us
            </Link>
          </li>
          <li>
            <Link className='block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500'>
              License
            </Link>
          </li>

          <li>
            <Link className='block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500'>
              Contribute
            </Link>
          </li>
          <li>
            <Link className='block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500'>
              Contact Us
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
