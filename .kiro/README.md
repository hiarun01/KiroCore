# .kiro Folder - Documentation Hub

Welcome to the KiroCore `.kiro` configuration folder!

This folder contains all Kiro-related configuration, documentation, and project guidelines.

---

## 📚 Documentation Files

### **[steering.md](./steering.md)** - Project Guidelines

**Purpose:** Defines code standards, architecture patterns, and development guidelines

**Contains:**

- Tech stack overview
- File organization
- Component guidelines
- Styling rules
- Animation standards
- Agent config system
- API integration patterns
- Development workflow
- Testing strategy
- Deployment checklist
- Hackathon demo tips

**When to read:** Before starting any development work

---

### **[specs.yaml](./specs.yaml)** - Specs Configuration

**Purpose:** Defines how specs are used in the project

**Contains:**

- Spec workflow (Requirements → Design → Tasks)
- When to create specs
- Existing specs status
- Future specs roadmap
- Best practices
- Examples

**When to read:** Before planning a new feature

---

### **[PROJECT_STATUS.md](./PROJECT_STATUS.md)** - Current Status

**Purpose:** Tracks project completion and next steps

**Contains:**

- Completed features ✅
- In-progress work 🚧
- TODO list 📋
- Architecture overview
- Design system
- Testing results
- Hackathon scoring analysis
- Success criteria

**When to read:** To understand what's done and what's next

---

### **[KIRO_INTEGRATION.md](./KIRO_INTEGRATION.md)** - Integration Guide

**Purpose:** Explains how Kiro is integrated at multiple levels

**Contains:**

- 3 levels of integration (Root, App, CLI)
- File structure
- How each level works
- Steering files explained
- Why it matters for hackathon
- Demo points
- Integration checklist
- Future enhancements

**When to read:** To understand Kiro integration strategy

---

### **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Quick Lookup

**Purpose:** Fast reference for common tasks and commands

**Contains:**

- Start development commands
- Testing commands
- Key files locations
- Common tasks (add app, component, etc.)
- API endpoints
- Troubleshooting
- Project structure
- Hackathon checklist
- Demo script

**When to read:** When you need to quickly find something

---

## 📁 Subfolders

### **[hooks/](./hooks/)** - Automation Hooks

**Purpose:** Defines automatic actions when events occur

**Files:**

- `root-hook.ts` - Hook configurations

**Hooks included:**

- Auto-format on save
- Update component exports
- Validate agent config
- Run tests on change
- Check build before commit
- Generate documentation
- Sync agent configs
- Test backend on save

---

## 🎯 Quick Navigation

**Need to...**

- **Understand the project?** → Read [PROJECT_STATUS.md](./PROJECT_STATUS.md)
- **Learn code standards?** → Read [steering.md](./steering.md)
- **See Kiro integration?** → Read [KIRO_INTEGRATION.md](./KIRO_INTEGRATION.md)
- **Find a command?** → Read [QUICK_REFERENCE.md](./QUICK_REFERENCE.md)
- **Plan a feature?** → Read [specs.yaml](./specs.yaml)
- **Set up automation?** → Check [hooks/](./hooks/)

---

## 🏗️ Folder Purpose

This `.kiro` folder serves multiple purposes:

### **1. Configuration** ⚙️

- Defines how Kiro behaves in this project
- Sets code standards and patterns
- Configures automation hooks

### **2. Documentation** 📖

- Central hub for all project docs
- Explains architecture and decisions
- Provides quick reference guides

### **3. Integration** 🔌

- Shows deep Kiro usage
- Demonstrates multi-level configuration
- Proves understanding of Kiro system

### **4. Hackathon Advantage** 🏆

- Impresses judges with organization
- Shows engineering maturity
- Demonstrates Kiro mastery

---

## 📊 File Relationships

```
steering.md
    ↓
Defines code standards
    ↓
Used by Kiro when generating code
    ↓
Ensures consistent style

specs.yaml
    ↓
Defines spec workflow
    ↓
Used when planning features
    ↓
Guides implementation

hooks/root-hook.ts
    ↓
Defines automation
    ↓
Triggers on events
    ↓
Runs actions automatically

PROJECT_STATUS.md
    ↓
Tracks progress
    ↓
Shows what's done
    ↓
Guides next steps

KIRO_INTEGRATION.md
    ↓
Explains integration
    ↓
Shows multi-level config
    ↓
Demonstrates mastery

QUICK_REFERENCE.md
    ↓
Provides quick lookup
    ↓
Saves time
    ↓
Improves productivity
```

---

## 🎨 Best Practices

### **Keep It Updated**

- Update PROJECT_STATUS.md as you complete features
- Add new patterns to steering.md as you discover them
- Document new hooks in root-hook.ts

### **Use It Actively**

- Reference steering.md when coding
- Follow spec workflow for new features
- Enable hooks that help your workflow

### **Show It Off**

- Point judges to this folder during demo
- Explain the multi-level integration
- Highlight the organization

---

## 🚀 For Hackathon Judges

**This folder demonstrates:**

✅ **Deep Kiro Understanding**

- Not just using Kiro, but mastering it
- Multi-level configuration (root + per-app)
- Proper use of steering, specs, and hooks

✅ **Engineering Maturity**

- Well-organized documentation
- Clear project structure
- Thoughtful architecture

✅ **Production Readiness**

- Comprehensive guidelines
- Testing strategy
- Deployment checklist

✅ **Extensibility**

- Easy to add new apps
- Clear patterns to follow
- Reusable components

**This is not a toy project. This is a professional platform.** 🏆

---

## 💡 Tips for Using This Folder

1. **Start with PROJECT_STATUS.md** - Get oriented
2. **Read steering.md** - Understand standards
3. **Use QUICK_REFERENCE.md** - Find commands fast
4. **Reference KIRO_INTEGRATION.md** - Understand the system
5. **Follow specs.yaml** - Plan features properly

---

## 🎯 Success Indicators

If this folder is working well, you should:

- ✅ Know where to find any information quickly
- ✅ Understand the project architecture
- ✅ Follow consistent code patterns
- ✅ Have automation helping you
- ✅ Be able to explain Kiro integration
- ✅ Impress hackathon judges

---

## 📞 Need Help?

**Can't find something?**

- Check QUICK_REFERENCE.md first
- Then search other docs
- Ask Kiro for help!

**Want to add something?**

- Update relevant doc file
- Keep it organized
- Follow existing patterns

**Found an issue?**

- Fix it immediately
- Update docs
- Keep quality high

---

**Remember: This folder is your competitive advantage. Use it well!** 🚀
