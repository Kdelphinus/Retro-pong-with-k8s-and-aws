PROJECT_DIR := $(PWD)
NAMESPACE = app
FLAG = -n $(NAMESPACE) -f

.PHONY: local local_gocd aws copy_dir create_namespacess clean_local clean_aws fclean_local fclean_aws

local: copy_dir create_namespace
	kubectl apply $(FLAG) k8s/local/configMap.yaml
	sed "s|DIR|$(PROJECT_DIR)|g" k8s/local/persistentVolume.yaml | kubectl apply $(FLAG) -
	kubectl apply $(FLAG) k8s/local/deployment.yaml
	kubectl apply $(FLAG) k8s/local/service.yaml

local_gocd: copy_dir create_namespace
	kubectl apply $(FLAG) k8s/local/configMap.yaml -n app
	sed "s|DIR|$(PROJECT_DIR)/pipelines/retro-pong|g" k8s/local/persistentVolume.yaml | kubectl apply $(FLAG) -
	kubectl apply $(FLAG) k8s/local/deployment.yaml
	kubectl apply $(FLAG) k8s/local/service.yaml

aws: create_namespace
	kubectl apply $(FLAG) k8s/aws/configMap.yaml
	kubectl apply $(FLAG) k8s/aws/deployment.yaml
	kubectl apply $(FLAG) k8s/aws/service.yaml
	kubectl apply $(FLAG) k8s/aws/persistentVolume.yaml

copy_dir:
	cp -r data tmp_data

create_namespace:
	@if ! kubectl get namespace $(NAMESPACE) > /dev/null 2>&1; then \
        	kubectl create namespace $(NAMESPACE); \
    	fi

clean_local:
	kubectl delete $(FLAG) k8s/local/.
	kubectl delete namespace $(NAMESPACE)

clean_aws:
	kubectl delete $(FLAG) k8s/aws/.
	kubectl delete namespace $(NAMESPACE)

fclean_local: clean_local
	rm -rf tmp_data

fclean_aws: clean_aws
	rm -rf tmp_data