PROJECT_DIR := $(PWD)

.PHONY: local copy_dir re clean fclean

local: copy_dir
	kubectl apply -f k8s/configMap.yaml
	sed "s|DIR|$(PROJECT_DIR)|g" k8s/localPersistentVolume.yaml | kubectl apply -f -
	kubectl apply -f k8s/persistentVolumeClaim.yaml
	kubectl apply -f k8s/deployment.yaml
	kubectl apply -f k8s/service.yaml

local_gocd: copy_dir
	kubectl apply -f k8s/configMap.yaml
	sed "s|DIR|$(PROJECT_DIR)/pipelines/retro-pong|g" k8s/localPersistentVolume.yaml | kubectl apply -f -
	kubectl apply -f k8s/persistentVolumeClaim.yaml
	kubectl apply -f k8s/deployment.yaml
	kubectl apply -f k8s/service.yaml

copy_dir:
	cp -r data tmp_data

re:
	make clean
	make local

clean:
	kubectl delete -f k8s/.

fclean: clean
	rm -rf tmp_data
