# 🌿 GraCity Impact DApp

GraCity Impact DApp — an AI + blockchain platform transforming urban sustainability projects into transparent, investable impact assets.

Built for the **Colosseum Solana Hackathon** 🪙

---

## 🚀 Overview

GraCity bridges green infrastructure and Web3 by turning real-world sustainability projects into on-chain impact assets.

### Core Features
- 🌱 **Impact Heatmap** — visualize ESG and sustainability data in real time.
- 🪙 **Tokenized Investment** — fractionalized ownership in verified green projects.
- 🔗 **Blockchain Transparency** — all transactions recorded on Solana.
- 🤖 **AI & ESG Analytics** — measure and predict environmental impact.

---

## 🧱 Architecture

Frontend (React/Next.js)
     │
     ▼
Impact Intelligence API (Python/FastAPI)
     │
     ▼
Blockchain Abstraction Layer
     ├── Solana Adapter (Rust + Anchor)
     └── EVM Adapter (future)

GraCity is **chain-agnostic** — it can run on Solana, Polygon, or any EVM-compatible network via modular adapters.

---

## 🧩 Tech Stack

| Layer | Technology |
|--------|-------------|
| Frontend | React / Next.js / Mapbox GL |
| Backend | Node.js / FastAPI / PostgreSQL |
| Blockchain | Solana (Anchor Framework) |
| Data Layer | TimescaleDB + IPFS |
| AI / Analytics | Python (Pandas, TensorFlow) |

---

## 🧠 Smart Contract

**Deployed on:** Solana Devnet  
**Program ID:** _TBD after deployment_  
Once deployed, view it on the [Solana Explorer](https://explorer.solana.com/?cluster=devnet).

Example functions:
- `register_project()`
- `mint_impact_token()`
- `verify_impact_data()`

---

## ⚙️ Local Setup

```bash
# Clone the repository
git clone https://github.com/YOUR_USER/Colosseum-Solana.git
cd Colosseum-Solana/frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 📄 License
MIT License © 2025 GraCity.org

---

## 🌐 Learn More

| 🌿 Platform | 🔗 Link |
|-------------|---------|
| **GraCity DApp — with the new subtle “Connect Wallet” button 💫** | [app.gracity.org](https://app.gracity.org) |
| **Official Website** | [gracity.org](https://gracity.org) |
| **Development Preview (Netlify Build)** | [gracity.netlify.app](https://gracity.netlify.app) |

✨ *Explore the updated GraCity DApp — featuring an elegant hero section with a smooth background and a subtle, animated “Connect Wallet” button powered by Solana.*



---

---

## 🧩 Architecture Diagram

The system connects:

**Frontend (React/Vite)**  
⬇️  
**Smart Contract (Anchor on Solana Testnet)**  
⬇️  
**Wallet (Phantom / Solflare)**  
⬇️  
**ESG Data Source (IoT sensors & APIs – AirGradient, Plantae)**  

📊 *Diagram available at:* `/docs/architecture.png`

---

## 🧠 Team & Credits

👨‍💻 **Lead Developer:** Miguel Ángel Gumiel Urosa — CTO  
👩‍💼 **CEO:** Yajaira Thibisay Martínez Jaimes  
🔧 **IoT Strategy:** Ángel David García Barrio  

**Built with:** 🪙 Solana • ⚓ Anchor • ⚛️ React • ⚡ Vite • 🤖 AI • 🌱 IoT Integration

