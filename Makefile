PROJECT_DIR := $(PWD)
NAMESPACE = app
FLAG = -n $(NAMESPACE) -f

.PHONY: local copy_dir re clean fclean

local: copy_dir create_namespace
	kubectl apply $(FLAG) k8s/configMap.yaml
	sed "s|DIR|$(PROJECT_DIR)|g" k8s/localPersistentVolume.yaml | kubectl apply -f -
	kubectl apply $(FLAG) k8s/persistentVolumeClaim.yaml
	kubectl apply $(FLAG) k8s/deployment.yaml
	kubectl apply $(FLAG) k8s/service.yaml

local_gocd: copy_dir create_namespace
	kubectl apply $(FLAG) k8s/configMap.yaml -n app
	sed "s|DIR|$(PROJECT_DIR)/pipelines/retro-pong|g" k8s/localPersistentVolume.yaml | kubectl apply -f -
	kubectl apply $(FLAG) k8s/persistentVolumeClaim.yaml
	kubectl apply $(FLAG) k8s/deployment.yaml
	kubectl apply $(FLAG) k8s/service.yaml

copy_dir:
	cp -r data tmp_data

create_namespace:
	@if ! kubectl get namespace $(NAMESPACE) > /dev/null 2>&1; then \
        	kubectl create namespace $(NAMESPACE); \
    	fi	

re:
	make clean
	make local

clean:
	kubectl delete $(FLAG) k8s/.
	kubectl delete namespace $(NAMESPACE)

fclean: clean
	rm -rf tmp_data
