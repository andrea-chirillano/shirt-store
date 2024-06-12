# Usa una imagen base con Node.js preinstalado
FROM node:21.7.2

# Establece la versión de npm que deseas utilizar
RUN npm install -g npm@10.5.0

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos al contenedor
COPY . .

# Exponer el puerto en el que la aplicación va a ejecutarse
EXPOSE 4200

# Comando para iniciar la aplicación
CMD ["npm", "start"]
