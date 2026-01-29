import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";
import { Search, MoreHorizontal, Briefcase, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const jobs = [
    {
        id: 1,
        title: "Senior Frontend Engineer",
        company: "Acme Corp",
        location: "Remote",
        type: "Full-time",
        posted: "2 days ago",
        status: "Open",
    },
    {
        id: 2,
        title: "Product Designer",
        company: "Globex Corp",
        location: "New York, NY",
        type: "Contract",
        posted: "5 days ago",
        status: "Open",
    },
    {
        id: 3,
        title: "Backend Developer",
        company: "Initech",
        location: "Austin, TX",
        type: "Full-time",
        posted: "1 week ago",
        status: "Closed",
    },
    {
        id: 4,
        title: "Marketing Manager",
        company: "Soylent Corp",
        location: "Chicago, IL",
        type: "Full-time",
        posted: "3 days ago",
        status: "Open",
    },
];

export default function JobsPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Job Listing
                    </h1>
                    <p className="text-gray-400 mt-2">View and manage open positions.</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-colors">
                    Post Job
                </button>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>All Jobs</CardTitle>
                        <div className="relative w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                            <Input placeholder="Search jobs..." className="pl-9" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Job Title</TableHead>
                                <TableHead>Company</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Posted</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {jobs.map((job) => (
                                <TableRow key={job.id}>
                                    <TableCell>
                                        <Link href={`/jobs/${job.id}`} className="block group">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                                    <Briefcase size={16} />
                                                </div>
                                                <span className="font-medium text-white group-hover:text-blue-400 transition-colors">{job.title}</span>
                                            </div>
                                        </Link>
                                    </TableCell>
                                    <TableCell>{job.company}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2 text-gray-400">
                                            <MapPin size={14} />
                                            {job.location}
                                        </div>
                                    </TableCell>
                                    <TableCell>{job.type}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2 text-gray-400">
                                            <Clock size={14} />
                                            {job.posted}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${job.status === 'Open' ? 'bg-green-500/10 text-green-500' :
                                                'bg-gray-500/10 text-gray-500'
                                            }`}>
                                            {job.status}
                                        </span>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <button className="text-gray-400 hover:text-white transition-colors">
                                            <MoreHorizontal size={20} />
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
