// import { defineConfig } from 'vitest/config'

// export default defineConfig({
//   test: {
//     browser: {
//       enabled: true,
//       provider: 'playwright',
//       // https://vitest.dev/guide/browser/playwright
//       instances: [
//         { browser: 'chromium' },
//       ],
//     },
//   },
// })
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          // an example of file based convention,
          // you don't have to follow it
          include: [
            'src/*.{test,spec}.ts',
          ],
          name: 'unit',
          environment: 'node',
        },
      },
      // {
      //   test: {
      //     // an example of file based convention,
      //     // you don't have to follow it
      //     include: [
      //       'src/*.{test,spec}.browser.ts',
      //     ],
      //     name: 'browser',
      //     browser: {
      //       provider: 'playwright',
      //       headless: true,
      //       enabled: true,
      //       instances: [
      //         { browser: 'chromium' },
      //       ],
      //     },
      //   },
      // },
    ],
  },
})