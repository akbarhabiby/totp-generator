# TOTP Generator

A fast, secure, and privacy-friendly Time-Based One-Time Password (TOTP) generator that works directly in your browser. Perfect for 2FA authentication without compromising your security.

## 🌟 Features

- **🔒 Privacy First**: No data storage - everything runs locally in your browser
- **⚡ Fast & Responsive**: Instant code generation with real-time countdown
- **📱 Mobile Friendly**: Optimized for all devices and screen sizes
- **🔗 URL Parameters**: Auto-populate and generate codes via URL query strings
- **📋 One-Click Copy**: Easy copy-to-clipboard functionality
- **⏱️ Real-Time Updates**: Live countdown timer with progress bar
- **🎨 Clean UI**: Modern, intuitive interface built with love

## 🚀 Demo

Visit the live demo: [https://totp.akbar.hk/](https://totp.akbar.hk/)

## 📖 Usage

### Basic Usage

1. Enter your TOTP secret key in the input field
2. Click "Generate TOTP" button
3. Your 6-digit code will appear with a countdown timer
4. Click the copy button to copy the code to clipboard

### URL Parameters

You can auto-populate the secret and generate codes directly via URL:

```
https://totp.akbar.hk/?secret=YOUR_SECRET_KEY
```

This will automatically:
- Fill in the secret field
- Generate the TOTP code
- Start the countdown timer

Perfect for bookmarks or quick access!

## 🔧 Technical Details

### Built With

- **Vanilla JavaScript** - No framework dependencies
- **OTPAuth** - Secure TOTP implementation
- **CryptoJS** - Cryptographic functions
- **Modern CSS** - Responsive design with CSS Grid/Flexbox

### Security

- **Client-side only** - Your secrets never leave your browser
- **No data storage** - Nothing is saved or transmitted
- **HTTPS ready** - Secure connection support
- **No tracking** - Complete privacy protection

### Browser Support

- Chrome/Chromium 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🛠️ Development

### Local Setup

1. Clone the repository:
```bash
git clone https://github.com/akbarhabiby/totp-generator.git
cd totp-generator
```

2. Serve the files using any local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

3. Open http://localhost:8000 in your browser

### File Structure

```
totp-generator/
├── index.html          # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css  # Styles
│   ├── js/
│   │   └── script.js   # Main JavaScript
│   └── favicon.ico     # Favicon
└── README.md           # This file
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines

- Keep the code simple and readable
- Maintain browser compatibility
- Ensure privacy and security standards
- Test on multiple devices and browsers
- Follow the existing code style

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [OTPAuth](https://github.com/hectorm/otpauth) - TOTP/HOTP library
- [CryptoJS](https://github.com/brix/crypto-js) - Cryptographic functions
- [Google Fonts](https://fonts.google.com/) - Inter font family

## 📧 Contact

Made with ❤️ by **akbarhabiby**

- GitHub: [@akbarhabiby](https://github.com/akbarhabiby)
- Website: [akbar.hk](https://akbar.hk)

---

⭐ **If you find this project helpful, please give it a star on GitHub!** ⭐