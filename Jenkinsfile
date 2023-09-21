pipeline {
   agent {
    docker {
        image 'jenkins/inbound-agent:latest'
        args '-v /var/run/docker.sock:/var/run/docker.sock'
    }
}


    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm start'  // Use 'npm start' to run the React app
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
        }
    }
}
