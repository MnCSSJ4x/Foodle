pipeline {
  agent any
  stages {
    stage('Deploy'){
            steps {
                ansiblePlaybook becomeUser: null, colorized: true, disableHostKeyChecking: true, installation: 'Ansible', inventory: 'inventory', playbook: 'ansible-playbook.yml', sudoUser: null
            }
        }
  }
}