// Simple manual test - just check if modules load
console.log("Testing module imports...\n");

try {
  console.log("1. Testing kiro-service...");
  const kiroService = await import("./services/kiro-service.js");
  console.log("   ✅ kiro-service loaded");

  console.log("\n2. Testing app-service...");
  const appService = await import("./services/app-service.js");
  console.log("   ✅ app-service loaded");

  console.log("\n3. Testing Kiro CLI...");
  const isAvailable = await kiroService.testKiroCLI();
  console.log(
    `   ${isAvailable ? "✅" : "⚠️ "} Kiro CLI ${
      isAvailable ? "available" : "not found"
    }`
  );

  console.log("\n4. Testing app configs...");
  const apps = await appService.getAllApps();
  console.log(
    `   ✅ Found ${apps.length} apps:`,
    apps.map((a) => a.name).join(", ")
  );

  console.log("\n5. Testing StudyBuddy config...");
  const studyBuddy = await appService.getAppConfig("study-buddy");
  console.log("   ✅ StudyBuddy config:", studyBuddy.name, studyBuddy.icon);

  console.log("\n6. Testing IdeaForge config...");
  const ideaForge = await appService.getAppConfig("idea-forge");
  console.log("   ✅ IdeaForge config:", ideaForge.name, ideaForge.icon);

  console.log("\n7. Testing chat execution (fallback)...");
  const response = await kiroService.executeKiroAgent({
    appType: "study-buddy",
    message: "Test message",
    conversationHistory: [],
  });
  console.log("   ✅ Got response:", response.content.substring(0, 50) + "...");
  console.log("   Source:", response.source);

  console.log("\n✅ All module tests passed!");
} catch (error) {
  console.error("\n❌ Test failed:", error.message);
  console.error(error);
}
