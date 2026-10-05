"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <style jsx>{`
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes floatUp {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 10px rgba(184, 144, 90, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(184, 144, 90, 0.6);
          }
        }

        @keyframes colorShift {
          0% {
            color: #d4b896;
          }
          50% {
            color: #e8d4b8;
          }
          100% {
            color: #d4b896;
          }
        }

        @keyframes rainbowGlow {
          0% {
            text-shadow: 0 0 10px rgba(184, 144, 90, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(74, 93, 67, 0.7), 0 0 30px rgba(184, 144, 90, 0.5);
          }
          100% {
            text-shadow: 0 0 10px rgba(184, 144, 90, 0.5);
          }
        }

        @keyframes gradientShift {
          0% {
            background: linear-gradient(90deg, #d4b896 0%, #b8905a 50%, #d4b896 100%);
          }
          50% {
            background: linear-gradient(90deg, #e8d4b8 0%, #d4b896 50%, #e8d4b8 100%);
          }
          100% {
            background: linear-gradient(90deg, #d4b896 0%, #b8905a 50%, #d4b896 100%);
          }
        }

        @keyframes colorBreathe {
          0%, 100% {
            color: #a39c8f;
            opacity: 0.8;
          }
          50% {
            color: #d4b896;
            opacity: 1;
          }
        }

        @keyframes borderGlow {
          0%, 100% {
            border-bottom-color: rgba(184, 144, 90, 0.2);
            box-shadow: 0 0 0 rgba(184, 144, 90, 0);
          }
          50% {
            border-bottom-color: rgba(184, 144, 90, 0.5);
            box-shadow: 0 2px 10px rgba(184, 144, 90, 0.3);
          }
        }

        @keyframes textGradientShift {
          0%, 100% {
            background: linear-gradient(90deg, #d4b896, #b8905a);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          50% {
            background: linear-gradient(90deg, #e8d4b8, #d4b896);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        }

        footer {
          background: linear-gradient(180deg,
            rgba(10, 10, 11, 0.5) 0%,
            rgba(17, 17, 19, 0.8) 100%);
          backdrop-filter: blur(8px);
          animation: slideUpFade 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .footer-link {
          position: relative;
          font-family: 'Times New Roman', Times, serif;
          font-size: 14px;
          color: #a39c8f;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: inline-block;
          padding-bottom: 4px;
          animation: slideInLeft 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) backwards, colorBreathe 4s ease-in-out infinite 2s;
        }

        .footer-section:nth-child(1) .footer-link:nth-child(1) { animation-delay: 0.15s; }
        .footer-section:nth-child(1) .footer-link:nth-child(2) { animation-delay: 0.2s; }
        .footer-section:nth-child(2) .footer-link:nth-child(1) { animation-delay: 0.2s; }
        .footer-section:nth-child(2) .footer-link:nth-child(2) { animation-delay: 0.25s; }
        .footer-section:nth-child(2) .footer-link:nth-child(3) { animation-delay: 0.3s; }
        .footer-section:nth-child(2) .footer-link:nth-child(4) { animation-delay: 0.35s; }
        .footer-section:nth-child(3) .footer-link:nth-child(1) { animation-delay: 0.25s; }
        .footer-section:nth-child(3) .footer-link:nth-child(2) { animation-delay: 0.3s; }
        .footer-section:nth-child(3) .footer-link:nth-child(3) { animation-delay: 0.35s; }
        .footer-section:nth-child(4) .footer-link:nth-child(1) { animation-delay: 0.3s; }
        .footer-section:nth-child(4) .footer-link:nth-child(2) { animation-delay: 0.35s; }
        .footer-section:nth-child(4) .footer-link:nth-child(3) { animation-delay: 0.4s; }

        .footer-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #b8905a, #4a5d43, #d4b896);
          background-size: 200% 100%;
          transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), background-position 0.4s ease;
          box-shadow: 0 0 8px rgba(184, 144, 90, 0.4);
          border-radius: 2px;
        }

        .footer-link:hover {
          color: #e8d4b8;
          transform: translateX(4px);
          text-shadow: 0 0 15px rgba(184, 144, 90, 0.6);
        }

        .footer-link:hover::after {
          width: 100%;
          box-shadow: 0 0 20px rgba(184, 144, 90, 0.9), 0 0 30px rgba(74, 93, 67, 0.5);
          animation: colorShift 3s ease-in-out infinite;
        }

        .footer-heading {
          font-family: 'Times New Roman', Times, serif;
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          background: linear-gradient(90deg, #d4b896, #b8905a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 16px;
          display: inline-block;
          animation: fadeInScale 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) backwards, textGradientShift 6s ease-in-out infinite 1.5s;
        }

        .footer-section:nth-child(1) .footer-heading { animation-delay: 0.1s; }
        .footer-section:nth-child(2) .footer-heading { animation-delay: 0.2s; }
        .footer-section:nth-child(3) .footer-heading { animation-delay: 0.3s; }
        .footer-section:nth-child(4) .footer-heading { animation-delay: 0.4s; }

        .footer-divider {
          height: 2px;
          background: linear-gradient(90deg,
            rgba(184, 144, 90, 0) 0%,
            rgba(184, 144, 90, 0.6) 50%,
            rgba(184, 144, 90, 0) 100%);
          margin: 24px 0;
          animation: slideInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s backwards, borderGlow 4s ease-in-out infinite 2s;
          box-shadow: 0 0 10px rgba(184, 144, 90, 0.3);
        }

        .footer-section {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          animation: slideUpFade 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) backwards;
        }

        .footer-section:nth-child(1) { animation-delay: 0.1s; }
        .footer-section:nth-child(2) { animation-delay: 0.2s; }
        .footer-section:nth-child(3) { animation-delay: 0.3s; }
        .footer-section:nth-child(4) { animation-delay: 0.4s; }

        .footer-section:hover {
          transform: translateY(-6px);
        }

        .footer-section:hover .footer-brand {
          filter: drop-shadow(0 0 20px rgba(184, 144, 90, 0.8));
          animation: rainbowGlow 2s ease-in-out infinite;
        }

        .footer-section:hover .footer-heading {
          filter: drop-shadow(0 0 15px rgba(184, 144, 90, 0.6));
          animation: textGradientShift 3s ease-in-out infinite;
        }

        .footer-section:hover .footer-description {
          filter: drop-shadow(0 0 10px rgba(184, 144, 90, 0.4));
          animation: colorBreathe 3s ease-in-out infinite;
        }

        .footer-brand {
          background: linear-gradient(135deg, #d4b896 0%, #b8905a 50%, #4a5d43 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          font-family: 'Times New Roman', Times, serif;
          animation: fadeInScale 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.08s backwards, rainbowGlow 5s ease-in-out infinite 2s;
          transition: all 0.4s ease;
        }

        .footer-brand:hover {
          transform: scale(1.05);
          animation: rainbowGlow 2s ease-in-out infinite;
        }

        .footer-description {
          color: #a39c8f;
          font-size: 14px;
          line-height: 1.8;
          margin-top: 12px;
          font-family: 'Times New Roman', Times, serif;
          font-weight: 400;
          animation: slideUpFade 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.12s backwards, colorBreathe 5s ease-in-out infinite 2.5s;
        }

        .footer-bottom {
          padding-top: 16px;
          border-top: 1px solid rgba(184, 144, 90, 0.2);
          text-align: center;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(163, 156, 143, 0.5);
          font-family: 'Times New Roman', Times, serif;
          transition: all 0.4s ease;
          animation: fadeInScale 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s backwards;
        }

        .footer-bottom:hover {
          color: rgba(184, 144, 90, 0.8);
          animation: glowPulse 2s ease-in-out infinite;
        }
      `}</style>

      <footer className="border-t border-[color:var(--line)] pt-[10vh] pb-[8vh] px-[7vw] relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green/5 rounded-full blur-3xl -z-10 opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-bronze/5 rounded-full blur-3xl -z-10 opacity-20" />

        <div className="max-w-[1560px] mx-auto">
          {/* Main Footer Grid */}
          <div className="grid md:grid-cols-4 gap-12 mb-[8vh]">
            {/* Brand Section */}
            <div className="footer-section">
              <div className="footer-brand">3S Landcraft</div>
              <p className="footer-description">
                A mountain retreat above the Kashedi Ghat, Sahyadri range, Maharashtra.
              </p>
              <div className="footer-divider" />
            </div>

            {/* Project Section */}
            <div className="footer-section">
              <h4 className="footer-heading">Project</h4>
              <nav className="space-y-4">
                <div>
                  <Link href="/#project" className="footer-link">
                    Overview
                  </Link>
                </div>
                <div>
                  <Link href="/#villas" className="footer-link">
                    Villas
                  </Link>
                </div>
                <div>
                  <Link href="/#amenities" className="footer-link">
                    Amenities
                  </Link>
                </div>
                <div>
                  <Link href="/#masterplan" className="footer-link">
                    Masterplan
                  </Link>
                </div>
              </nav>
            </div>

            {/* Company Section */}
            <div className="footer-section">
              <h4 className="footer-heading">Company</h4>
              <nav className="space-y-4">
                <div>
                  <Link href="/about" className="footer-link">
                    About Us
                  </Link>
                </div>
                <div>
                  <Link href="/progress" className="footer-link">
                    Progress
                  </Link>
                </div>
                <div>
                  <Link href="/contact" className="footer-link">
                    Contact
                  </Link>
                </div>
              </nav>
            </div>

            {/* Contact Section */}
            <div className="footer-section">
              <h4 className="footer-heading">Connect</h4>
              <nav className="space-y-4">
                <div>
                  <Link href="/contact" className="footer-link">
                    Enquire Now
                  </Link>
                </div>
                <div>
                  <a href="mailto:hello@3slandcraft.com" className="footer-link">
                    Email Us
                  </a>
                </div>
                <div>
                  <a href="tel:+919876543210" className="footer-link">
                    Call Us
                  </a>
                </div>
              </nav>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p>
              © {year} 3S Landcraft. Conceptual visualization — not final architectural or legal documentation.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
