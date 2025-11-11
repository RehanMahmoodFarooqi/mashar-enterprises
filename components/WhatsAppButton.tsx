import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  // Replace with the actual WhatsApp link, e.g., 'https://wa.me/923295416926'
  const whatsappLink = 'https://wa.me/923118278655';

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110 cursor-pointer">
          <FaWhatsapp size={32} />
        </div>
      </Link>
    </div>
  );
};

export default WhatsAppButton;
