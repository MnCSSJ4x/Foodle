FROM openjdk:17-oracle
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} service-discovery.jar
ENTRYPOINT [ "java", "-jar", "service-discovery.jar" ]
EXPOSE 8761