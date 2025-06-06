interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  textColorGradiant?: [number,number,number];
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
  textColorGradiant = [255, 255, 255],
}) => {
  const animationDuration = `${speed}s`;

  return (
    <>
      <div
        className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}
        style={{ animationDuration }}
      >
        {text}
      </div>
      <style jsx>
        {`
          .shiny-text {
            
            background: linear-gradient(
              120deg,
              rgba(${textColorGradiant[0]}, ${textColorGradiant[1]}, ${textColorGradiant[2]}, 0) 40%,
              rgba(${textColorGradiant[0]}, ${textColorGradiant[1]}, ${textColorGradiant[2]}, 0.8) 50%,
              rgba(${textColorGradiant[0]}, ${textColorGradiant[1]}, ${textColorGradiant[2]}, 0) 60%
            );
            background-size: 200% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            display: inline-block;
            animation: shine 5s linear infinite;
          }

          @keyframes shine {
            0% {
              background-position: 100%;
            }
            100% {
              background-position: -100%;
            }
          }

          .shiny-text.disabled {
            animation: none;
          }
        `}
      </style>
    </>
  );
};

export default ShinyText;
