import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaUserFriends } from 'react-icons/fa';
import Link from 'next/link';
import { Bounded } from './Bounded';
import Image from 'next/image';
import MysticalBackground from "./MysticalBackground";

export default function Footer() {
  return (
    <footer className="relative text-white">
      <Bounded className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-950 to-zinc-950">
        <MysticalBackground />
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          {/* About Us Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-brand-lime relative after:content-[''] after:block after:w-12 after:h-1 after:bg-brand-lime after:mt-2">
              About Us
            </h3>
            <p className="text-zinc-300 leading-relaxed">
              We are dedicated to providing exceptional services and solutions to our clients. With years of experience, we strive to deliver excellence in everything we do.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-brand-lime relative after:content-[''] after:block after:w-12 after:h-1 after:bg-brand-lime after:mt-2">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a href="mailto:jessicauppal15@gmail.com"
                 className="flex items-center gap-3 text-zinc-300 hover:text-brand-lime transition-colors duration-300">
                <span className="w-5">
                  <FaEnvelope className="text-lg" />
                </span>
                jessicauppal15@gmail.com
              </a>
              <a href="tel:8287181219"
                 className="flex items-center gap-3 text-zinc-300 hover:text-brand-lime transition-colors duration-300">
                <span className="w-5">
                  <FaPhone className="text-lg" />
                </span>
                8287181219
              </a>
              <div className="flex items-center gap-3 text-zinc-300">
                <span className="w-5">
                  <FaMapMarkerAlt className="text-lg" />
                </span>
                123 Business Street, City, Country
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-brand-lime relative after:content-[''] after:block after:w-12 after:h-1 after:bg-brand-lime after:mt-2">
              Connect With Us
            </h3>
            <div className="space-y-4">
              <div className="flex gap-6">
                <a href="https://instagram.com"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-zinc-300 hover:text-brand-lime transition-colors duration-300 text-3xl">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-zinc-300 hover:text-brand-lime transition-colors duration-300 text-3xl">
                  <FaLinkedin />
                </a>
              </div>
              <div className="text-zinc-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-5">
                    <FaClock className="text-lg" />
                  </span>
                  Mon - Fri: 9:00 AM - 6:00 PM
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5">
                    <FaUserFriends className="text-lg" />
                  </span>
                  Join our community
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800/50 text-center">
          <p className="text-zinc-400 text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
            <span className="mx-2">|</span>
            Built with ❤️
            <span className="mx-2">|</span>
            <Link href="/privacy-policy" className="hover:text-brand-lime transition-colors duration-300">Privacy Policy</Link>
          </p>
        </div>
      </Bounded>
    </footer>
  );
}
