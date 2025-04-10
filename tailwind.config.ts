import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add Poppins using the CSS variable defined in layout.tsx
        sans: ['var(--font-poppins)', 'sans-serif'], 
      },
      letterSpacing: {
        // Add custom negative tracking/kerning
        'tightest': '-.075em',
        'tighter': '-.05em', // Default tighter
        'tight': '-.025em', // Default tight
        'normal': '0',
        'wide': '.025em',
        'wider': '.05em',
        'widest': '.1em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config; 