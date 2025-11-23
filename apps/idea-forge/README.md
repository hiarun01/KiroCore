# 💡 IdeaForge - Creative Brainstorming Partner

**Application 2 of 2 in the KiroCore Platform**

## Overview

IdeaForge is an AI-powered creative brainstorming partner that helps users develop and refine their ideas. This application demonstrates the KiroCore skeleton's ability to create specialized AI agents with distinct personalities through simple configuration changes.

## Application Details

- **Name:** IdeaForge
- **Icon:** 💡
- **Category:** Creativity / Innovation
- **Personality:** Enthusiastic, open-minded creative partner
- **Theme:** Purple (#8b5cf6)

## Features

- **Creative Brainstorming** - Explores multiple angles and possibilities
- **Idea Refinement** - Builds on concepts to add depth and detail
- **Problem Solving** - Approaches challenges with innovative thinking
- **Innovation Strategies** - Applies frameworks like SCAMPER and "what if" scenarios
- **Concept Development** - Helps structure and develop ideas from concept to plan

## Agent Configuration

This application is configured through:

### `agent.config.js`

Defines the agent's personality, appearance, and behavior:

```javascript
{
  name: "IdeaForge",
  icon: "💡",
  systemPrompt: "You are a creative brainstorming AI assistant...",
  welcomeMessage: "Let's create something amazing together!",
  theme: { primary: "#8b5cf6" }
}
```

### `.kiro/steering.md`

Provides detailed guidelines for the AI agent:

- Creative principles (explore possibilities, challenge assumptions)
- Communication style (energetic, inspiring, non-judgmental)
- Response structure (validate, explore, suggest, identify challenges)
- Brainstorming techniques (SCAMPER, reverse thinking, analogies)

## How It Works

1. **User accesses** `/idea-forge` route
2. **Backend loads** `apps/idea-forge/agent.config.js`
3. **Kiro reads** `apps/idea-forge/.kiro/steering.md`
4. **Agent responds** with creative brainstorming personality
5. **UI applies** IdeaForge theme and branding

## Running IdeaForge

### From Main Application

```bash
# Start the KiroCore platform
npm run dev

# Access IdeaForge
# Navigate to: http://localhost:3000/idea-forge
```

### API Endpoint

```bash
# Send message to IdeaForge
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "appType": "idea-forge",
    "message": "I want to create a mobile app for fitness",
    "conversationHistory": []
  }'
```

## Example Interactions

### Example 1: Startup Idea

**User:** "I have an idea for a food delivery app"

**IdeaForge:** "Interesting! Let's explore this together. What if we think beyond just delivery? Could it incorporate meal planning, local chef partnerships, or sustainability features? Let's brainstorm what makes your app unique..."

### Example 2: Creative Project

**User:** "I want to write a sci-fi novel but I'm stuck"

**IdeaForge:** "Great! Let's break through that block. What if we reverse the typical sci-fi tropes? Instead of humans exploring space, what if aliens are studying Earth? Or we could use SCAMPER - what if we substitute the setting, combine genres, or adapt a historical event to the future?"

### Example 3: Problem Solving

**User:** "How can I make my product stand out in a crowded market?"

**IdeaForge:** "Excellent question! Let's think divergently first. What if you focused on a micro-niche? What if you changed the business model entirely? What if you partnered with an unexpected industry? Let's explore 10 wild ideas before we refine..."

## Customization

To modify IdeaForge's behavior:

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
- **Styling:** Tailwind CSS with custom purple theme
- **AI:** Kiro agent with creative personality

### File Structure

```
apps/idea-forge/
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

IdeaForge demonstrates deep Kiro integration:

- **Steering File:** Custom creative brainstorming guidelines
- **Agent Config:** Personality and behavior definition
- **CLI Integration:** Backend executes Kiro with IdeaForge context
- **Fallback System:** Intelligent responses if Kiro unavailable

## Comparison with StudyBuddy

| Feature     | IdeaForge                 | StudyBuddy               |
| ----------- | ------------------------- | ------------------------ |
| Purpose     | Creativity                | Education                |
| Personality | Enthusiastic brainstormer | Patient tutor            |
| Theme       | Purple                    | Blue                     |
| Focus       | Ideas & innovation        | Learning & understanding |
| Tone        | Energetic & inspiring     | Encouraging & clear      |
| Approach    | Divergent thinking        | Step-by-step explanation |

## Brainstorming Techniques Used

IdeaForge employs various creative frameworks:

### SCAMPER

- **S**ubstitute - What can be replaced?
- **C**ombine - What can be merged?
- **A**dapt - What can be adjusted?
- **M**odify - What can be changed?
- **P**ut to other uses - New applications?
- **E**liminate - What can be removed?
- **R**everse - What if we flip it?

### Other Techniques

- "What if" scenarios
- Reverse thinking
- Analogies from other domains
- First principles thinking
- Constraint removal

## License

Part of the KiroCore platform. See main repository for license details.

## Links

- **Main Repository:** [KiroCore](../../README.md)
- **Other Application:** [StudyBuddy](../study-buddy/README.md)
- **Documentation:** [.kiro folder](../../.kiro/README.md)

---

**This is Application 2 of 2 separate applications built from the KiroCore skeleton.**

Built with 💜 for the Skeleton Crew hackathon.
