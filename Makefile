PROJECT_DIR := $(PWD)
NAMESPACE = app
FLAG = -f

.PHONY: local local_gocd aws create_namespacess clean_local clean_aws fclean_local fclean_aws

local: create_namespace
	kubectl apply $(FLAG) k8s/local/configMap.yaml
	sed "s|DIR|$(PROJECT_DIR)|g" k8s/local/persistentVolume.yaml | kubectl apply $(FLAG) -
	kubectl apply $(FLAG) k8s/local/deployment.yaml
	kubectl apply $(FLAG) k8s/local/service.yaml

local_gocd: create_namespace
	kubectl apply $(FLAG) k8s/local/configMap.yaml
	sed "s|DIR|$(PROJECT_DIR)/pipelines/retro-pong|g" k8s/local/persistentVolume.yaml | kubectl apply $(FLAG) -
	kubectl apply $(FLAG) k8s/local/deployment.yaml
	kubectl apply $(FLAG) k8s/local/service.yaml

aws: create_namespace
	kubectl apply $(FLAG) k8s/aws/configMap.yaml
	kubectl apply $(FLAG) k8s/aws/deployment.yaml
	kubectl apply $(FLAG) k8s/aws/service.yaml
	kubectl apply $(FLAG) k8s/aws/persistentVolume.yaml

create_namespace:
	@if ! kubectl get namespace $(NAMESPACE) > /dev/null 2>&1; then \
        	kubectl create namespace $(NAMESPACE); \
    	fi

clean_local:
	kubectl delete $(FLAG) k8s/local/configMap.yaml
	kubectl delete $(FLAG) k8s/local/deployment.yaml
	kubectl delete $(FLAG) k8s/local/service.yaml

clean_aws:
	kubectl delete $(FLAG) k8s/aws/.
	kubectl delete namespace $(NAMESPACE)

fclean_local: clean_local
	kubectl delete $(FLAG) k8s/local/persistentVolume.yaml
	kubectl delete namespace $(NAMESPACE)
	rm -rf data/media
	cp -r media data/
