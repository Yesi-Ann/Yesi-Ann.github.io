Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/jammy64" # Reemplaza con el nombre de la caja correcta
  config.vm.network "private_network", ip: "192.168.56.10"
  config.vm.provision "ansible_local" do |ansible|
    ansible.playbook = "ansible/playbook.yml"
  end
end
