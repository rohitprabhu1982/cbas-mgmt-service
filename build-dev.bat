call mvn -Dspring.profiles.active=dev -Pdev -B -Dmaven.test.skip=true -DskipTests clean package
call java -jar target\pipelineservice.jar
