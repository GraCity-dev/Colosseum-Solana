import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"
import { motion } from "framer-motion" // ✨ animaciones suaves

// 🔗 Solana Wallet imports
import { useMemo } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter, SolflareWalletAdapter } from "@solana/wallet-adapter-wallets";
import "@solana/wallet-adapter-react-ui/styles.css";

function App() {
  // ✅ Conexión a la testnet de Solana
  const endpoint = "https://api.testnet.solana.com";

  // ✅ Adapters para Phantom y Solflare
  const wallets = useMemo(() => [new PhantomWalletAdapter(), new SolflareWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {/* 🌄 Hero principal */}
          <section
            style={{
              position: "relative",
              height: "100vh",
              backgroundImage: "url('/forest-bg.jpg')", // 🔄 cambia por tu imagen real
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "#fff",
              overflow: "hidden",
            }}
          >
            {/* 🌿 Título principal */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{
                fontSize: "3rem",
                fontWeight: "700",
                letterSpacing: "1px",
                marginBottom: "1.5rem",
                textShadow: "0 2px 10px rgba(0,0,0,0.4)",
              }}
            >
              🌿 GraCity DApp
            </motion.h1>

            {/* 💡 Subtítulo */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              style={{
                fontSize: "1.2rem",
                maxWidth: "600px",
                lineHeight: "1.6",
                marginBottom: "2.5rem",
                textShadow: "0 1px 8px rgba(0,0,0,0.3)",
              }}
            >
              Regenerative Impact powered by <strong>Solana Blockchain</strong>
            </motion.p>

            {/* ✨ Botón de conexión de wallet Solana */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <WalletMultiButton
                style={{
                  backgroundColor: "rgba(22,163,74,0.9)",
                  backdropFilter: "blur(6px)",
                  borderRadius: "12px",
                  fontWeight: "600",
                  padding: "0.75rem 1.5rem",
                  fontSize: "1rem",
                  color: "white",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                  textTransform: "none",
                  border: "none",
                  transition: "all 0.3s ease",
                }}
              >
                Connect Wallet
              </WalletMultiButton>
            </motion.div>

            {/* 🌫️ Sombra inferior */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: "150px",
                background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
              }}
            ></div>
          </section>

          {/* 💡 Contenido adicional */}
          <Pages />
          <Toaster />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
