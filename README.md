# Retro-pong with k8s and aws

## Description

- [기존에 있던 프로젝트](https://github.com/Retro-pong/Transcendence)를 쿠버네티스 기반으로 전환하여 aws에 배포하는 프로젝트입니다.
- 전환하는 과정은 [docker-compose 기반 프로젝트를 k8s로 전환하여 aws 배포하기 시리즈](https://velog.io/@kdelphinus/series/%ED%8A%B8%EC%84%BC%EC%9D%84-%EC%BF%A0%EB%B2%84%EB%A1%9C-%EB%B0%94%EA%BE%B8%EA%B3%A0-elk-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0) 두 번째 글부터 정리하고 있습니다.


### local 환경

- docker-desktop 이 실행되고 있어야 합니다.
- docker-desktop 설정에서 kubernetes 설정을 활성화해야 합니다.

```shell
> make local
```

```shell
> kubectl get pods -n app
```

- 명령어를 실행해서 모든 pod의 상태가 `Running` 이면 정상적으로 배포된 것입니다.
- https://127.0.0.1:30443 으로 접속하면 됩니다.

### aws 배포

- aws 배포를 위해 vpc, eks, efs 서비스와 aws cli를 사용했습니다.
- `back-data` 의 경우, 두 개 이상의 컨테이너가 접근할 수 있어야 하기에 efs 서비스를 사용했습니다.
- 도메인을 구매하지 않기 위해 로드 밸런서의 url을 바로 사용했습니다.
- 현재 요금 문제로 서버는 내려가 있는 상태입니다.

