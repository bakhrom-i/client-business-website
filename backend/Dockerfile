FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn -B dependency:go-offline
COPY src ./src
RUN mvn -B clean package -DskipTests

FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
# Spring Boot reads $PORT from env via application-prod.yml's ${PORT:8080}.
# Do not interpolate ${PORT} here — JSON-form ENTRYPOINT does not run a shell.
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
