.PHONY: help
help:  ## Show this help.
	@egrep '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-22s\033[0m %s\n", $$1, $$2}'

.PHONY: install
install:  ## Install dependencies.
	npm install

.PHONY: lint
lint:  ## Lint code.
	npm run lint

.PHONY: audit
audit:  ## Audit and fix NPM vulnerabilities.
	npm audit fix

.PHONY: test
test:  ## Run tests.
	npm run test

.PHONY: build
build:  ## Build code for distribution.
	npm run build
