# Utiliza la imagen oficial de Node.js como base
FROM node:18-alpine

# Crea el directorio de trabajo
WORKDIR /root/src

# Copia los archivos de configuración
COPY package.json package-lock.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del proyecto
COPY . .

# Expone el puerto que usa tu app
EXPOSE 8080

# Inicia la aplicación
CMD ["npm", "run", "serve"]