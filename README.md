# Brava Lab

Web professional multiidioma per a Brava Lab, creada amb Next.js, React i Tailwind CSS.

## Idiomes

La web té quatre versions:

- Català: `/ca`
- Castellà: `/es`
- Anglès: `/en`
- Francès: `/fr`

El contingut principal es pot editar a `lib/dictionaries.ts`.

## Marca visual

Els assets del logo són a:

- `public/brava-lab-logo.png`
- `public/brava-lab-mark.png`

La tipografia queda preparada per usar `Montaser Arabic` si està disponible al sistema o si més endavant s’afegeix com a font web. Els fallbacks actuals mantenen una estètica propera i professional.

## Contacte

L’email provisional és:

```txt
bravalabagency@gmail.com
```

Per canviar-lo, edita `contactEmail` a `lib/constants.ts`.

## Executar en local

Opció recomanada:

```bash
pnpm install
pnpm dev
```

També pots fer servir npm:

```bash
npm install
npm run dev
```

Després obre:

```txt
http://localhost:3000
```

La ruta inicial redirigeix automàticament a `/ca`.

## Preparar per producció

Amb pnpm:

```bash
pnpm build
pnpm start
```

Amb npm:

```bash
npm run build
npm run start
```

## Desplegar a Cloudflare Pages

1. Puja el projecte a GitHub.
2. Crea un projecte nou a Cloudflare Pages.
3. Connecta el repositori.
4. A la configuració de build posa:
   - Framework preset: `Next.js (Static HTML Export)`
   - Build command: `npx next build`
   - Build output directory: `out`
   - Root directory: deixa-ho buit si `package.json` i `app` estan a la primera pantalla del repositori.

## Estructura

```txt
app/
  [lang]/page.tsx
  globals.css
components/
  Header.tsx
  Hero.tsx
  Services.tsx
  ContactSection.tsx
lib/
  constants.ts
  dictionaries.ts
```

No s’han utilitzat imatges generades amb IA, testimonis, logos falsos ni clients inventats. Els blocs visuals són placeholders elegants preparats per substituir-se per fotos reals més endavant.
