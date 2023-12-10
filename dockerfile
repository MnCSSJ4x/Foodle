FROM openjdk:17-oracle
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} feedback.jar
ENTRYPOINT [ "java", "-jar", "feedback.jar" ]
EXPOSE 8082