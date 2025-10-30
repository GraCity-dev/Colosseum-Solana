import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";

// 🪙 Conexión a la red Testnet de Solana
export const connection = new Connection(clusterApiUrl("testnet"), "confirmed");

// 🧱 ID del programa (Smart Contract) desplegado
// ⚠️ Cuando hagas `anchor deploy`, reemplaza el ID de ejemplo por el tuyo real.
export const PROGRAM_ID = new PublicKey("H6GYm5iXdT5sA3mhnr8fnGugSxJ3c96mPFpPcDjQJU6m");
