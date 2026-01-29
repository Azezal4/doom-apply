import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function ReportsPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Reports
                </h1>
                <div className="flex gap-2">
                    <select className="bg-black/20 border border-white/10 rounded-xl px-4 py-2 text-white outline-none focus:border-blue-500">
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                        <option>This Year</option>
                    </select>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-colors">
                        Export
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
                <Card className="col-span-2">
                    <CardHeader>
                        <CardTitle>Revenue Growth</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px] w-full flex items-end gap-2 p-4">
                            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                                <div key={i} className="flex-1 bg-blue-600/20 hover:bg-blue-600/40 transition-colors rounded-t-sm relative group" style={{ height: `${h}%` }}>
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        ${h}k
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Key Metrics</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <div className="text-sm text-gray-400 mb-1">Total Placements</div>
                                <div className="flex items-end justify-between">
                                    <div className="text-2xl font-bold text-white">1,234</div>
                                    <div className="flex items-center text-green-400 text-sm">
                                        <ArrowUpRight size={16} />
                                        12%
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-400 mb-1">Avg. Time to Hire</div>
                                <div className="flex items-end justify-between">
                                    <div className="text-2xl font-bold text-white">18 days</div>
                                    <div className="flex items-center text-green-400 text-sm">
                                        <ArrowDownRight size={16} />
                                        2 days
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-400 mb-1">Conversion Rate</div>
                                <div className="flex items-end justify-between">
                                    <div className="text-2xl font-bold text-white">3.2%</div>
                                    <div className="flex items-center text-red-400 text-sm">
                                        <ArrowDownRight size={16} />
                                        0.5%
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
