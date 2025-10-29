import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Award, 
  Zap, 
  Code, 
  Palette, 
  TrendingUp, 
  Video, 
  MessageCircle,
  Mail,
  Phone,
  Instagram,
  Twitter,
  Send,
  Star,
  Sparkles,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const ConferencePage = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    universityOrganization: '',
    studentId: '',
    areaOfInterest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date('2025-11-15T09:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // For now, just show success message since backend isn't connected
      toast({
        title: "Registration Successful! 🎉",
        description: "Thank you for registering! You'll receive a confirmation email shortly.",
      });
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        universityOrganization: '',
        studentId: '',
        areaOfInterest: ''
      });
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary/80"
          style={{
            backgroundImage: `url('./images/hero_students_1.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        
        {/* Countdown Timer */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="glass-effect rounded-lg px-6 py-3 text-white">
            <div className="flex items-center gap-4 text-sm font-medium">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">{timeLeft.days}</div>
                <div>Days</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">{timeLeft.hours}</div>
                <div>Hours</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">{timeLeft.minutes}</div>
                <div>Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">{timeLeft.seconds}</div>
                <div>Seconds</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
                Ilm Nexus Skills Awareness
              </span>
              <br />
              <span className="text-secondary">Conference 3.0</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Empowering Students with Digital & Career Skills for the Future
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8 text-lg">
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-lg">
                <Calendar className="w-5 h-5 text-secondary" />
                <span>November 15, 2025</span>
              </div>
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-lg">
                <Clock className="w-5 h-5 text-secondary" />
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-lg">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>University Conference Center</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-secondary text-primary hover:bg-secondary/90 text-xl px-8 py-6 animate-glow"
              onClick={() => scrollToSection('registration')}
            >
              Register Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
            <Code className="w-8 h-8 text-secondary" />
          </div>
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce delay-1000">
          <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-accent" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <img 
                src="./images/tech_conference_1.jpeg" 
                alt="Previous Ilm Nexus Conference" 
                className="rounded-2xl shadow-elegant w-full h-96 object-cover"
              />
            </div>
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6 gradient-text">About the Event</h2>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                Ilm Nexus is a youth-led digital skills and career empowerment hub that equips students with practical digital skills to prepare them for the future of work.
              </p>
              <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
                After successful editions at KWASU and FSS Oyo, we're proud to bring the 3rd edition to University of Ilorin, continuing our mission of building Africa's next generation of digital leaders.
              </p>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                Learn More About Ilm Nexus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Benefits Section */}
      <section id="skills" className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Skills & Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the digital skills that will shape your future and the exclusive benefits of attending
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {[
              { icon: Code, title: "Frontend Development", color: "text-blue-500" },
              { icon: Palette, title: "Graphics Design", color: "text-purple-500" },
              { icon: TrendingUp, title: "Digital Marketing", color: "text-green-500" },
              { icon: Video, title: "Video Editing", color: "text-red-500" },
              { icon: MessageCircle, title: "Communication Skills", color: "text-yellow-500" }
            ].map((skill, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardContent className="pt-6">
                  <skill.icon className={`w-12 h-12 mx-auto mb-4 ${skill.color}`} />
                  <h3 className="font-semibold text-lg">{skill.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Expert Speakers", desc: "Learn from industry professionals" },
              { icon: Zap, title: "Free Online Bootcamps", desc: "Hands-on practical sessions" },
              { icon: Award, title: "Certificates", desc: "Official recognition of participation" },
              { icon: Star, title: "Networking Opportunities", desc: "Connect with like-minded peers" }
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="pt-6">
                  <benefit.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Featured Speakers</h2>
            <p className="text-xl text-muted-foreground">
              Meet the industry experts who will share their knowledge and experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { image: "./images/speakers_1.jpeg", name: "Dr. Sarah Johnson", role: "Tech Innovation Lead", topic: "Future of Digital Skills" },
              { image: "./images/speakers_2.jpeg", name: "Michael Chen", role: "Senior Developer", topic: "Frontend Development Trends" },
              { image: "./images/speakers_3.jpeg", name: "Aisha Okafor", role: "Design Director", topic: "Creative Design Thinking" },
              { image: "./images/speakers_4.jpeg", name: "David Williams", role: "Marketing Strategist", topic: "Digital Marketing Mastery" }
            ].map((speaker, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-1">{speaker.name}</h3>
                  <p className="text-primary font-medium mb-2">{speaker.role}</p>
                  <p className="text-sm text-muted-foreground">{speaker.topic}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Event Schedule</h2>
            <p className="text-xl text-muted-foreground">
              A full day of learning, networking, and inspiration
            </p>
          </div>

          <div className="space-y-8">
            {[
              { time: "9:00 AM", title: "Opening Ceremony", desc: "Welcome address and conference overview" },
              { time: "10:00 AM", title: "Skill Insight Sessions", desc: "Deep dive into digital skills and career paths" },
              { time: "12:00 PM", title: "Panel Discussion", desc: "Industry experts discuss the future of work" },
              { time: "2:00 PM", title: "Networking Break", desc: "Connect with speakers and fellow attendees" },
              { time: "4:00 PM", title: "Closing Remarks", desc: "Key takeaways and next steps" }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    <Clock className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center gap-4 mb-2">
                      <Badge variant="secondary" className="text-primary bg-secondary/20">
                        {item.time}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Register to Attend</h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of students for a day of inspiration, learning, and networking
            </p>
          </div>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Join the Movement 🚀</CardTitle>
              <CardDescription className="text-center">
                Fill out the form below to secure your spot at the conference
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Input
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="studentId">Student ID</Label>
                    <Input
                      id="studentId"
                      value={formData.studentId}
                      onChange={(e) => setFormData({...formData, studentId: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="universityOrganization">University/Organization *</Label>
                  <Input
                    id="universityOrganization"
                    value={formData.universityOrganization}
                    onChange={(e) => setFormData({...formData, universityOrganization: e.target.value})}
                    placeholder="University of Ilorin"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="areaOfInterest">Area of Interest *</Label>
                  <Select 
                    value={formData.areaOfInterest || "none"} 
                    onValueChange={(value) => setFormData({...formData, areaOfInterest: value === "none" ? "" : value})}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your area of interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">Select an option</SelectItem>
                      <SelectItem value="frontend">Frontend Development</SelectItem>
                      <SelectItem value="graphics">Graphics Design</SelectItem>
                      <SelectItem value="marketing">Digital Marketing</SelectItem>
                      <SelectItem value="video">Video Editing</SelectItem>
                      <SelectItem value="communication">Communication Skills</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Registering..." : "Join the Movement 🚀"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Our Partners & Supporters</h2>
            <p className="text-xl text-muted-foreground">
              Thank you to our amazing partners who make this event possible
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {[
              { name: "Ilm Nexus", logo: "./images/ilm logo.png" },
              { name: "247 Print", logo: "./images/parter.jpeg" },
              { name: "University of Ilorin", logo: "./images/uni_ilorin-removebg-preview.png" },
              { name: "Luster Touch", logo: "./images/images.png" },
              { name: "Mafdesh", logo: "./images/parter.jpeg" },
              { name: "KWASU", logo: "./images/images.png" },
              { name: "FSS Oyo", logo: "./images/parter.jpeg" },
              { name: "Yolax Prints", logo: "./images/images.png" }
            ].map((partner, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-w-full max-h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
              Become a Sponsor
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">
              Have questions? We're here to help!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">ilmnexusglobal@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">09161699509</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">Venue</p>
                    <p className="text-muted-foreground">University Conference Center</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white">
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white">
                    <Twitter className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white">
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Location</h3>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>University Conference Center</p>
                  <p className="text-sm">Interactive map will be embedded here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Ilm Nexus Digital Skills Hub</h3>
            <p className="text-white/80">Building Skills. Shaping Futures.</p>
          </div>
          
          <Separator className="bg-white/20 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 mb-4 md:mb-0">
              © 2025 Ilm Nexus Digital Skills Hub | Building Africa's Next Generation of Digital Leaders
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ConferencePage;