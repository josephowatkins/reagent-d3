build:
	lein trampoline run -m figwheel.main --build-once prod

dev-start:
	lein trampoline run -m figwheel.main --build dev --repl

.PHONY: build dev-start
