import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Lock, Star, Zap } from "lucide-react";

export default function InsiderPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent flex items-center gap-3">
                    <Lock className="text-yellow-500" />
                    Insider Access
                </h1>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-yellow-500/20 bg-yellow-500/5">
                    <CardHeader>
                        <CardTitle className="text-yellow-500 flex items-center gap-2">
                            <Star size={20} />
                            Premium Market Insights
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-300 mb-4">
                            Exclusive analysis of current market trends, salary benchmarks, and hiring forecasts for Q3 2024.
                        </p>
                        <button className="text-yellow-500 hover:text-yellow-400 font-medium text-sm">
                            Read Report &rarr;
                        </button>
                    </CardContent>
                </Card>

                <Card className="border-purple-500/20 bg-purple-500/5">
                    <CardHeader>
                        <CardTitle className="text-purple-500 flex items-center gap-2">
                            <Zap size={20} />
                            Early Access Features
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-300 mb-4">
                            Try out our new AI-powered candidate matching algorithm before it goes public.
                        </p>
                        <button className="text-purple-500 hover:text-purple-400 font-medium text-sm">
                            Enable Beta &rarr;
                        </button>
                    </CardContent>
                </Card>
            </div>

            <h2 className="text-xl font-semibold text-white mt-8">Latest Insider Notes</h2>
            <div className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                    <Card key={i} className="hover:bg-white/5 transition-colors cursor-pointer">
                        <CardContent className="p-4 flex items-center justify-between">
                            <div>
                                <h3 className="font-medium text-white">Confidential: Upcoming Merger Details</h3>
                                <p className="text-sm text-gray-400 mt-1">Added by Admin • 2 hours ago</p>
                            </div>
                            <Lock size={16} className="text-gray-500" />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
