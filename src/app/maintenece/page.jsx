// NEXT.JS MAINTENANCE PAGE
// File contains two ready-to-use snippets — pilih salah satu sesuai struktur project Next.js kamu.
// - App Router (Next.js 13+ with /app): simpan sebagai `app/maintenance/page.jsx`
// - Pages Router (Next.js <13 atau pakai /pages): simpan sebagai `pages/maintenance.js`
// Keduanya menggunakan Tailwind CSS (kamu sudah pakai Tailwind v4) — tinggal paste dan sesuaikan.

// VERSION PAGES ROUTER DENGAN useRouter (client) UNTUK ARAHKAN USER
// File: pages/maintenance.js

export default function maintenence() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <h1 className="text-3xl font-semibold">
                    Website ini sedang diperbaiki
                </h1>
                <p className="text-gray-500 mt-2">Akan kembali normal.</p>
            </div>
        </main>
    );
}
