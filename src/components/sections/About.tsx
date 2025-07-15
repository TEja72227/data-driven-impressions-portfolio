import { GraduationCap, Code, Database, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    'SQL (MySQL, MS SQL)',
    'Power BI, DAX',
    'Excel (Advanced Reporting)',
    'Python (Pandas, ETL)',
    'ETL Pipelines & Data Integration',
    'AWS & GCP Cloud Analytics',
    'MLOps Performance Monitoring',
    'ERP/CRM Data Unification',
    'HIPAA/GDPR Compliance',
    'Dashboard Development',
    'KPI Tracking & Analysis',
    'Forecasting & Risk Modeling',
    'Cost Optimization Analysis'
  ];

  const education = [
    {
      degree: 'M.S. in Information Technology Management',
      school: 'Indiana Wesleyan University',
      year: '2024',
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      degree: 'B.E. in Engineering',
      school: 'Prathyusha Engineering College',
      year: '2022',
      icon: <Code className="h-6 w-6" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about transforming complex data into clear, actionable insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="animate-slide-up">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                I'm Bharadwaj Duvvuru, a data analyst with a strong focus on SQL, Excel, Power BI, and Python. 
                My work centers on turning raw data into real-world impact. I thrive on solving problems with 
                data and aligning insights with strategic business goals.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                With experience in marketing campaign analysis, healthcare claims risk assessment, and 
                financial dashboard development, I bring a comprehensive approach to data analysis that 
                bridges technical expertise with business acumen.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <BarChart3 className="h-6 w-6 text-primary mr-2" />
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover-lift cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="animate-slide-up delay-200">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Database className="h-6 w-6 text-primary mr-2" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover-lift gradient-card border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
                        <p className="text-muted-foreground mb-2">{edu.school}</p>
                        <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                          {edu.year}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;