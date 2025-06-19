// Application Data
const appData = {
  "tool_categories": {
    "Code Generation & Completion": {
      "description": "Tools that generate code, provide autocompletion, and assist with coding tasks",
      "examples": ["GitHub Copilot", "Tabnine", "Cody AI", "Cursor", "Windsurf"],
      "use_cases": ["Code autocomplete", "Boilerplate generation", "Function creation", "Documentation"],
      "key_considerations": ["Language support", "IDE integration", "Code quality", "Security"]
    },
    "Code Review & Analysis": {
      "description": "Tools that analyze code quality, suggest improvements, and review code changes",
      "examples": ["Codium AI", "WhatTheDiff", "Grit.io", "Stepsize AI"],
      "use_cases": ["Code review", "Bug detection", "Performance optimization", "Security analysis"],
      "key_considerations": ["Accuracy", "False positive rate", "Integration with version control", "Team collaboration"]
    },
    "Testing & QA": {
      "description": "Tools that generate tests, identify bugs, and ensure code quality",
      "examples": ["Codium AI", "Bugasura", "GitHub Copilot for tests"],
      "use_cases": ["Unit test generation", "Bug tracking", "Test case creation", "Quality assurance"],
      "key_considerations": ["Test coverage", "Test quality", "Framework support", "Maintenance overhead"]
    },
    "Documentation": {
      "description": "Tools that automatically generate and maintain code documentation",
      "examples": ["Mintlify Writer", "GitHub Copilot", "Notion AI"],
      "use_cases": ["API documentation", "Code comments", "Technical specs", "User guides"],
      "key_considerations": ["Accuracy", "Format support", "Maintenance", "Integration"]
    },
    "Local Development Environment": {
      "description": "Self-hosted AI tools that run locally without cloud dependencies",
      "examples": ["LocalAI", "Ollama", "Code Llama local", "Aider"],
      "use_cases": ["Private code analysis", "Offline development", "Sensitive projects", "Custom models"],
      "key_considerations": ["Hardware requirements", "Model performance", "Privacy", "Maintenance"]
    },
    "Cloud-based AI Services": {
      "description": "AI tools that run on cloud infrastructure with API access",
      "examples": ["OpenAI GPT-4", "Anthropic Claude", "Google Gemini", "GitHub Copilot"],
      "use_cases": ["Scalable AI processing", "Latest models", "Team collaboration", "Easy setup"],
      "key_considerations": ["Data privacy", "Cost", "Latency", "Vendor lock-in"]
    },
    "Specialized Development Tools": {
      "description": "AI tools designed for specific development domains or languages",
      "examples": ["JetBrains AI Assistant", "Android Studio Gemini", "Cursor", "Windsurf"],
      "use_cases": ["Language-specific optimization", "Framework integration", "Domain expertise", "Workflow automation"],
      "key_considerations": ["Specialization depth", "Tool ecosystem", "Learning curve", "Migration effort"]
    }
  },
  "decision_factors": {
    "Security & Privacy": {
      "considerations": [
        "Data sensitivity level",
        "Regulatory compliance requirements",
        "On-premises vs cloud deployment",
        "Code exposure risks",
        "Intellectual property protection"
      ],
      "evaluation_questions": [
        "What is the sensitivity level of your codebase?",
        "Are you subject to specific compliance regulations?",
        "Do you need to keep code on-premises?",
        "What are your data residency requirements?"
      ]
    },
    "Technical Requirements": {
      "considerations": [
        "Programming languages used",
        "Development environment setup",
        "Integration requirements",
        "Performance needs",
        "Scalability requirements"
      ],
      "evaluation_questions": [
        "Which programming languages does your team use?",
        "What IDEs and development tools are you using?",
        "Do you need real-time or batch processing?",
        "What are your performance requirements?"
      ]
    },
    "Team & Organization": {
      "considerations": [
        "Team size and structure",
        "Skill level and experience",
        "Budget constraints",
        "Training needs",
        "Change management"
      ],
      "evaluation_questions": [
        "What is your team's experience level with AI tools?",
        "What is your budget for AI tooling?",
        "How much training time can you allocate?",
        "What is your tolerance for change?"
      ]
    },
    "Operational Considerations": {
      "considerations": [
        "Maintenance overhead",
        "Support and documentation",
        "Vendor reliability",
        "Long-term sustainability",
        "ROI expectations"
      ],
      "evaluation_questions": [
        "How much maintenance can your team handle?",
        "What level of support do you need?",
        "What are your ROI expectations?",
        "How important is vendor stability?"
      ]
    }
  },
  "deployment_comparison": {
    "Local Deployment": {
      "advantages": [
        "Complete data control and privacy",
        "No internet dependency",
        "Customizable to specific needs",
        "Predictable costs over time",
        "Compliance with strict regulations"
      ],
      "disadvantages": [
        "High initial setup costs",
        "Requires hardware and maintenance",
        "Limited scalability",
        "Slower updates and improvements",
        "Technical expertise required"
      ],
      "best_for": [
        "Highly regulated industries",
        "Sensitive codebases",
        "Offline development needs",
        "Long-term cost optimization",
        "Custom model requirements"
      ]
    },
    "Cloud Deployment": {
      "advantages": [
        "Easy setup and maintenance",
        "Scalable on demand",
        "Latest AI models and features",
        "Lower initial costs",
        "Automatic updates"
      ],
      "disadvantages": [
        "Data leaves your control",
        "Ongoing subscription costs",
        "Internet dependency",
        "Potential vendor lock-in",
        "Compliance challenges"
      ],
      "best_for": [
        "Quick deployment needs",
        "Variable workloads",
        "Small to medium teams",
        "Non-sensitive codebases",
        "Rapid experimentation"
      ]
    }
  },
  "popular_tools": [
    {
      "name": "GitHub Copilot",
      "category": "Code Generation & Completion",
      "pricing": "Starting at $10/month",
      "security_level": "Medium",
      "setup_complexity": "Low",
      "key_features": ["Real-time code suggestions", "Multi-language support", "IDE integration"]
    },
    {
      "name": "Tabnine",
      "category": "Code Generation & Completion", 
      "pricing": "Starting at $12/month",
      "security_level": "High",
      "setup_complexity": "Low",
      "key_features": ["Privacy-focused", "Custom models", "Team training"]
    },
    {
      "name": "LocalAI",
      "category": "Local Development Environment",
      "pricing": "Open source",
      "security_level": "Very High",
      "setup_complexity": "High",
      "key_features": ["Self-hosted", "OpenAI compatible", "Full privacy control"]
    },
    {
      "name": "Codium AI",
      "category": "Testing & QA",
      "pricing": "Starting at $19/month",
      "security_level": "Medium",
      "setup_complexity": "Medium",
      "key_features": ["Test generation", "Code analysis", "Bug prediction"]
    },
    {
      "name": "Cursor",
      "category": "Specialized Development Tools",
      "pricing": "Starting at $20/month",
      "security_level": "Medium",
      "setup_complexity": "Low",
      "key_features": ["AI-powered IDE", "Context-aware coding", "Natural language commands"]
    },
    {
      "name": "Windsurf",
      "category": "Specialized Development Tools",
      "pricing": "Starting at $25/month",
      "security_level": "High",
      "setup_complexity": "Medium",
      "key_features": ["Advanced AI assistance", "Multi-model support", "Team collaboration"]
    },
    {
      "name": "Ollama",
      "category": "Local Development Environment",
      "pricing": "Open source",
      "security_level": "Very High",
      "setup_complexity": "Medium",
      "key_features": ["Local model running", "Easy setup", "Multiple model support"]
    },
    {
      "name": "Mintlify Writer",
      "category": "Documentation",
      "pricing": "Starting at $15/month",
      "security_level": "Medium",
      "setup_complexity": "Low",
      "key_features": ["Auto documentation", "Code commenting", "API docs generation"]
    }
  ],
  "best_practices": [
    {
      "category": "Security",
      "practice": "Implement strict data governance policies for AI tools",
      "benefits": "Ensures consistent handling of sensitive information"
    },
    {
      "category": "Security",
      "practice": "Regularly audit AI tool data access and permissions",
      "benefits": "Maintains security compliance and reduces risk exposure"
    },
    {
      "category": "Security",
      "practice": "Use local deployment for highly sensitive codebases",
      "benefits": "Prevents data leakage and maintains full control"
    },
    {
      "category": "Productivity",
      "practice": "Create clear, specific prompts for AI tools rather than vague requests",
      "benefits": "Improves quality and relevance of AI outputs"
    },
    {
      "category": "Productivity",
      "practice": "Establish consistent AI tool usage patterns across the team",
      "benefits": "Reduces learning curve and improves team efficiency"
    },
    {
      "category": "Productivity",
      "practice": "Integrate AI tools into existing development workflows",
      "benefits": "Minimizes disruption and maximizes adoption"
    },
    {
      "category": "Quality",
      "practice": "Always review AI-generated code for quality and correctness",
      "benefits": "Maintains code quality standards"
    },
    {
      "category": "Quality",
      "practice": "Implement automated testing for AI-generated code",
      "benefits": "Catches errors and ensures reliability"
    },
    {
      "category": "Quality",
      "practice": "Set up code review processes that include AI-generated content",
      "benefits": "Maintains team oversight and knowledge sharing"
    },
    {
      "category": "Team Adoption",
      "practice": "Start with pilot projects before full-scale adoption",
      "benefits": "Minimizes disruption and identifies issues early"
    },
    {
      "category": "Team Adoption",
      "practice": "Provide comprehensive training on AI tool best practices",
      "benefits": "Ensures effective usage and reduces resistance"
    },
    {
      "category": "Team Adoption",
      "practice": "Establish clear guidelines for when and how to use AI tools",
      "benefits": "Prevents misuse and ensures consistent application"
    }
  ]
};

// Global variables
let currentWizardStep = 0;
let wizardAnswers = {};
let currentPracticeFilter = 'all';

// Wizard questions data
const wizardQuestions = [
  {
    title: "Security & Privacy Requirements",
    question: "What is the sensitivity level of your codebase?",
    options: [
      { value: "high", text: "Highly sensitive - Contains proprietary algorithms, customer data, or regulated content" },
      { value: "medium", text: "Moderately sensitive - Internal business logic and processes" },
      { value: "low", text: "Low sensitivity - Open source or public-facing code" }
    ]
  },
  {
    title: "Technical Requirements",
    question: "Which programming languages does your team primarily use?",
    options: [
      { value: "javascript", text: "JavaScript/TypeScript, Node.js, React" },
      { value: "python", text: "Python, Django, Flask, Data Science" },
      { value: "java", text: "Java, Spring, Enterprise applications" },
      { value: "csharp", text: "C#, .NET, Azure ecosystem" },
      { value: "mixed", text: "Multiple languages across different projects" }
    ]
  },
  {
    title: "Team & Organization",
    question: "What is your team's experience level with AI tools?",
    options: [
      { value: "beginner", text: "New to AI tools - Need guidance and training" },
      { value: "intermediate", text: "Some experience - Used basic AI tools before" },
      { value: "advanced", text: "Experienced - Ready for advanced AI integration" }
    ]
  },
  {
    title: "Operational Considerations",
    question: "What is your preferred deployment approach?",
    options: [
      { value: "cloud", text: "Cloud-based - Quick setup, managed service" },
      { value: "local", text: "Local deployment - Full control and privacy" },
      { value: "hybrid", text: "Hybrid approach - Mix of cloud and local tools" }
    ]
  }
];

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupEventListeners();
  loadCategories();
  loadDeploymentComparison();
  loadTools();
  loadBestPractices();
  initializeWizard();
}

function setupEventListeners() {
  // Tab navigation
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      switchTab(e.target.dataset.tab);
    });
  });

  // Filter event listeners
  const categoryFilter = document.getElementById('categoryFilter');
  const securityFilter = document.getElementById('securityFilter');
  const searchFilter = document.getElementById('searchFilter');
  
  if (categoryFilter) categoryFilter.addEventListener('change', filterTools);
  if (securityFilter) securityFilter.addEventListener('change', filterTools);
  if (searchFilter) searchFilter.addEventListener('input', filterTools);

  // Best practices filter
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterPractices(e.target.dataset.category);
    });
  });
}

function switchTab(tabName) {
  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

  // Update content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  document.getElementById(tabName).classList.add('active');
}

function loadCategories() {
  const categoriesGrid = document.getElementById('categoriesGrid');
  if (!categoriesGrid) return;

  categoriesGrid.innerHTML = '';

  Object.entries(appData.tool_categories).forEach(([name, data]) => {
    const categoryCard = document.createElement('div');
    categoryCard.className = 'category-card fade-in';
    categoryCard.innerHTML = `
      <h3>${name}</h3>
      <p class="category-card__description">${data.description}</p>
      <div class="category-card__examples">
        <h4>Popular Tools</h4>
        <ul>
          ${data.examples.slice(0, 4).map(example => `<li>${example}</li>`).join('')}
        </ul>
      </div>
      <div class="category-card__use-cases">
        <strong>Use Cases:</strong> ${data.use_cases.join(', ')}
      </div>
    `;
    categoriesGrid.appendChild(categoryCard);
  });
}

function loadDeploymentComparison() {
  const deployment = appData.deployment_comparison;
  
  // Local deployment
  const localAdvantages = document.getElementById('localAdvantages');
  const localDisadvantages = document.getElementById('localDisadvantages');
  const localBestFor = document.getElementById('localBestFor');
  
  if (localAdvantages) {
    localAdvantages.innerHTML = deployment['Local Deployment'].advantages
      .map(item => `<li>${item}</li>`).join('');
  }
  if (localDisadvantages) {
    localDisadvantages.innerHTML = deployment['Local Deployment'].disadvantages
      .map(item => `<li>${item}</li>`).join('');
  }
  if (localBestFor) {
    localBestFor.innerHTML = deployment['Local Deployment'].best_for
      .map(item => `<li>${item}</li>`).join('');
  }

  // Cloud deployment
  const cloudAdvantages = document.getElementById('cloudAdvantages');
  const cloudDisadvantages = document.getElementById('cloudDisadvantages');
  const cloudBestFor = document.getElementById('cloudBestFor');
  
  if (cloudAdvantages) {
    cloudAdvantages.innerHTML = deployment['Cloud Deployment'].advantages
      .map(item => `<li>${item}</li>`).join('');
  }
  if (cloudDisadvantages) {
    cloudDisadvantages.innerHTML = deployment['Cloud Deployment'].disadvantages
      .map(item => `<li>${item}</li>`).join('');
  }
  if (cloudBestFor) {
    cloudBestFor.innerHTML = deployment['Cloud Deployment'].best_for
      .map(item => `<li>${item}</li>`).join('');
  }
}

function loadTools() {
  const toolsGrid = document.getElementById('toolsGrid');
  const categoryFilter = document.getElementById('categoryFilter');
  
  if (!toolsGrid) return;

  // Populate category filter options
  if (categoryFilter) {
    const categories = [...new Set(appData.popular_tools.map(tool => tool.category))];
    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      categoryFilter.appendChild(option);
    });
  }

  renderTools(appData.popular_tools);
}

function renderTools(tools) {
  const toolsGrid = document.getElementById('toolsGrid');
  if (!toolsGrid) return;

  toolsGrid.innerHTML = '';

  tools.forEach(tool => {
    const toolCard = document.createElement('div');
    toolCard.className = 'tool-card fade-in';
    
    const securityClass = tool.security_level.toLowerCase().replace(' ', '-');
    
    toolCard.innerHTML = `
      <h3>${tool.name}</h3>
      <div class="tool-card__category">${tool.category}</div>
      <div class="tool-card__pricing">${tool.pricing}</div>
      <div class="tool-card__security">
        <span class="security-level security-level--${securityClass}">
          ${tool.security_level} Security
        </span>
      </div>
      <div class="tool-card__complexity">
        <strong>Setup:</strong> ${tool.setup_complexity} complexity
      </div>
      <div class="tool-card__features">
        <h4>Key Features</h4>
        <ul>
          ${tool.key_features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      </div>
    `;
    toolsGrid.appendChild(toolCard);
  });
}

function filterTools() {
  const categoryFilter = document.getElementById('categoryFilter');
  const securityFilter = document.getElementById('securityFilter');
  const searchFilter = document.getElementById('searchFilter');
  
  if (!categoryFilter || !securityFilter || !searchFilter) return;

  const categoryValue = categoryFilter.value;
  const securityValue = securityFilter.value;
  const searchValue = searchFilter.value.toLowerCase();

  const filteredTools = appData.popular_tools.filter(tool => {
    const matchesCategory = !categoryValue || tool.category === categoryValue;
    const matchesSecurity = !securityValue || tool.security_level === securityValue;
    const matchesSearch = !searchValue || 
      tool.name.toLowerCase().includes(searchValue) ||
      tool.category.toLowerCase().includes(searchValue) ||
      tool.key_features.some(feature => feature.toLowerCase().includes(searchValue));

    return matchesCategory && matchesSecurity && matchesSearch;
  });

  renderTools(filteredTools);
}

function loadBestPractices() {
  renderPractices(appData.best_practices);
}

function renderPractices(practices) {
  const practicesGrid = document.getElementById('practicesGrid');
  if (!practicesGrid) return;

  practicesGrid.innerHTML = '';

  practices.forEach(practice => {
    const practiceCard = document.createElement('div');
    practiceCard.className = 'practice-card fade-in';
    practiceCard.innerHTML = `
      <div class="practice-card__category">${practice.category}</div>
      <h3>${practice.practice}</h3>
      <p class="practice-card__benefits">${practice.benefits}</p>
    `;
    practicesGrid.appendChild(practiceCard);
  });
}

function filterPractices(category) {
  // Update active filter button
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-category="${category}"]`).classList.add('active');

  currentPracticeFilter = category;

  const filteredPractices = category === 'all' 
    ? appData.best_practices 
    : appData.best_practices.filter(practice => practice.category === category);

  renderPractices(filteredPractices);
}

// Decision Wizard functionality
function initializeWizard() {
  renderWizardQuestion(wizardQuestions[0]);
  updateWizardProgress();
  updateWizardButtons();
}

function renderWizardQuestion(question) {
  const wizardContent = document.getElementById('wizardContent');
  if (!wizardContent) return;

  wizardContent.innerHTML = `
    <div class="wizard-question">
      <h3>${question.title}: ${question.question}</h3>
      <div class="wizard-options">
        ${question.options.map((option, index) => `
          <label class="wizard-option">
            <input type="radio" name="wizardAnswer" value="${option.value}">
            <span>${option.text}</span>
          </label>
        `).join('')}
      </div>
    </div>
  `;

  // Add event listeners for option selection
  document.querySelectorAll('input[name="wizardAnswer"]').forEach(input => {
    input.addEventListener('change', (e) => {
      document.querySelectorAll('.wizard-option').forEach(opt => opt.classList.remove('selected'));
      e.target.closest('.wizard-option').classList.add('selected');
      
      // Enable next button when an option is selected
      const nextBtn = document.getElementById('nextBtn');
      if (nextBtn) {
        nextBtn.disabled = false;
      }
    });
  });

  // Restore previous answer if exists
  if (wizardAnswers[currentWizardStep]) {
    const previousAnswer = document.querySelector(`input[value="${wizardAnswers[currentWizardStep]}"]`);
    if (previousAnswer) {
      previousAnswer.checked = true;
      previousAnswer.closest('.wizard-option').classList.add('selected');
    }
  }
}

function nextStep() {
  // Save current answer
  const selectedAnswer = document.querySelector('input[name="wizardAnswer"]:checked');
  if (!selectedAnswer) {
    alert('Please select an option before proceeding.');
    return;
  }
  
  wizardAnswers[currentWizardStep] = selectedAnswer.value;
  currentWizardStep++;

  if (currentWizardStep < wizardQuestions.length) {
    renderWizardQuestion(wizardQuestions[currentWizardStep]);
    updateWizardProgress();
    updateWizardButtons();
  } else {
    showWizardResults();
  }
}

function previousStep() {
  if (currentWizardStep > 0) {
    currentWizardStep--;
    renderWizardQuestion(wizardQuestions[currentWizardStep]);
    updateWizardProgress();
    updateWizardButtons();
  }
}

function updateWizardProgress() {
  const progress = ((currentWizardStep + 1) / wizardQuestions.length) * 100;
  const progressFill = document.getElementById('wizardProgress');
  const currentStepSpan = document.getElementById('currentStep');
  const totalStepsSpan = document.getElementById('totalSteps');
  
  if (progressFill) progressFill.style.width = `${progress}%`;
  if (currentStepSpan) currentStepSpan.textContent = currentWizardStep + 1;
  if (totalStepsSpan) totalStepsSpan.textContent = wizardQuestions.length;
}

function updateWizardButtons() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  if (prevBtn) prevBtn.disabled = currentWizardStep === 0;
  if (nextBtn) {
    nextBtn.textContent = currentWizardStep === wizardQuestions.length - 1 ? 'Get Results' : 'Next';
    // Disable next button initially for new questions
    const selectedAnswer = document.querySelector('input[name="wizardAnswer"]:checked');
    nextBtn.disabled = !selectedAnswer;
  }
}

function showWizardResults() {
  const wizardContent = document.getElementById('wizardContent');
  const wizardActions = document.querySelector('.wizard__actions');
  const wizardResults = document.getElementById('wizardResults');
  
  if (wizardContent) wizardContent.style.display = 'none';
  if (wizardActions) wizardActions.style.display = 'none';
  if (wizardResults) {
    wizardResults.style.display = 'block';
    wizardResults.innerHTML = generateRecommendations();
  }
}

function generateRecommendations() {
  const security = wizardAnswers[0];
  const language = wizardAnswers[1];
  const experience = wizardAnswers[2];
  const deployment = wizardAnswers[3];

  let recommendations = [];

  // Logic for recommendations based on answers
  if (security === 'high' || deployment === 'local') {
    recommendations.push({
      tool: 'LocalAI',
      reason: 'Provides complete privacy control and local deployment for sensitive codebases'
    });
    recommendations.push({
      tool: 'Ollama',
      reason: 'Open source local AI with easy setup for security-conscious teams'
    });
  }

  if (security === 'low' || deployment === 'cloud') {
    recommendations.push({
      tool: 'GitHub Copilot',
      reason: 'Industry-leading code completion with excellent IDE integration'
    });
    recommendations.push({
      tool: 'Tabnine',
      reason: 'Good balance of features and privacy options'
    });
  }

  if (experience === 'beginner') {
    recommendations.push({
      tool: 'GitHub Copilot',
      reason: 'User-friendly with extensive documentation and community support'
    });
  }

  if (experience === 'advanced') {
    recommendations.push({
      tool: 'Cursor',
      reason: 'Advanced AI-powered IDE with sophisticated features for experienced developers'
    });
  }

  if (deployment === 'hybrid') {
    recommendations.push({
      tool: 'Windsurf',
      reason: 'Flexible deployment options supporting both cloud and local configurations'
    });
  }

  // Remove duplicates and limit to top 3
  const uniqueRecommendations = recommendations.filter((rec, index, self) => 
    index === self.findIndex(r => r.tool === rec.tool)
  ).slice(0, 3);

  // Ensure we have at least one recommendation
  if (uniqueRecommendations.length === 0) {
    uniqueRecommendations.push({
      tool: 'GitHub Copilot',
      reason: 'Versatile solution suitable for most development scenarios'
    });
  }

  const answerLabels = {
    high: 'High sensitivity',
    medium: 'Medium sensitivity', 
    low: 'Low sensitivity',
    javascript: 'JavaScript/TypeScript',
    python: 'Python',
    java: 'Java',
    csharp: 'C#/.NET',
    mixed: 'Multiple languages',
    beginner: 'Beginner level',
    intermediate: 'Intermediate level',
    advanced: 'Advanced level',
    cloud: 'Cloud-based',
    local: 'Local deployment',
    hybrid: 'Hybrid approach'
  };

  return `
    <h3>Your Personalized AI Tool Recommendations</h3>
    <div class="recommendations-list">
      ${uniqueRecommendations.map(rec => `
        <div class="recommendation-item">
          <h4>${rec.tool}</h4>
          <p>${rec.reason}</p>
        </div>
      `).join('')}
    </div>
    <div class="wizard-summary">
      <h4>Based on your responses:</h4>
      <ul>
        <li><strong>Security Level:</strong> ${answerLabels[security] || security}</li>
        <li><strong>Primary Languages:</strong> ${answerLabels[language] || language}</li>
        <li><strong>Team Experience:</strong> ${answerLabels[experience] || experience}</li>
        <li><strong>Deployment Preference:</strong> ${answerLabels[deployment] || deployment}</li>
      </ul>
    </div>
    <div class="wizard-actions-final">
      <button class="btn btn--primary" onclick="switchTab('recommendations')">Explore All Tools</button>
      <button class="btn btn--outline" onclick="restartWizard()">Start Over</button>
    </div>
  `;
}

function restartWizard() {
  currentWizardStep = 0;
  wizardAnswers = {};
  
  const wizardContent = document.getElementById('wizardContent');
  const wizardActions = document.querySelector('.wizard__actions');
  const wizardResults = document.getElementById('wizardResults');
  
  if (wizardContent) wizardContent.style.display = 'block';
  if (wizardActions) wizardActions.style.display = 'flex';
  if (wizardResults) wizardResults.style.display = 'none';
  
  initializeWizard();
}

// Make functions globally available
window.switchTab = switchTab;
window.nextStep = nextStep;
window.previousStep = previousStep;
window.restartWizard = restartWizard;