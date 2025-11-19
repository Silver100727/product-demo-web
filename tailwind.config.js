module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#33445E',
          50: '#E8EBF0',
          100: '#D1D7E1',
          200: '#A3AFC3',
          300: '#7587A5',
          400: '#475F87',
          500: '#33445E',
          600: '#29364B',
          700: '#1F2838',
          800: '#151B26',
          900: '#0B0D13',
        },
        accent: {
          DEFAULT: '#0AAE5F',
          50: '#E6F9F1',
          100: '#CCF3E3',
          200: '#99E7C7',
          300: '#66DBAB',
          400: '#33CF8F',
          500: '#0AAE5F',
          600: '#088B4C',
          700: '#066839',
          800: '#044526',
          900: '#022313',
        },
      },
      width: {
        "1/10": "10%",
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(51, 68, 94, 0.1), 0 2px 4px -1px rgba(51, 68, 94, 0.06)',
        'card-hover': '0 10px 25px -5px rgba(51, 68, 94, 0.15), 0 8px 10px -6px rgba(51, 68, 94, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  // ...other config options
};
