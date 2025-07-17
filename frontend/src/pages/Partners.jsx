import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import TopBar from '../components/TopBar/TopBar';
import { Users } from 'lucide-react';

const partners = [
  {
    name: 'TVEC',
    description: 'Tertiary and Vocational Education Commission - National body overseeing vocational training.',
    logo: '/images/partners/tvec.png',
    website: 'https://www.tvec.gov.lk'
  },
  {
    name: 'NAITA',
    description: 'National Apprentice & Industrial Training Authority - Providing training and certification.',
    logo: '/images/partners/naita.png',
    website: 'https://www.naita.gov.lk'
  },
  {
    name: 'ILO Sri Lanka',
    description: 'International Labour Organization supporting skills development in Sri Lanka.',
    logo: '/images/partners/ilo.png',
    website: 'https://www.ilo.org/colombo'
  },
  {
    name: 'Vocational Training Authority',
    description: 'VTA aims to provide training facilities across Sri Lanka, especially in rural areas.',
    logo: '/images/partners/vta.png',
    website: 'https://www.vtasl.gov.lk'
  }
  // ➕ Add more as needed
];

export default function Partners() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Navbar />

      {/* Header */}
      <div className="mt-[90px] bg-gradient-to-r from-red-700 to-red-900 text-white py-14 text-center">
        <h1 className="text-4xl font-extrabold mb-3 flex justify-center items-center gap-3">
          <Users /> Our Partners
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          We collaborate with national and international organizations to strengthen vocational skills development.
        </p>
      </div>

      {/* Partner Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 flex flex-col items-center text-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-24 h-24 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-red-700">{partner.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{partner.description}</p>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm text-blue-600 underline hover:text-blue-800"
              >
                Visit Website
              </a>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
