import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: 'html',
  timeout: 60000,

  use: {
    trace: 'retain-on-failure',
    actionTimeout: 90000,
    navigationTimeout: 90000
  },

  projects: [
    // ── Step 1: Login & save session — runs FIRST ─────────────────
    {
      name: 'setup',
      testMatch: '**/auth.spec.ts',
    },

    // ── Step 2: Add Employee — depends on setup ───────────────────
    {
      name: 'add-employee',
      testMatch: '**/add-employee-flow.spec.ts',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'test-data/auth.json',
      },
      dependencies: ['setup'],
    },

    // ── Step 3: Assign Leave — depends on add-employee ────────────
    {
      name: 'assign-leave',
      testMatch: '**/assign-leave-flow.spec.ts',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'test-data/auth.json',
      },
      dependencies: ['setup'],
    },

    {
      name:'add-job-title',
      testMatch: '**/add-job-title-flow.spec.ts',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'test-data/auth.json',
      },
      dependencies: ['setup'],
    }
  ],
});