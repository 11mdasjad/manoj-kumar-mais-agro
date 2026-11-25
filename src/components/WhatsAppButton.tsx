import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappUrl } from "@/lib/site";
export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Mais Agro House on WhatsApp"
    >
      <WhatsAppIcon size={25} />
      <span>Let’s talk</span>
    </a>
  );
}
