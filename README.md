# Next Fullstack Starter Template

Un template base para **Next.js + TypeScript + Prisma + NextAuth + TailwindCSS**, listo para desarrollo de MVPs y proyectos fullstack.

Incluye:
- Next.js 14+ con TypeScript
- TailwindCSS configurado
- Prisma ORM con Postgres (o SQLite en desarrollo)
- NextAuth para autenticación de usuarios
- ESLint + Prettier + plugin de Tailwind para mantener buenas prácticas y consistencia
- Ejemplo de rewrites en `next.config.ts`

---

## 📦 Requisitos

- Node.js >= 18
- pnpm (recomendado)
- PostgreSQL (opcional para producción; SQLite para desarrollo rápido)

---

## ⚡️ Instalación rápida

```bash
# Clonar el template
git clone https://github.com/tu-usuario/next-fullstack-starter.git
cd next-fullstack-starter

# Instalar dependencias
pnpm install

# Crear archivo .env
cp .env.example .env
# Edita las variables según tu entorno
🗂 Variables de entorno
env
Copiar código
DATABASE_URL="postgresql://usuario:password@localhost:5432/mi_db"
NEXTAUTH_SECRET="una_clave_secreta_segura"
NEXTAUTH_URL="http://localhost:3000"
Para desarrollo rápido puedes usar SQLite cambiando DATABASE_URL="file:./dev.db" en .env.

🛠 Prisma
Genera el cliente y crea la base de datos:

bash
Copiar código
# Generar cliente Prisma
pnpm prisma generate

# Crear migraciones y tablas
pnpm prisma migrate dev --name init

# (Opcional) Sembrar datos de ejemplo
pnpm prisma db seed
🔐 NextAuth
Configurado con adapter Prisma.

Tablas: User, Account, Session, VerificationRequest.

Listo para OAuth o autenticación por email.

🎨 TailwindCSS
Configuración base lista (tailwind.config.js).

Plugin ESLint para reordenar clases automáticamente.

Compatible con @apply y todas las utilidades de Tailwind.

🧹 ESLint + Prettier
Formato y linting automáticos al guardar en VSCode.

Reglas configuradas para:

Next.js + TypeScript

React y React Hooks

TailwindCSS (clases ordenadas)

🔀 Rutas amigables (Rewrites)
Ejemplo en next.config.ts:

ts
Copiar código
async rewrites() {
  return [
    { source: "/login", destination: "/auth/login" },
    { source: "/register", destination: "/auth/register" },
    { source: "/chat", destination: "/chat" },
    { source: "/onboarding", destination: "/onboarding" },
  ];
}
🚀 Ejecutar proyecto
bash
Copiar código
pnpm dev
Abre http://localhost:3000 para ver tu proyecto.

📂 Estructura recomendada
csharp
Copiar código
├─ .vscode/          # Configuración de VSCode
├─ prisma/           # Schema, migraciones y seeds
├─ pages/            # Páginas de Next.js
│   ├─ auth/         # Login, register
│   ├─ chat/         # Chat
│   └─ onboarding/   # Onboarding
├─ components/       # Componentes React
├─ lib/              # Helpers, utils, imágenes
└─ public/           # Archivos estáticos
📌 Notas finales
Carpeta vacía → agrega .gitkeep si quieres que se mantenga al clonar.

Para producción, usa PostgreSQL; para desarrollo rápido, SQLite funciona bien.

Puedes añadir nuevas tablas en prisma/schema.prisma y ejecutar pnpm prisma migrate dev.

¡Listo para clonar y comenzar tu MVP fullstack!

yaml
Copiar código

---

Si quieres, puedo también hacer la **versión `.env.example` y un seed.ts` listo** para que cualquiera pueda probar usuarios y exámenes de ejemplo al instante.

¿Quieres que haga eso?
