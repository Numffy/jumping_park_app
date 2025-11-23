# Integración Firebase (backend)

Archivos creados:

- `src/lib/firebaseAdmin.ts` — Inicialización de Firebase Admin SDK (server).
- `src/lib/firestoreService.ts` — Helpers genéricos para Firestore (create/get/update/delete).
- `src/types/firestore.ts` — Interfaces TypeScript para colecciones.
- `src/app/api/*/route.ts` — Endpoints GET/POST para cada colección: `usuarios`, `menores`, `consentimientos`, `servicios`, `facturas`, `ventas`, `otp`, `accesos`.
- `firebase/firestore.rules` — Plantilla de reglas Firestore.
- `firebase/storage.rules` — Plantilla de reglas Storage.

Instalación de dependencias (usa `pnpm` si tu proyecto usa pnpm):

```powershell
pnpm add firebase-admin
```

Variables de entorno (agrega a `.env.local` en la raíz):

```
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-client-email@your-project.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_STORAGE_BUCKET=your-project.appspot.com
```

Notas importantes:
- No comites secretos (cliente/clave privada) al repositorio. Usa secretos en Vercel, Railway o GitHub Actions.
- Estas rutas API están implementadas como server handlers (Next.js App Router). Usar Firebase Admin en server-only.
- Para subida de archivos: la API actual deja espacio para usar `bucket` exportado desde `src/lib/firebaseAdmin.ts`. Implementaré flujos de upload/firmas cuando lo solicites.

Siguientes pasos sugeridos:
- Implementar validaciones y esquemas (zod/yup) por endpoint.
- Añadir autenticación (Firebase Auth) y verificar `request.headers`/session en endpoints.
- Implementar endpoints para subida a Storage (firmas, PDF) con signed URLs.
