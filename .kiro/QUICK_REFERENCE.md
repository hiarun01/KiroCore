# KiroCore - Quick Reference

Fast lookup for common tasks and commands.

---

## 🚀 Start Development

```bash
# Start both frontend and backend
npm run dev

# Start frontend only
npm run dev:frontend

# Start backend only
npm run dev:backend
```

**URLs:**

- Frontend: http://localhost:3000
- Backend: http://localhost:3001
- Health Check: http://localhost:3001/health

---

## 🧪 Testing

```bash
# Test backend modules
node server/test-simple.js

# Test API endpoints (requires backend running)
node server/test-api.js

# Check Kiro CLI
kiro --version
```

---

## 📁 Key Files

### **Configuration**

- `package.json` - Dependencies and scripts
- `.env.local` - Frontend environment variables
- `server/.env` - Backend environment variables
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS configuration

### **Backend**

- `server/index.js` - Server entry point
- `server/routes/chat.js` - Chat API endpoint
- `server/routes/apps.js` - Apps API endpoint
- `server/services/kiro-service.js` - Kiro CLI integration
- `server/services/app-service.js` - App config loader

### **Frontend**

- `app/page.tsx` - Home page
- `app/chat/page.tsx` - Chat page
- `app/layout.tsx` - Root layout
- `core/components/chat/ChatArea.tsx` - Main chat component
- `core/services/api.ts` - Backend API client

### **Apps**

- `apps/study-buddy/agent.config.js` - StudyBuddy config
- `apps/study-buddy/.kiro/steering.md` - StudyBuddy personality
- `apps/idea-forge/agent.config.js` - IdeaForge config
- `apps/idea-forge/.kiro/steering.md` - IdeaForge personality

### **Kiro**

- `.kiro/steering.md` - Project guidelines
- `.kiro/specs.yaml` - Specs configuration
- `.kiro/hooks/root-hook.ts` - Automation hooks
- `.kiro/PROJECT_STATUS.md` - Current status
- `.kiro/KIRO_INTEGRATION.md` - Integration guide

---

## 🎨 Common Tasks

### **Add a New App**

```bash
# 1. Create folder
mkdir apps/my-app
mkdir apps/my-app/.kiro

# 2. Create config
touch apps/my-app/agent.config.js

# 3. Create steering
touch apps/my-app/.kiro/steering.md

# 4. Define personality in files
# 5. Visit /my-app - it works!
```

### **Update Agent Personality**

Edit: `apps/[app-name]/.kiro/steering.md`

Changes take effect immediately (no restart needed).

### **Add New Component**

```bash
# 1. Create component
touch core/components/MyComponent.tsx

# 2. Export from index
# Add to core/components/index.ts

# 3. Import where needed
import { MyComponent } from '@/core/components';
```

### **Update Styling**

- Global styles: `app/globals.css`
- Component styles: Use Tailwind classes
- Theme colors: Defined in `.kiro/steering.md`

---

## 🔧 API Endpoints

### **Chat**

```
POST /api/chat
Body: {
  message: string,
  appType: string,
  conversationHistory: array
}
Response: {
  success: boolean,
  response: string,
  appType: string,
  source: string,
  timestamp: string
}
```

### **Get All Apps**

```
GET /api/apps
Response: {
  success: boolean,
  apps: [
    {
      id: string,
      name: string,
      icon: string,
      description: string,
      ...
    }
  ]
}
```

### **Get App Config**

```
GET /api/apps/:appType
Response: {
  success: boolean,
  config: {
    name: string,
    icon: string,
    description: string,
    systemPrompt: string,
    welcomeMessage: string,
    features: array,
    theme: object
  }
}
```

---

## 🐛 Troubleshooting

### **Backend won't start**

```bash
# Check if port 3001 is in use
netstat -ano | findstr :3001

# Kill process if needed
taskkill /PID <process_id> /F

# Restart backend
npm run dev:backend
```

### **Frontend won't start**

```bash
# Check if port 3000 is in use
netstat -ano | findstr :3000

# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
npm install

# Restart frontend
npm run dev:frontend
```

### **Kiro CLI not found**

```bash
# Check if installed
kiro --version

# If not installed, fallback system will work
# App will use mock responses
```

### **Module not found errors**

```bash
# Reinstall dependencies
npm install

# Check imports are correct
# Use @/ for absolute imports
```

---

## 📊 Project Structure

```
kirocore/
├── .kiro/              # Kiro configuration
├── app/                # Next.js pages
├── apps/               # Agent configs
├── core/               # Reusable components
├── server/             # Express backend
├── public/             # Static assets
├── node_modules/       # Dependencies
├── package.json        # Project config
└── README.md           # Project docs
```

---

## 🎯 Hackathon Checklist

### **Before Demo**

- [ ] Backend running (port 3001)
- [ ] Frontend running (port 3000)
- [ ] Both apps work (StudyBuddy, IdeaForge)
- [ ] Chat sends and receives messages
- [ ] No console errors
- [ ] Mobile responsive tested

### **Demo Script**

1. Show home page - explain concept
2. Open StudyBuddy - ask educational question
3. Open IdeaForge - brainstorm idea
4. Show agent.config.js - "This is all it takes!"
5. Show .kiro folders - "Deep Kiro integration"
6. Explain architecture - "Production-ready"

### **Talking Points**

- "One skeleton, multiple apps"
- "Just change the config file"
- "Deep Kiro integration"
- "Production-ready architecture"
- "Extensible and scalable"

---

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Express.js Docs](https://expressjs.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/docs/)

---

## 💡 Quick Tips

- **Use Kiro**: Ask Kiro for help with code
- **Check logs**: Backend logs show what's happening
- **Test often**: Run tests after changes
- **Keep it simple**: Don't over-complicate
- **Document**: Update docs as you build

---

## 🏆 Success Metrics

- ✅ Backend works
- ✅ Frontend works
- ✅ 2 apps configured
- ✅ Kiro integration
- ✅ Clean code
- ✅ Good docs
- ✅ Demo-ready

**You're 85% there! Just connect frontend to backend and you're done!** 🎉
