# Use a JDK image
FROM eclipse-temurin:21-jdk-jammy

# Set working directory
WORKDIR /app

# Copy the built jar from target folder
COPY target/Jobportal-0.0.1-SNAPSHOT.jar app.jar

# Expose the port (Vercel will assign dynamically)
EXPOSE 8080

# Run the app
CMD ["java", "-jar", "app.jar"]
