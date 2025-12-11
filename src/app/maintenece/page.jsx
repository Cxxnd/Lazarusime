// NEXT.JS MAINTENANCE PAGE
// File contains two ready-to-use snippets — pilih salah satu sesuai struktur project Next.js kamu.
// - App Router (Next.js 13+ with /app): simpan sebagai `app/maintenance/page.jsx`
// - Pages Router (Next.js <13 atau pakai /pages): simpan sebagai `pages/maintenance.js`
// Keduanya menggunakan Tailwind CSS (kamu sudah pakai Tailwind v4) — tinggal paste dan sesuaikan.

// VERSION PAGES ROUTER DENGAN useRouter (client) UNTUK ARAHKAN USER
// File: pages/maintenance.js

export default function MaintenancePage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
            <div className="max-w-3xl w-full text-center bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
                    Website ini sedang diperbaiki
                </h1>
            </div>
        </main>
    );
}
