import { BarChart3, FileText, TrendingUp, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Dashboard Development',
      description: 'Power BI dashboards for tracking KPIs and metrics, providing real-time insights for data-driven decision making.',
      features: ['Interactive Visualizations', 'Real-time Data Updates', 'Custom KPI Tracking', 'Mobile Responsive Design']
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Data Reporting',
      description: 'SQL/Excel-based reporting for business teams, transforming complex data into clear, actionable reports.',
      features: ['Automated Report Generation', 'Custom SQL Queries', 'Excel Advanced Formulas', 'Scheduled Deliveries']
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Performance & Cost Analysis',
      description: 'Sales, marketing, and healthcare analytics to identify trends, opportunities, and cost optimization strategies.',
      features: ['ROI Analysis', 'Campaign Performance', 'Cost Reduction Strategies', 'Trend Forecasting']
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'ETL & Data Cleanup',
      description: 'Data preparation, transformation, and SAP cleanup to ensure data quality and consistency across systems.',
      features: ['Data Validation', 'ETL Pipeline Design', 'Data Quality Checks', 'System Integration']
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive data solutions to drive your business forward
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`hover-lift gradient-card border-0 shadow-card group animate-scale-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="text-sm text-muted-foreground flex items-center justify-center"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;