FROM jenkins/jenkins:lts

USER root

# Install Docker CLI (Linux version)
RUN apt-get update && \
    apt-get install -y docker.io && \
    apt-get clean

USER jenkins
