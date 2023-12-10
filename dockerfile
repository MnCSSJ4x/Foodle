FROM openjdk:17-oracle
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} mess-menu-service.jar
ENTRYPOINT [ "java", "-jar", "mess-menu-service.jar" ]
EXPOSE 8085