# 🧱 NawahCoins SDK

Official SDK for Nawah Token WebSocket-based interaction and decentralized identity.

---

## ⚙️ Features

- Connect to Nawah WebSocket API  
- Anonymous and authenticated access  
- Easy integration with Angular and TypeScript projects  
- Support for real-time decentralized identity management  

---

## 📦 Installation

```bash
npm install nawahcoins

Usage Example
import { NawahService } from 'nawahcoins';

const nawah = new NawahService();

nawah.init({
  api: 'ws://localhost:8081/ws',
  anonToken: '__ANON_TOKEN_f00000000000000000000012',
  authAttrs: ['email'],
  appId: 'APP_ID',
});

API Documentation NawahService 

Service to interact with Nawah WebSocket API for decentralized identity.

🔧 init(options: InitOptions): void 

Initialize the connection to the Nawah server.

OptionTypeDescriptionapistringWebSocket API URLanonTokenstringAnonymous access tokenauthAttrsstring[]List of authentication attributesappIdstringApplication ID

Example

nawah.init({
  api: 'ws://localhost:8081/ws',
  anonToken: '__ANON_TOKEN_f00000000000000000000012',
  authAttrs: ['email'],
  appId: 'APP_ID',
});

📡 call(method: string, params?: any): Promise<any> 

Call server API methods dynamically.

ParameterTypeDescriptionmethodstringAPI method nameparamsanyOptional method params

Example:

nawah.call('getUserProfile', { userId: '12345' })
  .then(profile => console.log('User Profile:', profile));

Events (Observables) 

EventDescriptioninited$Fires when initialization completesauthed$Fires when authentication succeedserror$Fires when an error occurs

Example:
nawah.inited$.subscribe(() => console.log('Connection initialized'));
nawah.authed$.subscribe(user => console.log('User authenticated:', user));
nawah.error$.subscribe(err => console.error('Error:', err));

Project Structure
nawah-core/
├── contracts/               # Solidity smart contracts
├── scripts/                 # Deployment & interaction scripts
├── test/                    # Smart contract tests
├── services/                # Backend services and API workers
├── config/                  # Network configs and environment variables
├── .env                     # Environment secrets and keys
├── .gitignore               # Ignore files and folders
├── hardhat.config.js        # Hardhat setup
├── package.json             # Project dependencies and metadata
├── README.md                # This documentation
├── SECURITY.md              # Security guidelines
└── LICENSE                  # MIT License

Security 

This project follows industry-standard security practices:

Input validation and sanitization

Rate limiting

Secure API keys and token management

Optional Multi-Signature wallets and contract ownership audits



## إعداد ملف البيئة (.env)
1. انسخ الملف `.env.example` إلى `.env`:
   ```bash
   cp .env.example .env


🌍 About Nawah 

Nawah is a culturally inspired blockchain initiative focusing on inclusion, empowerment, and legacy through innovation.

Learn more at nawahtoken.org (link placeholder)

License


MIT License © Nawah Team








