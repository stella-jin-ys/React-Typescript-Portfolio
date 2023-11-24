import contact from "../assets/contact.jpeg";

export default function Contact() {
  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${contact})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover ",
      }}
    >
      Contact
    </div>
  );
}
