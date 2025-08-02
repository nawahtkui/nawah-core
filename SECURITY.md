# 🛡️ Security Policy – Nawah Project

## 📅 Supported Versions

We actively maintain and support the following branches:

| Version | Supported | Notes              |
|---------|-----------|--------------------|
| main    | ✅ Yes     | Production branch  |
| dev     | ✅ Yes     | Development branch |

If you're using an older version, please consider upgrading.

---

## 📢 Reporting a Vulnerability

If you discover a security vulnerability **related to Nawah Token, smart contracts, vault systems, or the web interface**, please follow these steps:

1. **Do NOT open a public GitHub issue.**
2. Send a **detailed, private report** via email to:


(If this address is not yet active, please mention and we can generate a GitHub Discussions-based alternative.)

3. Include:
   - A clear description of the issue
   - Steps to reproduce the vulnerability
   - A suggested fix, if applicable

We will respond within **72 hours** and work with you to assess and resolve the issue.

---

## 🧾 Ownership and Smart Contracts

All core smart contracts are **open source** and available under the `contracts/` directory.

**Ownership status:**

| Contract                    | Address                                 | Ownership Renounced | Multisig Enabled |
|-----------------------------|-----------------------------------------|----------------------|------------------|
| NawahToken (BEP-20)         | `0x123...abc`                           | ✅ Yes               | ✅ Yes (Gnosis)  |
| StakingContract             | `0x456...def`                           | 🔜 Planned           | 🔜 Planned       |
| Vault System (Password App) | `-`                                     | N/A                  | User-encrypted   |

> 🔐 Note: All production contracts are scheduled to have `renounceOwnership()` or transfer to a multisig-controlled address.

---

## ✅ Security Best Practices (For Users)

To ensure the safety of your funds and personal data:

- Always verify you're on the correct domain: `https://nawahtoken.org`
- Use hardware wallets for large transactions
- Double-check contract addresses before signing
- Keep your recovery phrases secure and offline
- Enable 2FA on all connected services (GitHub, wallets)

---

## 🧰 Tools Used

- 🔍 **OpenZeppelin Defender** – contract monitoring
- 🔐 **Gnosis Safe** – multisig management
- 🛡️ **Dependabot** – security alerts for dependencies
- 🔑 **AES-256 encryption** – used in Password Vault
- 📦 **Hardhat** – testing environment

---

## 🧠 Credits

This project respects [Responsible Disclosure](https://en.wikipedia.org/wiki/Responsible_disclosure).  
Special thanks to community contributors and security researchers for keeping the Nawah ecosystem secure.
