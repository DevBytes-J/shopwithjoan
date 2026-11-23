export interface WhatsAppEnquiryParams {
  productName: string;
  price: number;
  size?: string;
  color?: string;
  productSlug?: string;
}

export function generateWhatsAppLink({
  productName,
  price,
  size,
  color,
  productSlug,
}: WhatsAppEnquiryParams): string {
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+2348000000000";
  // Strip non-numeric characters for wa.me format
  const sanitizedNumber = rawNumber.replace(/[^0-9]/g, "");

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shopwithjoan.com";
  const productUrl = productSlug ? `${siteUrl}/product/${productSlug}` : siteUrl;

  const formattedPrice = `₦${price.toLocaleString("en-NG")}`;

  const messageLines = [
    `Hi Joan! I would like to enquire about *${productName}* (${formattedPrice}).`,
  ];

  if (size) {
    messageLines.push(`• Size: ${size}`);
  }
  if (color) {
    messageLines.push(`• Colour: ${color}`);
  }

  messageLines.push(`Link: ${productUrl}`);
  messageLines.push(`Is this available for delivery?`);

  const encodedMessage = encodeURIComponent(messageLines.join("\n"));
  return `https://wa.me/${sanitizedNumber}?text=${encodedMessage}`;
}
