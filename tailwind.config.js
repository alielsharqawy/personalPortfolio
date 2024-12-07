module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Specify files to scan for Tailwind classes
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in",
        slideIn: "slideIn 1.5s ease-out",
        zoomIn: "zoomIn 1.5s ease-in-out",
        bounceIn: "bounceIn 1.2s ease-in-out",
        rotateIn: "rotateIn 2s ease-out",
        flipIn: "flipIn 1.5s ease-in-out",
        scaleIn: "scaleIn 1.5s ease-out",
        fadeInUp: "fadeInUp 2s ease-in-out",
        popIn: "popIn 1s ease-out", // New pop-in animation
        pulseGrow: "pulseGrow 1.5s ease-in-out infinite", // New pulsating effect
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        zoomIn: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        bounceIn: {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(0)" },
        },
        rotateIn: {
          "0%": { transform: "rotate(-180deg)", opacity: "0" },
          "100%": { transform: "rotate(0deg)", opacity: "1" },
        },
        flipIn: {
          "0%": { transform: "rotateY(90deg)", opacity: "0" },
          "100%": { transform: "rotateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        fadeInUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        popIn: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "80%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(1)" },
        },
        pulseGrow: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};
