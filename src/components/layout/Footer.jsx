import React from 'react';
import Logo from '../../assets/Images/Logo_primary.png'
import { Link} from 'react-router-dom';
import { CgFacebook, CgInstagram, CgMail, CgPhone, CgTwitter } from 'react-icons/cg';
import { ARTICLES,HOME ,EXPLORE,AUTHORS,STORIES, POEMS, LOGIN} from '../../App';
import { useAuth } from '../../hooks/auths';

const Footer = () => {

  const { user } = useAuth();

  const items = [
    { path: HOME, name: "Home" },
    { path: EXPLORE, name: "Explore" },
    { path: STORIES, name: "Stories" },
    { path: ARTICLES, name: "Articles" },
    { path: POEMS, name: "Poems" },
    { path: AUTHORS, name: "Authors" },
  ];

  if (!user) {
    items.push({ path: LOGIN, name: "Login" });
  }

  return (
    <footer className="bg-[#3f2d23] text-white p-7 lg:px-10 py-16 lg:py-20 xl:px-32">
      <div className="grid items-end gap-5 font-sans md:gap-10 lg:gap-32 opacity-90 md:grid-cols-3">
        <div className="py-5 space-y-5">
        <Link to='/'>
        <img onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} className='w-24 cursor-pointer' src={Logo} alt="" />
        </Link>
          <p className="text-white">
             ആശ്ചര്യപ്പെടാനൊന്നുമില്ല..!! എല്ലാം നിങ്ങളെ കുറിച്ചാണ്..!!💛🥀
          </p>
        </div>
        <div className='py-5'>
          <ul className="flex flex-col items-start justify-between h-full space-y-3">
            {items.map((item, index) => (
              <li
                key={index}
                className="font-normal text-sm md:text-base hover:text-[#e8e59f] text-[#fff] tracking-wider text-start uppercase transition-all duration-200 ease-in cursor-pointer"
              >
                <Link
                  to={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='py-5'>
          <h4 className="mb-5 text-lg font-semibold tracking-wide">Contact</h4>
          <ul className="space-y-2.5">
            <li className="flex items-center tracking-wider space-x-2.5">
              <span className="text-2xl">
                <CgPhone />
              </span>{' '}
              <span>+91 87143 98351 <br /> +91 83049 97342</span>
            </li>
            <li className="flex items-center tracking-wider space-x-2.5">
              <span className="text-2xl">
                <CgMail />
              </span>{' '}
              <span>maznaviofficial@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <h1 className="font-sans text-base font-thin text-center md:text-left">
          © 2023 Maznavi._ All Rights Reserved Privacy Policy
        </h1>
        <div className="flex space-x-8 hover:text-[#e8e59f] text-xl items-center mt-5 md:mt-0">
          <a href="#">
            <CgInstagram />
          </a>
          <a href="#">
            <CgFacebook />
          </a>
          <a href="#">
            <CgTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;