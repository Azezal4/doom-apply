import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";
import { Search, MoreHorizontal, Building2 } from "lucide-react";

const companies = [
    {
        id: 1,
        name: "Acme Corp",
        industry: "Technology",
        location: "San Francisco, CA",
        employees: "100-500",
        status: "Active",
    },
    {
        id: 2,
        name: "Globex Corporation",
        industry: "Manufacturing",
        location: "New York, NY",
        employees: "1000+",
        status: "Active",
    },
    {
        id: 3,
        name: "Soylent Corp",
        industry: "Food & Beverage",
        location: "Chicago, IL",
        employees: "50-100",
        status: "Inactive",
    },
    {
        id: 4,
        name: "Initech",
        industry: "Software",
        location: "Austin, TX",
        employees: "10-50",
        status: "Active",
    },
    {
        id: 5,
        name: "Umbrella Corp",
        industry: "Pharmaceuticals",
        location: "Raccoon City",
        employees: "5000+",
        status: "Warning",
    },
];

export default function CompaniesPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Companies
                    </h1>
                    <p className="text-gray-400 mt-2">Manage your client relationships.</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-colors">
                    Add Company
                </button>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>All Companies</CardTitle>
                        <div className="relative w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                            <Input placeholder="Search companies..." className="pl-9" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Company</TableHead>
                                <TableHead>Industry</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Employees</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {companies.map((company) => (
                                <TableRow key={company.id}>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                                                <Building2 size={16} />
                                            </div>
                                            <span className="font-medium text-white">{company.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>{company.industry}</TableCell>
                                    <TableCell>{company.location}</TableCell>
                                    <TableCell>{company.employees}</TableCell>
                                    <TableCell>
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${company.status === 'Active' ? 'bg-green-500/10 text-green-500' :
                                                company.status === 'Inactive' ? 'bg-gray-500/10 text-gray-500' :
                                                    'bg-yellow-500/10 text-yellow-500'
                                            }`}>
                                            {company.status}
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
