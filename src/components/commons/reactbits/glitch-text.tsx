import { FC, CSSProperties } from "react";
// import "../../../styles/glitch.css";

interface GlitchTextProps {
  children: string;
  speed?: number;
  enableShadows?: boolean;
  enableOnHover?: boolean;
  className?: string;
  colorAfter?: string;
  colorBefore?: string;
  colorDefaultText?:string
}

interface CustomCSSProperties extends CSSProperties {
  "--after-duration": string;
  "--before-duration": string;
  "--after-shadow": string;
  "--before-shadow": string;
}

const GlitchText: FC<GlitchTextProps> = ({
  children,
  speed = 0.5,
  enableShadows = true,
  enableOnHover = false,
  className = "",
  colorAfter = "red",
  colorBefore = "cyan",
  colorDefaultText = "#fff",
}) => {
  const inlineStyles: CustomCSSProperties = {
    "--after-duration": `${speed * 3}s`,
    "--before-duration": `${speed * 2}s`,
    "--after-shadow": enableShadows ? `-5px 0 ${colorAfter}` : "none",
    "--before-shadow": enableShadows ? `5px 0 ${colorBefore}` : "none",
  };

  const hoverClass = enableOnHover ? "enable-on-hover" : "";

  return (
    <>
      <div
        className={`glitch ${hoverClass} ${className}`}
        style={inlineStyles}
        data-text={children}
      >
        {children}
      </div>
      <style jsx>{`
        .glitch {
          white-space: nowrap;
          position: relative;
          margin: 0 auto;
          user-select: none;
        }
        .glitch::after,
        .glitch::before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          color: ${colorDefaultText};
          overflow: hidden;
          clip-path: inset(0 0 0 0);
        }
        .glitch::after {
          left: 10px;
          text-shadow: -10px 0 ${colorAfter};
          animation: animate-glitch 3s infinite linear alternate-reverse;
        }
        .glitch::before {
          left: -10px;
          text-shadow: 10px 0 ${colorBefore};
          animation: animate-glitch 2s infinite linear alternate-reverse;
        }
        @keyframes animate-glitch {
          0% {
            clip-path: inset(20% 0 50% 0);
          }
          10% {
            clip-path: inset(10% 0 60% 0);
          }
          20% {
            clip-path: inset(15% 0 55% 0);
          }
          30% {
            clip-path: inset(25% 0 35% 0);
          }
          40% {
            clip-path: inset(30% 0 40% 0);
          }
          50% {
            clip-path: inset(40% 0 20% 0);
          }
          60% {
            clip-path: inset(10% 0 60% 0);
          }
          70% {
            clip-path: inset(15% 0 55% 0);
          }
          80% {
            clip-path: inset(25% 0 35% 0);
          }
          90% {
            clip-path: inset(20% 0 50% 0);
          }
          100% {
            clip-path: inset(30% 0 40% 0);
          }
        }
      `}</style>
    </>
  );
};

export default GlitchText;
