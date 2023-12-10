FROM openjdk:17-oracle
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} canteenservice.jar
ENTRYPOINT [ "java", "-jar", "canteenservice.jar" ]
EXPOSE 8084