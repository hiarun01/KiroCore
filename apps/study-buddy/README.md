# 📚 StudyBuddy - AI Study Companion

**Application 1 of 2 in the KiroCore Platform**

## Overview

StudyBuddy is an AI-powered educational tutor that helps students learn effectively by breaking down complex topics into digestible pieces. This application demonstrates the KiroCore skeleton's ability to create specialized AI agents through configuration.

## Application Details

- **Name:** StudyBuddy
- **Icon:** 📚
- **Category:** Education / Learning
- **Personality:** Patient, encouraging, educational tutor
- **Theme:** Blue (#3b82f6)

## Features

- **Concept Explanations** - Breaks down complex topics step-by-step
- **Problem Solving** - Guides students through problems without giving direct answers
- **Study Strategies** - Provides effective learning techniques
- **Exam Preparation** - Helps students prepare for tests
- **Homework Guidance** - Assists with understanding assignments

## Agent Configuration

This application is configured through:

### `agent.config.js`

Defines the agent's personality, appearance, and behavior:

```javascript
{
  name: "StudyBuddy",
  icon: "📚",
  systemPrompt: "You are an expert educational AI tutor...",
  welcomeMessage: "Welcome! How can I help you learn?",
  theme: { primary: "#3b82f6" }
}
```

### `.kiro/steering.md`

Provides detailed guidelines for the AI agent:

- Teaching principles (break down complexity, use analogies)
- Communication style (friendly, encouraging, patient)
- Response structure (acknowledge, explain, example, follow-up)
- Topics to focus on (academic subjects, study techniques)

## How It Works

1. **User accesses** `/study-buddy` route
2. **Backend loads** `apps/study-buddy/agent.config.js`
3. **Kiro reads** `apps/study-buddy/.kiro/steering.md`
4. **Agent responds** with educational tutor personality
5. **UI applies** StudyBuddy theme and branding

## Running StudyBuddy

### From Main Application

```bash
# Start the KiroCore platform
npm run dev

# Access StudyBuddy
# Navigate to: http://localhost:3000/study-buddy
```

### API Endpoint

```bash
# Send message to StudyBuddy
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "appType": "study-buddy",
    "message": "Explain photosynthesis",
    "conversationHistory": []
  }'
```

## Example Interactions

### Example 1: Concept Explanation

**User:** "What is photosynthesis?"

**StudyBuddy:** "Great question! Let me break down photosynthesis for you. Think of it like a plant's kitchen where it makes its own food using sunlight as energy..."

### Example 2: Problem Solving

**User:** "I don't understand how to solve quadratic equations"

**StudyBuddy:** "No problem! Let's start with the basics. A quadratic equation looks like ax² + bx + c = 0. Let me guide you through the steps..."

### Example 3: Study Strategy

**User:** "How should I prepare for my history exam?"

**StudyBuddy:** "I can help you create an effective study plan! First, let's break down the material into manageable chunks..."

## Customization

To modify StudyBuddy's behavior:

1. **Change personality:** Edit `agent.config.js` → `systemPrompt`
2. **Update guidelines:** Edit `.kiro/steering.md`
3. **Change theme:** Edit `agent.config.js` → `theme`
4. **Add features:** Edit `agent.config.js` → `features` array

Changes take effect immediately (no restart required).

## Technical Details

### Built With

- **Core:** KiroCore skeleton (shared components)
- **Backend:** Express.js with Kiro CLI integration
- **Frontend:** Next.js with React 19
- **Styling:** Tailwind CSS with custom blue theme
- **AI:** Kiro agent with educational personality

### File Structure

```
apps/study-buddy/
├── README.md              # This file
├── agent.config.js        # Agent configuration
└── .kiro/
    └── steering.md        # Agent behavior guidelines
```

### Dependencies

- Shared with KiroCore platform (no separate dependencies)
- Uses core components from `/core` directory
- Connects to shared backend at `/server`

## Kiro Integration

StudyBuddy demonstrates deep Kiro integration:

- **Steering File:** Custom educational guidelines
- **Agent Config:** Personality and behavior definition
- **CLI Integration:** Backend executes Kiro with StudyBuddy context
- **Fallback System:** Intelligent responses if Kiro unavailable

## Comparison with IdeaForge

| Feature     | StudyBuddy               | IdeaForge                 |
| ----------- | ------------------------ | ------------------------- |
| Purpose     | Education                | Creativity                |
| Personality | Patient tutor            | Enthusiastic brainstormer |
| Theme       | Blue                     | Purple                    |
| Focus       | Learning & understanding | Ideas & innovation        |
| Tone        | Encouraging & clear      | Energetic & inspiring     |

## License

Part of the KiroCore platform. See main repository for license details.

## Links

- **Main Repository:** [KiroCore](../../README.md)
- **Other Application:** [IdeaForge](../idea-forge/README.md)
- **Documentation:** [.kiro folder](../../.kiro/README.md)

---

**This is Application 1 of 2 separate applications built from the KiroCore skeleton.**

Built with 💙 for the Skeleton Crew hackathon.
