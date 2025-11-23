/**
 * KiroCore - Root Hook Configuration
 *
 * Hooks allow automatic agent execution when events occur in the IDE.
 * This file defines hooks for the KiroCore project.
 */

export const hooks = {
  /**
   * Hook: Auto-format on save
   * Trigger: When any TypeScript/JavaScript file is saved
   * Action: Format code and fix linting issues
   */
  autoFormat: {
    name: "Auto-format on save",
    trigger: "onSave",
    filePattern: "**/*.{ts,tsx,js,jsx}",
    action: "format",
    description: "Automatically formats code when you save files",
    enabled: true,
  },

  /**
   * Hook: Update component exports
   * Trigger: When a new component is created in core/components/
   * Action: Add export to index.ts
   */
  updateComponentExports: {
    name: "Update component exports",
    trigger: "onCreate",
    filePattern: "core/components/*.tsx",
    action: "updateExports",
    description: "Automatically exports new components from index.ts",
    enabled: true,
    prompt: `
      A new component was created at {filePath}.
      Please add an export statement to core/components/index.ts
      following the existing pattern.
    `,
  },

  /**
   * Hook: Validate agent config
   * Trigger: When agent.config.ts is modified
   * Action: Validate config structure and required fields
   */
  validateAgentConfig: {
    name: "Validate agent config",
    trigger: "onSave",
    filePattern: "apps/*/agent.config.ts",
    action: "validate",
    description: "Validates agent config files for required fields",
    enabled: true,
    prompt: `
      Validate the agent config at {filePath}.
      Ensure it has:
      - name (string)
      - icon (emoji string)
      - description (string)
      - welcomeMessage (string)
      - systemPrompt (string)
      - theme object with primaryColor and accentColor
      
      If anything is missing, show a warning.
    `,
  },

  /**
   * Hook: Run tests on component change
   * Trigger: When a component file is saved
   * Action: Run related tests
   */
  runComponentTests: {
    name: "Run tests on component change",
    trigger: "onSave",
    filePattern: "core/components/*.tsx",
    action: "runTests",
    description: "Runs tests for modified components",
    enabled: false, // Disabled by default, enable when tests are set up
    prompt: `
      Component {fileName} was modified.
      Run tests for this component if they exist.
    `,
  },

  /**
   * Hook: Check build on commit
   * Trigger: Before git commit
   * Action: Verify build succeeds
   */
  checkBuildBeforeCommit: {
    name: "Check build before commit",
    trigger: "preCommit",
    action: "build",
    description: "Ensures the project builds successfully before committing",
    enabled: false, // Enable when ready for strict checks
    prompt: `
      Run 'npm run build' to verify the project builds successfully.
      If build fails, prevent the commit and show errors.
    `,
  },

  /**
   * Hook: Generate component documentation
   * Trigger: When a new component is created
   * Action: Generate JSDoc comments
   */
  generateComponentDocs: {
    name: "Generate component documentation",
    trigger: "onCreate",
    filePattern: "core/components/*.tsx",
    action: "document",
    description: "Generates JSDoc comments for new components",
    enabled: false, // Enable if you want auto-documentation
    prompt: `
      A new component was created at {filePath}.
      Add JSDoc comments describing:
      - Component purpose
      - Props interface
      - Usage example
    `,
  },

  /**
   * Hook: Sync agent configs to backend
   * Trigger: When agent config is saved
   * Action: Update backend config cache
   */
  syncAgentConfigs: {
    name: "Sync agent configs",
    trigger: "onSave",
    filePattern: "apps/*/agent.config.{ts,js}",
    action: "sync",
    description: "Syncs agent configs to backend when modified",
    enabled: true, // Backend is set up!
    prompt: `
      Agent config at {filePath} was updated.
      The backend will automatically reload this config on next request.
      No restart needed - configs are loaded dynamically!
    `,
  },

  /**
   * Hook: Test backend on save
   * Trigger: When backend files are modified
   * Action: Run backend tests
   */
  testBackendOnSave: {
    name: "Test backend on save",
    trigger: "onSave",
    filePattern: "server/**/*.js",
    action: "test",
    description: "Runs backend tests when server files change",
    enabled: true,
    prompt: `
      Backend file {fileName} was modified.
      Run: node server/test-simple.js
      to verify everything still works.
    `,
  },
};

/**
 * Hook Usage Examples:
 *
 * 1. Enable a hook:
 *    - Set enabled: true in the hook configuration
 *    - Kiro will automatically run the hook when triggered
 *
 * 2. Create a custom hook:
 *    - Add a new hook object to this file
 *    - Define trigger, filePattern, and action
 *    - Write a prompt describing what to do
 *
 * 3. Test a hook:
 *    - Trigger the event (e.g., save a file)
 *    - Check Kiro's output panel for hook execution
 *
 * 4. Disable a hook:
 *    - Set enabled: false
 *    - Hook will not run until re-enabled
 */

export default hooks;
