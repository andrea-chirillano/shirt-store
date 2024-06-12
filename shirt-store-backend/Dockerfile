# Usar una imagen de Maven como base para construir la aplicación
FROM maven:3.8.1-openjdk-17-slim AS build

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo pom.xml y descargar las dependencias
COPY pom.xml .
RUN mvn dependency:go-offline

# Copiar el resto del código de la aplicación
COPY src ./src

# Construir la aplicación
RUN mvn package -DskipTests

# Usar una imagen de OpenJDK como base para correr la aplicación
FROM openjdk:17-slim

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar el jar generado
COPY --from=build /app/target/*.jar app.jar

# Exponer el puerto en el que la aplicación va a correr
EXPOSE 8080

# Comando para correr la aplicación
CMD ["java", "-jar", "app.jar"]
