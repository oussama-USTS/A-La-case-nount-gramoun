# Stage de développement
FROM node:18-alpine AS development

WORKDIR /app

# Installation des dépendances système nécessaires
RUN apk add --no-cache libc6-compat

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances avec un cache plus propre
RUN npm ci

# Copie du reste du code source
COPY . .

# Exposition du port
EXPOSE 3000

# Commande par défaut pour le développement
CMD ["npm", "run", "dev"]

# Stage de build
FROM node:18-alpine AS builder

WORKDIR /app

# Installation des dépendances système nécessaires
RUN apk add --no-cache libc6-compat

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances de production uniquement
RUN npm ci --only=production

# Copie du reste du code source
COPY . .

# Configuration de Next.js pour la production
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# Build de l'application
RUN npm run build

# Stage de production
FROM node:18-alpine AS production

WORKDIR /app

# Installation des dépendances système nécessaires
RUN apk add --no-cache libc6-compat

# Copie des fichiers nécessaires depuis le stage de build
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Configuration de Next.js pour la production
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
ENV PORT 3000

# Exposition du port
EXPOSE 3000

# Commande pour démarrer l'application
# Variables d'environnement pour la production
ENV NODE_ENV=production
ENV PORT=3000

# Commande pour démarrer l'application
CMD ["node", "server.js"] 