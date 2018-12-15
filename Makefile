build-docs:
	lein trampoline run -m figwheel.main --build-once prod
	rm -r docs
	mkdir docs
	cp -r resources/public/* docs
	cp target/public/cljs-out/prod-main.js docs
	sed -i '' 's/cljs-out\/dev-main.js/prod-main.js/' docs/index.html

dev-start:
	lein trampoline run -m figwheel.main --build dev --repl

.PHONY: build dev-start
