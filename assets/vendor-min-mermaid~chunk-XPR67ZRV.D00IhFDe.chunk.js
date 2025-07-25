var r = {
    name: "mermaid",
    version: "11.9.0",
    description: "Markdown-ish syntax for generating flowcharts, mindmaps, sequence diagrams, class diagrams, gantt charts, git graphs and more.",
    type: "module",
    module: "./dist/mermaid.core.mjs",
    types: "./dist/mermaid.d.ts",
    exports: {
        ".": {
            types: "./dist/mermaid.d.ts",
            import: "./dist/mermaid.core.mjs",
            default: "./dist/mermaid.core.mjs"
        },
        "./*": "./*"
    },
    keywords: [
        "diagram",
        "markdown",
        "flowchart",
        "sequence diagram",
        "gantt",
        "class diagram",
        "git graph",
        "mindmap",
        "packet diagram",
        "c4 diagram",
        "er diagram",
        "pie chart",
        "pie diagram",
        "quadrant chart",
        "requirement diagram",
        "graph"
    ],
    scripts: {
        clean: "rimraf dist",
        dev: "pnpm -w dev",
        "docs:code": "typedoc src/defaultConfig.ts src/config.ts src/mermaid.ts && prettier --write ./src/docs/config/setup",
        "docs:build": "rimraf ../../docs && pnpm docs:code && pnpm docs:spellcheck && tsx scripts/docs.cli.mts",
        "docs:verify": "pnpm docs:code && pnpm docs:spellcheck && tsx scripts/docs.cli.mts --verify",
        "docs:pre:vitepress": "pnpm --filter ./src/docs prefetch && rimraf src/vitepress && pnpm docs:code && tsx scripts/docs.cli.mts --vitepress && pnpm --filter ./src/vitepress install --no-frozen-lockfile --ignore-scripts",
        "docs:build:vitepress": "pnpm docs:pre:vitepress && (cd src/vitepress && pnpm run build) && cpy --flat src/docs/landing/ ./src/vitepress/.vitepress/dist/landing",
        "docs:dev": 'pnpm docs:pre:vitepress && concurrently "pnpm --filter ./src/vitepress dev" "tsx scripts/docs.cli.mts --watch --vitepress"',
        "docs:dev:docker": 'pnpm docs:pre:vitepress && concurrently "pnpm --filter ./src/vitepress dev:docker" "tsx scripts/docs.cli.mts --watch --vitepress"',
        "docs:serve": "pnpm docs:build:vitepress && vitepress serve src/vitepress",
        "docs:spellcheck": 'cspell "src/docs/**/*.md"',
        "docs:release-version": "tsx scripts/update-release-version.mts",
        "docs:verify-version": "tsx scripts/update-release-version.mts --verify",
        "types:build-config": "tsx scripts/create-types-from-json-schema.mts",
        "types:verify-config": "tsx scripts/create-types-from-json-schema.mts --verify",
        checkCircle: "npx madge --circular ./src",
        prepublishOnly: "pnpm docs:verify-version"
    },
    repository: {
        type: "git",
        url: "https://github.com/mermaid-js/mermaid"
    },
    author: "Knut Sveidqvist",
    license: "MIT",
    standard: {
        ignore: [
            "**/parser/*.js",
            "dist/**/*.js",
            "cypress/**/*.js"
        ],
        globals: [
            "page"
        ]
    },
    dependencies: {
        "@braintree/sanitize-url": "^7.0.4",
        "@iconify/utils": "^2.1.33",
        "@mermaid-js/parser": "workspace:^",
        "@types/d3": "^7.4.3",
        cytoscape: "^3.29.3",
        "cytoscape-cose-bilkent": "^4.1.0",
        "cytoscape-fcose": "^2.2.0",
        d3: "^7.9.0",
        "d3-sankey": "^0.12.3",
        "dagre-d3-es": "7.0.11",
        dayjs: "^1.11.13",
        dompurify: "^3.2.5",
        katex: "^0.16.22",
        khroma: "^2.1.0",
        "lodash-es": "^4.17.21",
        marked: "^16.0.0",
        roughjs: "^4.6.6",
        stylis: "^4.3.6",
        "ts-dedent": "^2.2.0",
        uuid: "^11.1.0"
    },
    devDependencies: {
        "@adobe/jsonschema2md": "^8.0.2",
        "@iconify/types": "^2.0.0",
        "@types/cytoscape": "^3.21.9",
        "@types/cytoscape-fcose": "^2.2.4",
        "@types/d3-sankey": "^0.12.4",
        "@types/d3-scale": "^4.0.9",
        "@types/d3-scale-chromatic": "^3.1.0",
        "@types/d3-selection": "^3.0.11",
        "@types/d3-shape": "^3.1.7",
        "@types/jsdom": "^21.1.7",
        "@types/katex": "^0.16.7",
        "@types/lodash-es": "^4.17.12",
        "@types/micromatch": "^4.0.9",
        "@types/stylis": "^4.2.7",
        "@types/uuid": "^10.0.0",
        ajv: "^8.17.1",
        canvas: "^3.1.0",
        chokidar: "3.6.0",
        concurrently: "^9.1.2",
        "csstree-validator": "^4.0.1",
        globby: "^14.0.2",
        jison: "^0.4.18",
        "js-base64": "^3.7.7",
        jsdom: "^26.1.0",
        "json-schema-to-typescript": "^15.0.4",
        micromatch: "^4.0.8",
        "path-browserify": "^1.0.1",
        prettier: "^3.5.2",
        remark: "^15.0.1",
        "remark-frontmatter": "^5.0.0",
        "remark-gfm": "^4.0.1",
        rimraf: "^6.0.1",
        "start-server-and-test": "^2.0.10",
        "type-fest": "^4.35.0",
        typedoc: "^0.27.8",
        "typedoc-plugin-markdown": "^4.4.2",
        typescript: "~5.7.3",
        "unist-util-flatmap": "^1.0.0",
        "unist-util-visit": "^5.0.0",
        vitepress: "^1.0.2",
        "vitepress-plugin-search": "1.0.4-alpha.22"
    },
    files: [
        "dist/",
        "README.md"
    ],
    publishConfig: {
        access: "public"
    }
};
export { r };
