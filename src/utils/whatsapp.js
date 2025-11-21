/**
 * WhatsApp Integration Utility
 * Opens WhatsApp with pre-filled message
 */

// WhatsApp number for Navara Trip
const DEFAULT_PHONE = '6281113556799';

/**
 * Opens WhatsApp chat with a pre-filled message
 * @param {string} message - The message to send
 * @param {string} phoneNumber - WhatsApp number (default: Navara Trip)
 */
export const openWhatsApp = (message, phoneNumber = DEFAULT_PHONE) => {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * Create booking message for charter service
 */
export const createCharterBookingMessage = (data) => {
  const { pickup, destination, date, unit } = data;
  
  return `🚌 *BOOKING BUS CHARTER*

📍 Jemput: ${pickup || 'Belum dipilih'}
🎯 Tujuan: ${destination || 'Belum dipilih'}
📅 Tanggal: ${date || 'Belum dipilih'}
🚐 Unit: ${unit || 'Belum dipilih'}

Mohon informasi harga dan ketersediaan. Terima kasih!`;
};

/**
 * Create message for tour package inquiry
 */
export const createTourInquiryMessage = () => {
  return `🎒 *PAKET TOUR WISATA*

Halo Navara Trip! Saya tertarik dengan paket tour wisata.

Mohon informasi lengkap mengenai:
- Destinasi yang tersedia
- Harga paket
- Itinerary perjalanan
- Hotel & konsumsi

Terima kasih!`;
};

/**
 * Create message for fleet/unit booking
 */
export const createFleetBookingMessage = (unitName, capacity) => {
  return `🚌 *BOOKING ARMADA*

Unit: ${unitName}
Kapasitas: ${capacity}

Mohon informasi harga sewa dan ketersediaan unit ini. Terima kasih!`;
};

/**
 * Create message for destination inquiry
 */
export const createDestinationInquiryMessage = (destinationName, destinationType) => {
  return `🗺️ *INQUIRY DESTINASI*

Destinasi: ${destinationName}
Tipe: ${destinationType}

Saya tertarik untuk trip ke ${destinationName}. Mohon informasi paket dan harga. Terima kasih!`;
};

/**
 * Create general inquiry message
 */
export const createGeneralInquiryMessage = () => {
  return `👋 Halo Navara Trip!

Saya ingin mendapatkan informasi lebih lanjut tentang layanan sewa bus dan paket wisata Anda.

Terima kasih!`;
};

/**
 * Create pricelist request message
 */
export const createPricelistRequestMessage = () => {
  return `📋 *REQUEST PRICELIST*

Halo Navara Trip! Saya ingin mendapatkan pricelist terbaru untuk:
- Sewa bus (Big Bus & Hiace)
- Paket wisata
- Corporate gathering

Mohon dikirimkan pricelist dalam format PDF. Terima kasih!`;
};
