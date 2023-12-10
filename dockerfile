FROM openjdk:17-oracle
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} service-request.jar
ENTRYPOINT [ "java", "-jar", "service-request.jar" ]
EXPOSE 8083