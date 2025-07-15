import { useState } from 'react';
import { Calendar, ExternalLink, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI Platform Analytics & ETL Pipeline Development',
      type: 'real-time',
      period: 'Jan 2024 - Jun 2025',
      company: 'NerdPine, Oregon',
      tools: ['SQL', 'Python', 'Power BI', 'AWS', 'GCP'],
      description: 'Developed end-to-end ETL pipelines using SQL and Python to unify ERP, CRM, and cloud AI data (AWS, GCP), enabling consistent KPI tracking across clients.',
      impact: 'Uncovered 25% over-provisioned cloud resources and improved model deployment speed by 40%, contributing to $50K+ in annualized client savings.',
      details: [
        'Built Power BI dashboards monitoring AI adoption metrics, compute usage, job failure rates, and compliance readiness',
        'Partnered with AI engineers and governance teams to automate reporting on MLOps performance',
        'Ensured alignment with HIPAA/GDPR standards for all data processing workflows',
        'Optimized cloud resource allocation resulting in significant cost savings for clients'
      ]
    },
    {
      id: 2,
      title: 'Marketing Campaign Performance Dashboard',
      type: 'real-time',
      period: 'Jun 2021 - May 2023',
      company: 'The Group 7, Hyderabad',
      tools: ['SQL', 'Power BI', 'Excel'],
      description: 'Analyzed multi-channel marketing data to evaluate campaign ROI. Built dashboards tracking lead engagement, ad spend, and conversion trends.',
      impact: 'Helped reduce cost-per-lead by 18% and increased lead conversion by 22%.',
      details: [
        'Processed over 50K marketing touchpoints across 8 different channels',
        'Created automated ETL processes for real-time campaign tracking',
        'Developed predictive models for lead scoring and conversion probability',
        'Implemented A/B testing framework for campaign optimization'
      ]
    },
    {
      id: 3,
      title: 'Quote-to-Sale Performance Dashboard',
      type: 'simulated',
      period: 'Jul 2025',
      company: 'Simulated Project',
      tools: ['Power BI', 'Excel'],
      description: 'Evaluated quote conversions and discount efficiency. Found pricing uplift patterns and streamlined sales insights.',
      impact: 'Identified opportunities for 15% improvement in quote conversion rates.',
      details: [
        'Analyzed 2000+ sales quotes and conversion patterns',
        'Built dynamic pricing optimization models',
        'Created real-time sales performance tracking',
        'Developed discount impact analysis framework'
      ]
    },
    {
      id: 4,
      title: 'Healthcare Claims Risk Analysis',
      type: 'freelance',
      period: 'Apr 2025',
      company: 'Freelance Project',
      tools: ['SQL', 'Python', 'Power BI'],
      description: 'Built a cost-risk model from Medicare claims. Identified patterns in healthcare utilization and cost drivers.',
      impact: 'Identified a 12% potential reduction in readmission cost.',
      details: [
        'Analyzed 100K+ Medicare claims across multiple providers',
        'Developed machine learning models for risk prediction',
        'Created interactive dashboards for claims management',
        'Implemented real-time anomaly detection systems'
      ]
    },
    {
      id: 5,
      title: 'D-Mart Inventory Optimization',
      type: 'freelance',
      period: 'Jun 2024',
      company: 'Freelance Project',
      tools: ['SQL', 'Power BI', 'Excel'],
      description: 'Retail simulation analyzing stock movement and waste. Proposed demand-based restocking strategies.',
      impact: 'Proposed demand-based restocking to reduce waste by 30%.',
      details: [
        'Analyzed inventory turnover across 500+ SKUs',
        'Built demand forecasting models using seasonal patterns',
        'Created automated reorder point calculations',
        'Developed waste reduction tracking dashboard'
      ]
    },
    {
      id: 6,
      title: 'Financial Health Dashboard',
      type: 'capstone',
      period: 'Dec 2024',
      company: 'Indiana Wesleyan University',
      tools: ['MySQL', 'Power BI'],
      description: 'Built a full ETL + dashboard system for SME financial metrics. Comprehensive financial analysis platform.',
      impact: 'Tracked KPIs like OCF, gross margin, and debt-equity ratio with 95% accuracy.',
      details: [
        'Designed complete ETL pipeline for financial data integration',
        'Created automated financial health scoring system',
        'Built predictive cash flow forecasting models',
        'Implemented real-time financial alerting system'
      ]
    }
  ];

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'real-time', label: 'Real-Time' },
    { value: 'simulated', label: 'Simulated' },
    { value: 'freelance', label: 'Freelance' },
    { value: 'capstone', label: 'Capstone' }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'real-time': return 'bg-green-100 text-green-800 border-green-200';
      case 'simulated': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'freelance': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'capstone': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter);

  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world data projects that drove business impact
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          {filters.map((filterOption) => (
            <Button
              key={filterOption.value}
              variant={filter === filterOption.value ? "default" : "outline"}
              onClick={() => setFilter(filterOption.value)}
              className={`${
                filter === filterOption.value 
                  ? 'gradient-primary hover-glow' 
                  : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              <Filter className="mr-2 h-4 w-4" />
              {filterOption.label}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className={`hover-lift gradient-card border-0 shadow-card group animate-scale-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge className={`${getTypeColor(project.type)} mb-3`}>
                    {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {project.period}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-green-600">
                    {project.impact}
                  </p>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="flex items-center justify-between">
                        {project.title}
                        <Badge className={getTypeColor(project.type)}>
                          {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                        </Badge>
                      </DialogTitle>
                      <DialogDescription>
                        {project.company} • {project.period}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Project Overview</h4>
                        <p className="text-muted-foreground">{project.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Key Achievements</h4>
                        <p className="text-green-600 font-medium">{project.impact}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Project Details</h4>
                        <ul className="space-y-2">
                          {project.details.map((detail, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Tools & Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool) => (
                            <span
                              key={tool}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;