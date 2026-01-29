import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { ArrowLeft, Building2, MapPin, Clock, DollarSign, Globe, Users } from "lucide-react";
import Link from "next/link";

export default function JobSnapshotPage({ params }: { params: { id: string } }) {
    // In a real app, fetch job details using params.id
    const job = {
        id: params.id,
        title: "Senior Frontend Engineer",
        company: "Acme Corp",
        location: "Remote",
        type: "Full-time",
        salary: "$120k - $160k",
        posted: "2 days ago",
        description: "We are looking for a Senior Frontend Engineer to join our team...",
        requirements: [
            "5+ years of experience with React",
            "Experience with Next.js and TypeScript",
            "Strong understanding of CSS and Tailwind",
        ],
    };

    return (
        <div className="space-y-8">
            <Link href="/jobs" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <ArrowLeft size={16} />
                Back to Jobs
            </Link>

            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">{job.title}</h1>
                    <div className="flex items-center gap-4 mt-4 text-gray-400">
                        <div className="flex items-center gap-2">
                            <Building2 size={18} />
                            {job.company}
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={18} />
                            {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={18} />
                            {job.posted}
                        </div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-colors">
                        Share
                    </button>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors">
                        Apply Now
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Job Description</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 leading-relaxed">
                                {job.description}
                                <br /><br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Requirements</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2 text-gray-300">
                                {job.requirements.map((req, i) => (
                                    <li key={i}>{req}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Snapshot</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <DollarSign className="text-green-400" size={20} />
                                    <span className="text-gray-300">Salary</span>
                                </div>
                                <span className="font-medium text-white">{job.salary}</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <Users className="text-blue-400" size={20} />
                                    <span className="text-gray-300">Team Size</span>
                                </div>
                                <span className="font-medium text-white">10-20</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <Globe className="text-purple-400" size={20} />
                                    <span className="text-gray-300">Website</span>
                                </div>
                                <a href="#" className="font-medium text-blue-400 hover:underline">Visit</a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
