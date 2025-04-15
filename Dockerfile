# Stage de développement
FROM node:18-alpine AS development

WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste du code source
COPY . .

# Exposition du port
EXPOSE 3000

# Commande par défaut pour le développement
CMD ["npm", "run", "dev"]

# Stage de build
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY --from=development /app/node_modules ./node_modules
COPY . .

# Build de l'application
RUN npm run build

# Stage de production
FROM node:18-alpine AS production

WORKDIR /app

# Copie des fichiers nécessaires depuis le stage de build
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Exposition du port
EXPOSE 3000

# Variables d'environnement pour la production
ENV NODE_ENV=production
ENV PORT=3000

# Commande pour démarrer l'application
CMD ["node", "server.js"] 