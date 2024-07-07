import "../styles/ws.css";

export function WhatsAppBtn() {
  return (
    <a
      className="ws-btn fixed z-50 lg:bottom-8 lg:right-8 transition-all hover:scale-110 "
      href="https://wa.me/+34643498478"
    >
      <img
        className="w-20"
        src="http://runmydev.com/wp-content/uploads/2024/07/WhatsApp-img.png"
        alt="número de contacto de WhatsApp de Richard Suarez"
      />
    </a>
  );
}
