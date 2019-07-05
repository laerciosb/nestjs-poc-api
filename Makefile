CURRENT_DIRECTORY := $(shell pwd)

DCMP = docker-compose
APP = notifications-api
TEST_CONFIG = ${DCMP} -f docker-compose.yml
DCMP_EXEC_APP = ${TEST_CONFIG} exec ${APP}
DCMP_RUN_APP = ${TEST_CONFIG} run ${APP}
DCMP_TEST = @[ "$(BUILD)" = "test" ] && ${TEST_CONFIG}

up:
	${DCMP_TEST} up || ${DCMP} up

down:
	${DCMP_TEST} down || ${DCMP} down

redis:
	docker-compose exec redisdb redis-cli
